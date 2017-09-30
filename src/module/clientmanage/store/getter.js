import update from 'immutability-helper'
export default {
    // 渲染层数据模型，从原始模型获取数据
    getCusFormRenderModel(state) {
        return (() => {
            Object
                .keys(state.cusRenderFormList)
                .forEach((item, index, array) => {
                    state.cusRenderFormList[item].formItem[0].formList.push(...state.cusFormList[item])
                })
            return state.cusRenderFormList
        }).bind(this, state)
    },
    // 数据层数据模型(结构与后台模型同构)
    getCusFormDataModel : (state) => {
        return state.cusFormList
    }
}