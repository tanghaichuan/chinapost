import Vuex from 'vuex'
import Vue from 'vue'
import cloud from './demo/cloud/store'
import osp from './demo/osp/store'

Vue.use(Vuex)

const modules = {
    cloud,
    osp
}

const store = new Vuex.Store({
    state: {},
    modules
})

export default store
