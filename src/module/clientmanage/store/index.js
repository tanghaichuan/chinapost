import mutations from './mutation'
import * as actions from './action'
import state from './state'
import getters from './getter'

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}