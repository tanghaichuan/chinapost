import {proxyLoad} from './common/js/proxyLoad'

import cloud from './demo/cloud/route'
import osp from './demo/osp/route'

const test = proxyLoad('demo/test/test', 'test')
//const test = r => require.ensure([], () => r(require("demo/test/test")), 'test')
const tabel = r => require.ensure([], () => r(require('demo/test/table1')), 'test')
const tabelDemo = r => require.ensure([], () => r(require('demo/table/table')), 'test')
const comTable = r => require.ensure([], () => r(require('demo/owns/listTable/comperhensiveTable')), 'test')
const editTable = r => require.ensure([], () => r(require('demo/owns/listTable/editTable')), 'test')
const frozenTable = r => require.ensure([], () => r(require('demo/owns/listTable/frozenTable')), 'test')
const permissionAlert = r => require.ensure([], () => r(require('demo/permissionview/alert')), 'test')
const menu = r => require.ensure([], () => r(require('demo/portal/menu')), 'test')
const merge = r => require.ensure([], () => r(require('demo/owns/listTable/mergeTable')), 'test')
const formStandard = r => require.ensure([], () => r(require('demo/owns/formlist/formStandard')), 'test')
const highquery = r => require.ensure([], () => r(require('demo/owns/formlist/highquery')), 'test')
const alignment = r => require.ensure([], () => r(require('demo/owns/formlist/alignment')), 'test')
const popupEdit = r => require.ensure([], () => r(require('demo/owns/formlist/popupEdit')), 'test')

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
    name : '管理门户示例',
    path : '/portal',
    component : require('./demo/portal/portal.vue'),
    children : [
      {
        name: 'wrapper',
        path: '',
        component: require('./demo/portal/wrapper.vue')
      }, {
        name: '客户360视图',
        path: 'agentview/:id',
        component: require('demo/portal/wrapper.vue')
      }, {
        name: '客户360视图',
        path: 'relation/1',
        component: comTable
      }, {
        name: '客户360视图',
        path: 'relation/2',
        component: frozenTable
      }, {
        name: '客户360视图',
        path: 'relation/3',
        component: editTable
      }, {
        name: '客户管理',
        path: 'customer/:id',
        component: require('demo/portal/wrapper.vue')
      }, {
        name: '销售管理',
        path: 'sale/:id',
        component: require('demo/portal/wrapper.vue')
      }, {
        name: '服务管理',
        path: 'service/:id',
        component: require('demo/portal/wrapper.vue')
      }, {
        name: '营销管理',
        path: 'market/:id',
        component: require('demo/portal/wrapper.vue')
      }, {
        name: '客户洞察',
        path: 'trouble/:id',
        component: require('demo/portal/wrapper.vue')
      }, {
        name: '知识库管理',
        path: 'knowledge/:id',
        component: require('demo/portal/wrapper.vue')
      }, {
        name: '渠道管理',
        path: 'channel/:id',
        component: require('demo/portal/wrapper.vue')
      }, {
        path: '*',
        component: require('demo/portal/wrapper.vue')
      }
    ]
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
        name: 'comperhenTable',
        path: '',
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
  // {
  //   name : 'query',
  //   path : '/query',
  //   component : query
  // },
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
    },
    {
        name : 'popupEdit',
        path : '/popupEdit',
        component : popupEdit
    },
  ...cloud,
  ...osp, {
    path : '*',
    component : {
      template: '<div>not found</div>'
    }
  }
]
