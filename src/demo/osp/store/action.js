import * as constants from './constant'

/*
 * 因为此模块逻辑不是vue组件内的逻辑，
 * 因此需要这样引入invokers模块来访问不同域的服务调用器
 */
import invokers from '../../../invokers'

const KEY_OSP_TOKEN = 'osp-token'

// 获取用户身份
export function fetchAuth({ commit }) {
  let auth = localStorage.getItem(KEY_OSP_TOKEN)
  auth = auth ? JSON.parse(auth) : null
  commit(constants.FETCH_AUTH, { auth, success: !!auth })
}

// 执行登陆操作
export function doLogin({ commit }, data) {
  return new Promise((resolve, reject) => {
    let s;
    // 模拟只有admin才能登录!
    if (data.username === 'admin' && data.password === '11' && data.verify.toLowerCase() === 'itzx') {
      s = invokers.services.osp.LOGIN // 模拟正确登录
    } else {
      s = invokers.services.osp.LOGIN_FAILURE // 模拟错误登录
    }

    // 调用osp域的远程登录接口
    invokers.domains.osp.post(s , data).then(ret => {
      let payload = ret.data
      if (payload.success) {
        localStorage.setItem(KEY_OSP_TOKEN, JSON.stringify(payload.auth))
        commit(constants.DO_LOGIN, payload)
        resolve()
      } else {
        reject('登录失败！请输入正确的登录信息。')
      }
    }).catch(err => {
      reject(`登录失败！${err}`)
    })
  })
}

// 注销
export function doLogout({ commit }) {
  // 调用osp域的远程注销接口
  invokers.domains.osp.post(invokers.services.osp.LOGOUT).then(ret => {
    let payload = ret.data
    if (payload.success) {
        localStorage.removeItem(KEY_OSP_TOKEN)
    }
    commit(constants.DO_LOGOUT, payload)
  })
}
