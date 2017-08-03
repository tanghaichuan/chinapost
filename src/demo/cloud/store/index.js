import * as actions from './action'
import mutations from './mutation'
import client from '../client/store'

export default {
    state: {
        auth: null,
        logined: false
    },
    actions,
    mutations,
    modules: {
        client
    }
}