import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'
export default {
    state: {
      showHistoryMenu: false,
      tabList: [{
          tabName: 'home',
          url: '/'
        },
        {
          tabName: '历史',
          url: '/trouble'
        }]
    },
    getters,
    actions,
    mutations
}
