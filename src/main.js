import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import taurus from 'aid-taurus-desktop'
import * as _ from 'lodash/core' // lodash依赖库 _.func 调用
// import VueI18n from 'vue-i18n'
/* locale for aid-taurus-desktop */
// import aidzhLocale from 'aid-taurus-desktop/src/locale/lang/zh-CN' import
// aidenLocale from 'aid-taurus-desktop/src/locale/lang/en-US'

import store from './store'
//import container from './container.vue'
import main from './app.vue'
import bus from './bus'
import router from './router'
import './invokers'
/* locale for project */
// import zhLocale from './local/zh-CN' import enLocale from './local/en-US'
// Vue.use(VueI18n) 生成本地化资源对象 const messages = {   'en-US': {     ...enLocale,
// ...aidenLocale   },   'zh-CN': {     ...zhLocale,     ...aidzhLocale   } }
// const i18n = new VueI18n({   locale: bus.lang, // 设置当前语言   messages //
// 设置本地化资源 })

Vue.use(taurus, {
  // i18n: (path, options) => {   let value = i18n.t(path, options)   if (value
  // !== null && value !== undefined) return value   return '' }
})

// 将路由状态同步到store中
sync(store, router)

const app = new Vue({
  store, router,
  // i18n,
  render(h) {
    return h(main)
  }
})

if (module.hot) {
  module
    .hot
    .accept()
}

app.$mount('#app')
