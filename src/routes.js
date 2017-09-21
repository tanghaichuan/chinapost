import {proxyLoad} from './common/js/proxyLoad'

// 客管路由
import client from './module/clientmanage/route'
import details from './module/details/route'
// 360路由
import agentview from './module/agentView/route'

// const menu = r => require.ensure([], () => r(require('module/clientmanage/menu')), 'menu')

// const test = proxyLoad('demo/test/test', 'test')

// const tabel = r => require.ensure([], () => r(require('demo/test/table1')), 'test')
// const dynamicForm = r => require.ensure([], () => r(require('demo/test/dynamicForm')), 'test')
// const droptree = r => require.ensure([], () => r(require('demo/portal/components/droptree.vue')), 'test')
// const checkBoxTree = r => require.ensure([], () => r(require('demo/portal/components/checkBoxTree.vue')), 'test')
export default[
  {
    path : '/',
    component : require('./module/container.vue'),
    children : [
      {
        name: 'Home',
        path: '',
        component: require('./module/index/home.vue')
      }
    ]
  }, {
    name : 'Login',
    path : '/login',
    component : require('./module/login/login.vue')
  },
  ...client,
  ...agentview,
  ...details,
  {
    path : '*',
    component : {
      template: '<div>not found</div>'
    }
  }
]
