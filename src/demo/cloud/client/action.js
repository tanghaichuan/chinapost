import axios from "axios"
import * as constants from "./constant"

export function requestClients({ commit }) {
    commit(constants.REQUEST_CLIENTS)
}

export function responseClients({ commit }, payload) {
    commit(constants.RESPONSE_CLIENTS, payload)
}

export function fetchClients({ dispatch }) {
    dispatch('requestClients')
    axios.get('/mock/clients').then(ret => {
        ret = ret.data
        dispatch('responseClients', ret.data)
    }).catch(err => console.log('err', err))
}
