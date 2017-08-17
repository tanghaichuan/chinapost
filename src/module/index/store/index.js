import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'
export default {
    state: {
      showHistoryMenu: false,
      tabList: [{
          tabName: 'home',
          url: '/'
        }]
    },
    getters,
    actions,
    mutations
}
