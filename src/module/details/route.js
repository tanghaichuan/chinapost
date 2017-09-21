const routes = [
    {
        name: '客户管理',
        path: '/client',
        component: require('module/clientmanage/menu.vue'),
        children: [
            {
                path: 'customerDtl',
                name: '个人客户信息详情',
                component: require('module/details/customerDtl.vue')
            },
            {
                path: 'companyDtl',
                name: '机构客户信息详情',
                component: require('module/details/companyDtl.vue')
            }
        ]
    }
]

export default routes