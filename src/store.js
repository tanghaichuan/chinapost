import Vuex from 'vuex'
import Vue from 'vue'
import index from './module/index/store'
import agentView from './module/agentView/store'
import clientManage from 'module/clientmanage/store'
import queryList from 'module/queryList/store'

Vue.use(Vuex)

const modules = {
    index,
    agentView,
    clientManage,
    queryList
}

const store = new Vuex.Store({state: {}, modules})

export default store
