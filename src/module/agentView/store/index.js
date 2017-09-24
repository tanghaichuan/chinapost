import * as actions from './action'
import mutations from './mutation'
import getters from './getters'
export default {
    namespaced : true,
    state : {
      queryCustomerList:[]
    },
    getters,
    actions,
    mutations
}
