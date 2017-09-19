import mutations from './mutation'
import * as actions from './action'

export default {
    namespaced : true,
    state : {
        id: ''
    },
    mutations,
    actions
}