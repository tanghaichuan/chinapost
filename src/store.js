import Vuex from 'vuex'
import Vue from 'vue'
import index from './module/index/store'
import agentView from './module/agentView/store'
import agent from './module/agentView/store/agent'

Vue.use(Vuex)

const modules = {
    index,
    agentView,
    agent
}

const store = new Vuex.Store({state: {}, modules})

export default store
