import cloud from './demo/cloud/route'
import osp from './demo/osp/route'

export default [
  {
    name: 'Index',
    path: '/',
    component: require('./module/index/app.vue')
  },
  {
    name: 'Login',
    path: '/login',
    component: require('./module/login/login.vue')
  },
  ...cloud,
  {
    name: '管理门户示例',
    path: '/portal',
    component: require('./demo/portal/portal.vue')
  },
  ...osp,
  {
    path: '*',
    component: {
      template: '<div>not found</div>'
    }
  }
]
