import {
  proxyLoad
} from './common/js/proxyLoad'

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

export default [{
    path: '/',
    component: require('./module/container.vue'),
    children: [{
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
    }]
  },
  {
    name: 'Login',
    path: '/login',
    component: require('./module/login/login.vue')
  },
  {
    name: '管理门户示例',
    path: '/portal',
    component: require('./demo/portal/portal.vue'),
    children: [{
        name: 'wrapper',
        path: '',
        component: require('./demo/portal/wrapper.vue')
      },
      {
        name: '客户360视图',
        path: 'agentview/:id',
        component: require('demo/portal/wrapper.vue')
      },
      {
        name: '客户管理',
        path: 'relation/1',
        component: comTable
      },
      {
        name: '客户管理',
        path: 'relation/2',
        component: frozenTable
      },
      {
        name: '客户管理',
        path: 'relation/3',
        component: editTable
      },
      {
        path: '*',
        component: require('demo/portal/wrapper.vue')
      }
    ]
  },
  {
    name: 'table示例',
    path: '/demo-table',
    component: tabelDemo
  },
  {
    name: 'test',
    path: '/test',
    component: test
  },
  {
    name: 'table',
    path: '/table',
    component: tabel
  },
  {
    name: 'menu',
    path: '/menu',
    component: menu,
    children: [{
        name: 'comperhenTable',
        path: '',
        component: comTable
      },
      {
        name: 'frozeTable',
        path: 'froze',
        component: frozenTable
      },
      {
        name: 'ediTable',
        path: 'editTable',
        component: editTable
      }
    ]
  },
  {
    name: 'conperhensiveTable',
    path: '/comTable',
    component: comTable
  },
  {
    name: 'permissionAlert',
    path: '/alert',
    component: permissionAlert
  },
  // {
  //   name : 'query',
  //   path : '/query',
  //   component : query
  // },
  {
    name: 'editTable',
    path: '/edit-table',
    component: editTable
  },
  {
    name: 'forzenTable',
    path: '/frozen-table',
    component: frozenTable
  },
  ...cloud,
  ...osp,
  {
    path: '*',
    component: {
      template: '<div>not found</div>'
    }
  }
]