import cloud from './demo/cloud/route'
import osp from './demo/osp/route'

const test = r => require.ensure([], () => r(require('demo/test/test')), 'test')
const tabel =  r => require.ensure([], () => r(require('demo/test/table1')), 'test')
const tabelDemo =  r => require.ensure([], () => r(require('demo/table/table')), 'test')
const comTable =  r => require.ensure([], () => r(require('demo/owns/listTable/comperhensiveTable')), 'test')
const editTable = r => require.ensure([], () => r(require('demo/owns/listTable/editTable')), 'test')
const permissionAlert = r => require.ensure([], () => r(require('demo/permissionview/alert')), 'test')

export default[
  {
    path : '/',
    component : require('./module/index/index.vue'),
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
        path: '/permission/:id',
        component: require('./module/permission/permission.vue')
      }
      // ,{
      //   path : '*',
      //   component : {
      //     template: '<div>not found</div>'
      //   }
      // }
    ]
  }, {
    name : 'Login',
    path : '/login',
    component : require('./module/login/login.vue')
  }, {
    name : '管理门户示例',
    path : '/portal',
    component : require('./demo/portal/portal.vue')
  },  {
    name : 'table示例',
    path : '/demo-table',
    component : tabelDemo
  },
  {
    name : 'test',
    path : '/test',
    component : test
  },
  {
    name : 'table',
    path : '/table',
    component : tabel
  },
  {
    name : 'conperhensiveTable',
    path : '/comTable',
    component :  comTable
  },
  {
    name : 'permissionAlert',
    path : '/alert',
    component :  permissionAlert
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
  },
  ...cloud,
  ...osp, {
    path : '*',
    component : {
      template: '<div>not found</div>'
    }
  }
]
