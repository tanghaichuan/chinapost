/**
 * 本模块实现路由控制逻辑
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import taurus from 'aid-taurus-desktop'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  taurus.TGlobalLoading.start()
  // 模拟OSP登录逻辑
  if (/^\/osp/.test(to.path)) { // 进入osp子模块
    // // 从地址栏手工输入地址切换路由或者新开浏览器页签访问osp页面
    // if (from.name === null) {
    //   router.app.$store.dispatch('osp/fetchAuth') // 从本地存储对象中取登录信息
    // }
    // // osp没有登录且不是进入osp登录页
    // if (router.app.$store.state.osp.logined === false && to.path !== '/osp') {
    //   router.push({ path: '/osp' }) // 跳转到OSP登录页面
    //   return
    // }
  }
  next()
})

router.afterEach(() => {
  taurus.TGlobalLoading.finish()
})

export default router
