const routes = [
  {
    name: '研发云示例',
    path: '/cloud',
    component: require('./login/login.vue')
  },
  {
    path: '/cloud/portal',
    component: require('./portal/portal.vue'),
    children: [
      {
        path: '',
        name: 'cloud.home',
        component: require('./portal/home.vue')
      },
      {
        path: 'client',
        name: 'cloud.client',
        component: require('./client/client.vue')
      }
    ]
  }
]

export default routes