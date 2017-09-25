import * as constant from './constant'

export default {
    [constant.LOAD_FORM_ID](state, payload) {
        state.id = payload
    },
    [constant.LOAD_CUS_FORM_LIST](state, payload) {
        state.cusFormList.push(...payload)
    },
    [constant.LOAD_COM_FORM_LIST](state, payload) {
        state.comFormList.push(...payload)
    },
    [constant.LOAD_CUS_EXT_FORM_LIST](state,payload) {
        state.cusExtFormList = payload
    },
    [constant.LOAD_COM_EXT_FORM_LIST](state,payload) {
        state.comExtFormList = payload
    }
}