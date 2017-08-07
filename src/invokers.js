/**
 * 本模块以插件形式实现了分域服务调用器
 * 它依赖的配置文件为
 * asset/conf/services.json -- 服务配置
 * asset/conf/domains.json  -- 域服务调用配置(包括本域)
 */
import Vue from 'vue'
import axios from 'axios'
import domainsConfig from './asset/conf/domains'
import servicesConfig from './asset/conf/services'

let domains = getDomains(domainsConfig)
let services = getServices(servicesConfig)

// 将服务配置转为只读对象
function getServices(conf) {
  let obj = Object.create(null)
  for (let key in conf) {
    if (typeof conf[key] === 'object') {
      Object.defineProperty(obj, key, {
        value: getServices(conf[key]),
        enumerable: true,
        writable: false,
        configurable: false
      })
    } else {
      Object.defineProperty(obj, key, {
        value: conf[key],
        enumerable: true,
        writable: false,
        configurable: false
      })
    }
  }
  return obj
}

// 深度合并多个对象，返回合并后的新对象
function merge(...objs) {
  let result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }
  for (let obj of objs) {
    for (let key in obj) {
      assignValue(obj[key], key)
    }
  }
  return result;
}

function getDomains(conf) {
  let result = {};
  let domains = conf.domains || null
  let num = 0
  if (domains !== null) {
    for (let key in domains) {
      key = key.trim()
      if (key !== '') {
        if (key === '$' && typeof domains[key] === 'object') {
          axios.defaults = merge(axios.defaults, domains.$)
        } else {
          result[key] = axios.create(domains[key])
          num ++
        }
      }
    }
  }
  return (num > 0) ? result : null
}

const InvokersPlugin = {
  install: (Vue, options) => {
    Vue.services = services
    Vue.domains = domains
    Vue.prototype.$domains = domains
    Vue.prototype.$services = services
  }
}

// 注册插件
Vue.use(InvokersPlugin)

export default {
  services,
  domains
}
