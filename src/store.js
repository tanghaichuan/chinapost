import Vuex from 'vuex'
import Vue from 'vue'
import cloud from './demo/cloud/store'
import osp from './demo/osp/store'
import index from './module/index/store'
import agentView from './module/agentView/store'
import portal from './demo/portal/store'

Vue.use(Vuex)

const modules = {
    cloud,
    osp,
    index,
    portal,
    agentView
}

const store = new Vuex.Store({state: {}, modules})

export default store
