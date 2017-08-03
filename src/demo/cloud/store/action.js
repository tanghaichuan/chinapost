import axios from 'axios'
import * as constants from './constant'

// 获取用户身份
export function fetchAuth({ commit }) {
    let auth = localStorage.getItem('auth')
    auth = auth ? JSON.parse(auth) : null
    commit(constants.FETCH_AUTH, { auth, success: !!auth })
}

// 执行登陆操作
export function doLogin({ commit }, data) {
    // 调用远程登陆接口
    axios.post('/mock/dologin', data).then(ret => {
        let payload = ret.data
        if (payload.success) {
            localStorage.setItem('auth', JSON.stringify(payload.auth))
        }
        commit(constants.DO_LOGIN, payload)
    })
}

// 执行登出操作
export function doLogout({ commit }) {
    // 调用远程注销接口
    axios.post('/mock/dologout').then(ret => {
        let payload = ret.data
        if (payload.success) {
            localStorage.removeItem('auth')
        }
        commit(constants.DO_LOGOUT, payload)
    })
}