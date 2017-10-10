export default {
    // 渲染层数据模型，将数据引用指向原始模型
    getCusFormRenderModel(state) {
        return state.cusRenderFormList
    },
    // 数据层数据模型(结构与后台模型同构)
    getCusFormDataModel(state) {
        return state.cusDataFormList
    }
}