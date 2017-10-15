import * as API from './api'
import invokers from '../../../invokers'

// 发送post请求
async function postUrlAccount(url, data) {
    return invokers
        .domains
        .cnpost
        .post(url, data)
}

export async function loadCustomerList(data) {
    try {
        let res = await postUrlAccount(API.queryCustomerListByCustomerManagerId, data)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export async function judgeCustomerUnicity(data) {
    try {
        let res = await postUrlAccount(API.judgeCustomerUnicity, data)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
