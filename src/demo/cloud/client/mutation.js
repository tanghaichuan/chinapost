import * as constants from './constant'

const mutations = {
    [constants.REQUEST_CLIENTS](state) {
        state.clientsFetching = true
    },
    [constants.RESPONSE_CLIENTS](state, payload) {
        state.clients = payload
        state.clientsFetching = false
        state.clientsFetched = true
    }
}

export default mutations
