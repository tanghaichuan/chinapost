import {LOAD_FORM_ID} from './constant'

export default {
    [LOAD_FORM_ID](state, payload) {
        state.id = payload
    }
}