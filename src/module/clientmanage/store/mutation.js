import {LOAD_FORM_ID, LOAD_CUS_FORM_LIST,LOAD_EXT_FORM_LIST} from './constant'

export default {
    [LOAD_FORM_ID](state, payload) {
        state.id = payload
    },
    [LOAD_CUS_FORM_LIST](state, payload) {
        state.cusFormList.push(...payload)
    },
    [LOAD_EXT_FORM_LIST](state,payload) {
        state.extFormList = payload
    }
}