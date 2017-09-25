import * as constants from './constant'

export default {
  [constants.QUERY_CUSTOMER_LIST](state, payload) {
  	state.queryCustomerList.push(payload)
  }
}

