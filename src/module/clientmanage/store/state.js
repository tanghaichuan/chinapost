export default {
    // 客管模块个人客户
    cusFormList : [], // 管理个人所有特征定义列表
    cusExtFormList : [], // 管理个人特征值列表（加载更多）
    saveCustomerInfo : { // 管理个人特征定义数据
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
    },
    // 客观模块机构客户
    comFormList : [],
    comExtFormList : [],
    saveCompanyInfo : []

}