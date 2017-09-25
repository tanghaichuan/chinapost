const routes = [
    {
        name: '客户管理',
        path: '/client',
        component: require('module/clientmanage/menu.vue'),
        children: [
            {
                path: '',
                name: 'wrapper',
                component: require('module/clientmanage/wrapper/wrapper.vue')
            }, {
                path: 'customer',
                name: '个人客户管理',
                meta: "个人客户",
                component: require('module/clientmanage/customer.vue')
            }, {
                path: 'company',
                name: '机构客户管理',
                meta: "机构客户",
                component: require('module/clientmanage/company.vue')
            }, {
                path: 'querylist',
                name: '查询列表',
                component: require('module/clientmanage/querylist.vue')
            }
        ]
    },
    {
        name: '客户管理',
        path: '/test',
        component: require('demo/test/test.vue')
    }
]

export default routes