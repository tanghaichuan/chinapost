const routes = [
    {
        name: '360视图',
        path: '/agentview',
        component: require('module/clientmanage/menu.vue'),
        children: [
            {
                path: '',
                name: '360视图',
                meta: '360视图',
                component: require('module/agentView/emptyView.vue')
            },
            {
                path: 'clientSelect',
                name: '360视图',
                meta: '360视图',
                component: require('module/agentView/clientSelect.vue')
            },
            {
                path: 'index',
                name: '360视图',
                meta: '360视图',
                component: require('module/agentView/index')
            }
        ]
    }
]

export default routes
