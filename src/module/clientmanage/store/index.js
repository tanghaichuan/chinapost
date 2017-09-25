import mutations from './mutation'
import * as actions from './action'
import state from './state'

export default {
    namespaced : true,
    state,
    mutations,
    actions
}