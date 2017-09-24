import Vuex from 'vuex'
import Vue from 'vue'
import index from './module/index/store'
import agentView from './module/agentView/store'

Vue.use(Vuex)

const modules = {
    index,
    agentView
}

const store = new Vuex.Store({state: {}, modules})

export default store
