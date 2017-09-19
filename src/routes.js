import {proxyLoad} from './common/js/proxyLoad'

import client from './module/clientmanage/route'

const menu = r => require.ensure([], () => r(require('module/clientmanage/menu')), 'menu')

const test = proxyLoad('demo/test/test', 'test')

const tabel = r => require.ensure([], () => r(require('demo/test/table1')), 'test')
const dynamicForm = r => require.ensure([], () => r(require('demo/test/dynamicForm')), 'test')
const droptree = r => require.ensure([], () => r(require('demo/portal/components/droptree.vue')), 'test')
const agentView = r => require.ensure([], () => r(require('module/agentView/index.vue')), 'agentView')
const checkBoxTree = r => require.ensure([], () => r(require('demo/portal/components/checkBoxTree.vue')), 'test')
export default[
  {
    path : '/',
    component : require('./module/container.vue'),
    children : [
      {
        name: 'Home',
        path: '',
        component: require('./module/index/home.vue')
      }, {
        name: 'Agentview',
        path: '/agentview',
        component: agentView
      }, {
        name: 'Permission',
        path: '/permissionview',
        component: require('module/clientmanage/wrapper/wrapper.vue')
      }
    ]
  }, {
    name : 'test',
    path : '/test',
    component : test
  }, {
    name : 'Login',
    path : '/login',
    component : require('./module/login/login.vue')
  }, {
    name : 'menu',
    path : '/menu',
    component : menu,
    children : [
      {
        name: '客户管理',
        path: '',
        component: require('module/clientmanage/wrapper/wrapper.vue')
      }, {
        name: '客户管理',
        path: 'clientInfo',
        component: require('module/clientmanage/customer.vue')
      }, {
        name: '企业管理',
        path: 'customer',
        component: require('module/clientmanage/company.vue')
      }
    ]
  },
  // {   name : 'query',   path : '/query',   component : query },
  ...client, {
    path : '*',
    component : {
      template: '<div>not found</div>'
    }
  }
]
