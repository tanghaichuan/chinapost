export default {
    // 客管模块个人客户
    cusFormList : { // 原始特征值模型
        businessParams: [],
        idenList: [],
        addressList: [],
        contMediumList: [],
        relPersonList: []
    },
    // 渲染层特征值模型
    cusRenderFormList : {
        businessParams: {
            isCollapse: true,
            isAsync: true,
            title: "个人客户基本信息",
            formItem: [
                {
                    formList: []
                }
            ]
        },
        idenList: {
            isExtend: true,
            isCollapse: true,
            title: "个人客户识别信息",
            formItem: [
                {
                    formList: []
                }
            ]
        },
        addressList: {
            isExtend: true,
            isCollapse: true,
            title: "个人客户地址信息",
            formItem: [
                {
                    "formList": []
                }
            ]
        },
        contMediumList: {
            isExtend: true,
            isCollapse: true,
            title: "个人客户联系信息",
            formItem: [
                {
                    formList: []
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
                    formList: []
                }
            ]
        }
    },
    // 数据层特征值模型
    cusDataFormList:{
        
    },
    // 管理个人特征值列表（加载更多）
    cusExtFormList : [], 
    saveCustomerInfo_data : { //
        "systemParams": {},
        "businessParams": {
            "customerId": "-1", //客户ID，如果还没有，填-1（因为在修改场景下，或中途存过数据就会有了
            "chaValue": [], // 客户特征信息（基本信息+更多信息）
            "idenList": [
                { // 客户联系信息
                    "chaValue": []
                }
            ],
            "contMediumList": [
                {
                    "chaValue": []
                }
            ],
            "addressList": [],
            "relPersonList": []
        }
    }
}