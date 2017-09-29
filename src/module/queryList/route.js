const routes = [
    {
        name: '客户管理',
        path: '/client',
        component: require('module/clientmanage/menu.vue'),
        children: [
            {
                path: 'queryList',
                name: '查询列表',
                component: require('module/queryList/queryList.vue')
            }
        ]
    }
]

export default routes