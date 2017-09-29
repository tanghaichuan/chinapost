import * as API from './api'

// 客户特征值变量 specCode
const IND_CUST_BASE_CHA = 'IND_CUST_BASE_CHA' // 个人客户基本信息
const IND_CUST_EXT_CHA = 'IND_CUST_EXT_CHA' // 个人客户扩展信息
const COMPANY_CUST_BASE_CHA = 'COMPANY_CUST_BASE_CHA' // 政企客户基本信息
const COMPANY_CUST_EXT_CHA = 'COMPANY_CUST_EXT_CHA' // 政企客户扩展信息
const CUST_IDEN_BASE_CHA = 'CUST_IDEN_BASE_CHA' // 客户认证信息
const CUST_ADDR_BASE_CHA = 'CUST_ADDR_BASE_CHA' // 客户地址信息
const CUST_CONT_MEDIUM_CHA = 'CUST_CONT_MEDIUM_CHA' // 客户联系媒介信息
const CUST_REL_PERSON_CHA = 'CUST_ REL_PERSON_CHA' // 客户关系人信息

import * as constants from './constant'
import invokers from '../../../invokers'

// 发送post请求
async function postUrlAccount(url, data) {
    return await invokers
        .domains
        .cnpost
        .post(url, data)
}
// 加载客户信息特征值列表
export async function loadFormItem({
    commit
}, array) {
    return new Promise(async(resolve, reject) => {
        try {
            let res = [],
                temp
            // 合并请求
            for (let i = 0; i < array.length; i++) {
                // 加载请求
                temp = await postUrlAccount(API.urlArr[i], array[i])
                // 请求成功
                if (temp.data.systemParams.RESPONSE_INFO.responseMsg === 'OK') {
                    res.push(temp.data.businessParams)
                } else {
                    reject(`加载失败`)
                }
            }
            // 这里将个人客户和机构客户的表单元素分开存储
            if (array[0].businessParams.specCode === "IND_CUST_BASE_CHA") {
                commit(constants.LOAD_CUS_FORM_LIST, res)
            } else {
                commit(constants.LOAD_COM_FORM_LIST, res)
            }
            resolve()
        } catch (error) {
            reject(`加载失败${error}`)
        }
    })
}
// 加载客户更多信息特征值列表
export async function loadExtFormItem({
    commit
}, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let temp = await postUrlAccount(API.queryCustomerCharacterByIdUrl, data)
            if (temp.data.systemParams.RESPONSE_INFO.responseMsg === 'OK') {
                if (data.businessParams.specCode === "IDN_CUST_BASE_CHA") {
                    commit(constants.LOAD_CUS_EXT_FORM_LIST, temp.data.businessParams)
                } else {
                    commit(constants.LOAD_COM_EXT_FORM_LIST, temp.data.businessParams)
                }
                resolve()
            } else {
                reject(`加载失败`)
            }
        } catch (error) {
            reject(`加载失败${error}`)
        }
    })
}
// 保存客户数据
export async function saveFormItem({
    commit
}, data) {
    return new Promise(async(resolve, reject) => {
        try {
            let res = await postUrlAccount(API.saveCustomerInfo, data)
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    })
}