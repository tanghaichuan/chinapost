const routes = [{
    name: '权限管理',
    path: '/uspaManage',
    component: require('module/clientmanage/menu.vue'),
    children: [{
        path: 'uspa/:pathName',
        name: 'uspa',
        meta: '360视图',
        component: require('module/uspamanage/uspa.vue')
    }
    ]
}]

export default routes