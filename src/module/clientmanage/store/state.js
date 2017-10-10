export default {
    // 渲染层原始特征值模型
    cusRenderFormList : {
        businessParams: {
            isCollapse: true,
            isAsync: true,
            title: "个人客户基本信息",
            formItem: [
                {
                    chaValue: []
                }
            ]
        },
        idenList: {
            isExtend: true,
            isCollapse: true,
            title: "个人客户识别信息",
            formItem: [
                {
                    chaValue: []
                }
            ]
        },
        addressList: {
            isExtend: true,
            isCollapse: true,
            title: "个人客户地址信息",
            formItem: [
                {
                    chaValue: []
                }
            ]
        },
        contMediumList: {
            isExtend: true,
            isCollapse: true,
            title: "个人客户联系信息",
            formItem: [
                {
                    chaValue: []
                }

            ]
        },
        relPersonList: {
            isExtend: true,
            isCollapse: true,
            isAsync: true,
            title: "个人客户其他关系人信息",
            formItem: [
                {
                    chaValue: []
                }
            ]
        }
    },
    // 数据层原始特征值模型(与后端模型同构)
    cusDataFormList : {
        
    },
    // 管理个人特征值列表（加载更多）
    cusExtFormList : []
}