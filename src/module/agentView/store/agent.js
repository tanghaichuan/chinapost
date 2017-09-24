import Vue from 'vue'

const state = {
	//数据
	queryCustomerList:[]
}

const getters = {
	//页面通过getters 调用state里面的值
	 getQueryCustomerList(state){
		return state.queryCustomerList
	}
}

const actions = {

}

const mutations = {
	
	addQueryCustomerList(state,payload){
		state.queryCustomerList.push(payload)
	}
}	

export default{
	state,
	getters,
	actions,
	mutations
}