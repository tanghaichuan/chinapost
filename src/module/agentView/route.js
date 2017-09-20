const routes = [
    {
        name: '360视图',
        path: '/agentview',
        component: require('module/agentView/index'),
        children: [
            // {
            //     path: '',
            //     name: 'wrapper',
            //     component: require('module/clientmanage/wrapper/wrapper.vue')
            // }
        ]
    }
]

export default routes
