import {proxyLoad} from './common/js/proxyLoad'

import cloud from './demo/cloud/route'
import osp from './demo/osp/route'
import client from './module/clientmanage/route'

const menu = r => require.ensure([], () => r(require('module/clientmanage/menu')), 'menu')

const test = proxyLoad('demo/test/test', 'test')
// const test = r => require.ensure([], () => r(require("demo/test/test")),
// 'test')
const tabel = r => require.ensure([], () => r(require('demo/test/table1')), 'test')
const tabelDemo = r => require.ensure([], () => r(require('demo/table/table')), 'test')
const comTable = r => require.ensure([], () => r(require('demo/owns/listTable/comperhensiveTable')), 'test')
const editTable = r => require.ensure([], () => r(require('demo/owns/listTable/editTable')), 'test')
const frozenTable = r => require.ensure([], () => r(require('demo/owns/listTable/frozenTable')), 'test')
const permissionAlert = r => require.ensure([], () => r(require('demo/permissionview/alert')), 'test')
const merge = r => require.ensure([], () => r(require('demo/owns/listTable/mergeTable')), 'test')
const formStandard = r => require.ensure([], () => r(require('demo/owns/formlist/formStandard')), 'test')
const highquery = r => require.ensure([], () => r(require('demo/owns/formlist/highquery')), 'test')
const alignment = r => require.ensure([], () => r(require('demo/owns/formlist/alignment')), 'test')
const popupEdit = r => require.ensure([], () => r(require('demo/owns/formlist/popupEdit')), 'test')
const dynamicForm = r => require.ensure([], () => r(require('demo/test/dynamicForm')), 'test')
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
        path: '/agentview/:id',
        component: require('./module/index/home.vue')
      }, {
        name: 'Permission',
        path: '/permissionview',
        component: require('./demo/permissionview/view.vue')
      }
    ]
  }, {
    name : 'Login',
    path : '/login',
    component : require('./module/login/login.vue')
  }, {
    name : 'table示例',
    path : '/demo-table',
    component : tabelDemo
  }, {
    name : 'test',
    path : '/test',
    component : test
  }, {
    name : 'table',
    path : '/table',
    component : tabel
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
        name: 'comperhenTable',
        path: 'comperhenTable',
        component: comTable
      }, {
        name: 'frozeTable',
        path: 'froze',
        component: frozenTable
      }, {
        name: 'ediTable',
        path: 'editTable',
        component: editTable
      }, {
        name: 'mergeTable',
        path: 'mergeTable',
        component: merge
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
  }, {
    name : 'conperhensiveTable',
    path : '/comTable',
    component : comTable
  }, {
    name : 'permissionAlert',
    path : '/alert',
    component : permissionAlert
  },
  // {   name : 'query',   path : '/query',   component : query },
  {
    name : 'editTable',
    path : '/edit-table',
    component : editTable
  }, {
    name : 'forzenTable',
    path : '/frozen-table',
    component : frozenTable
  }, {
    name : 'formStandard',
    path : '/formStandard',
    component : formStandard
  }, {
    name : 'highquery',
    path : '/highquery',
    component : highquery
  }, {
    name : 'alignment',
    path : '/alignment',
    component : alignment
  }, {
    name : 'popupEdit',
    path : '/popupEdit',
    component : popupEdit
  }, {
    name : 'dynamicForm',
    path : '/dynamicForm',
    component : dynamicForm
  }, {
    name : 'checkBoxTree',
    path : '/checkBoxTree',
    component : checkBoxTree
  },
  ...client,
  ...cloud,
  ...osp, {
    path : '*',
    component : {
      template: '<div>not found</div>'
    }
  }
]