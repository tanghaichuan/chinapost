import {DO_LOGIN, DO_LOGOUT, FETCH_AUTH} from './constant'

export default {
    [DO_LOGIN](state, payload) {
        state.logined = payload.success
        if (state.logined) {
            state.auth = payload.auth
        }
    },
    [DO_LOGOUT](state, payload) {
        state.logined = !payload.success
        if (state.logouted) {
            state.auth = null
        }
    },
    [FETCH_AUTH](state, payload) {
        state.logined = payload.success
        state.auth = payload.auth
    }
}