const routes = [
  {
    name: 'osp',
    path: '/osp',
    component: require('./login.vue')
  },
  {
    name: 'osp.portal',
    path: '/osp/portal',
    component: require('./portal/portal.vue'),
    children: [
      {
        path: '',
        name: 'osp.dashboard',
        component: require('./dashboard.vue')
      },
      {
        path: 'access-app',
        name: 'osp.access-app',
        component: require('./access-application.vue')
      },
      {
        path: 'access-app-online',
        name: 'osp.access-app-online',
        component: require('./access-application-online.vue')
      },
      {
        path: 'person-info',
        name: 'osp.person.info',
        component: require('./person-info.vue')
      },
      {
        path: 'message',
        name: 'osp.message',
        component: require('./message.vue')
      },
      {
        path: 'ability',
        name: 'osp.ability',
        component: require('./ability.vue')
      },
      {
        path: 'coming-soon',
        name: 'coming.soon',
        component: require('./coming-soon.vue')
      }
    ]
  }
]

export default routes
