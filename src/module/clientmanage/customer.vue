<template>
    <div class="customer">
        <!--表单区域-->
        <wrapper icon="&#xe78b;" title="创建个人客户信息" :row="4" :formData="formData"></wrapper>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import wrapper from './wrapper/wrapper'
import bus from './bus'
export default {
    name: "customer",
    data() {
        return {
            addFormItem: [
                {
                    "DISP": "HAVECHILDFLAG",
                    "DISP": "是否有子女",
                    "OPER_MODE": "02",
                    "VALUE": "",
                    "ENUM": [
                        {
                            "key": "Y",
                            "value": "有"
                        },
                        {
                            "key": "N",
                            "value": "无"
                        }
                    ]
                },
                {
                    "CODE": "INDUSTRY",
                    "VALUE": "",
                    "DISP": "行业",
                    "OPER_MODE": "02",
                    "ENUM": [
                        {
                            "value": "Agriculture",
                            "label": "农业",
                            "children": [
                                {
                                    "value": "guwu",
                                    "label": "谷物种植",
                                    "children": [
                                        {
                                            "value": "daogu",
                                            "label": "稻谷种植"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "value": "Forestry",
                            "label": "林业"
                        },
                        {
                            "value": "Fisheries",
                            "label": "渔业"
                        }
                    ]
                },
                {
                    "CODE": "PERSONALITY",
                    "VALUE": "",
                    "DISP": "个性特征",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "INTEREST",
                    "VALUE": "",
                    "DISP": "兴趣和避讳",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "HONOR_AWARD",
                    "VALUE": "",
                    "DISP": "荣誉奖励",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "START_JOB_DATE",
                    "VALUE": "",
                    "DISP": "参加工作时间",
                    "OPER_MODE": "014"
                },
                {
                    "CODE": "SHORT_NAME",
                    "VALUE": "",
                    "DISP": "简称",
                    "OPER_MODE": "010"
                },
                // {
                //     "DISP": "证件类型",
                //     "OPER_MODE": "02",
                //     "VALUE": "",
                //     "ENUM": [
                //         {
                //             "key": "primary",
                //             "value": "身份证"
                //         },
                //         {
                //             "key": "middle",
                //             "value": "户口簿"
                //         },
                //         {
                //             "key": "high",
                //             "value": "驾驶证"
                //         },
                //         {
                //             "key": "university",
                //             "value": "出生证"
                //         },
                //         {
                //             "key": "Master",
                //             "value": "护照"
                //         },
                //         {
                //             "key": "Doctor",
                //             "value": "港澳通行证"
                //         },
                //         {
                //             "key": "Post-Doctor",
                //             "value": "港澳身份证"
                //         },
                //         {
                //             "key": "Post-Doctor",
                //             "value": "台胞证"
                //         },
                //         {
                //             "key": "Post-Doctor",
                //             "value": "雇员证（单位证明）"
                //         },
                //         {
                //             "key": "Post-Doctor",
                //             "value": "军官证"
                //         }
                //     ]
                // },
                {
                    "CODE": "NAME",
                    "VALUE": "",
                    "DISP": "重要日期名称",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "NAME",
                    "VALUE": "",
                    "DISP": "重要日期",
                    "OPER_MODE": "014"
                }
            ],
            businessParams: {
                "isCollapse": true,
                "isAsync": true,
                "title": "个人客户基本信息",
                "formItem": [
                    {
                        "formList": [
                        ]
                    }
                ]
            },
            idenList: {
                "isExtend": true,
                "isCollapse": true,
                "title": "个人客户识别信息",
                "formItem": [
                    {
                        "formList": [
                        ]
                    }
                ]
            },
            contMediumList: {
                "isExtend": true,
                "isCollapse": true,
                "title": "个人客户联系信息",
                "formItem": [
                    {
                        "formList": [

                        ]
                    }

                ]
            },
            addressList: {
                "isExtend": true,
                "isCollapse": true,
                "title": "个人客户地址信息",
                "formItem": [
                    {
                        "formList": [

                        ]
                    }
                ]
            },
            relPersonList: {
                "isExtend": true,
                "isCollapse": true,
                "isAsync": true,
                "title": "个人客户其他关系人信息",
                "formItem": [
                    {
                        "formList": [
                        ]
                    }
                ]
            },
            formData: {},
            data: [
                {   // 基本信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "IND_CUST_BASE_CHA",
                        "queryPurpose": "forUpdate"  //查询用于更新(forUpdate)或只是用于展示详情(forBrowse),目前只有这两种选择。
                    }
                },
                {   // 识别信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "CUST_IDEN_BASE_CHA",
                        "queryPurpose": "forUpdate"  //查询用于更新(forUpdate)或只是用于展示详情(forBrowse),目前只有这两种选择。
                    }
                },
                {   // 地址信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "CUST_ADDR_BASE_CHA",
                        "queryPurpose": "forUpdate"  
                    }
                },
                {   // 联系媒介信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "CUST_CONT_MEDIUM_CHA",
                        "queryPurpose": "forUpdate"  
                    }
                },
                {   // 客户关系人信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "CUST_REL_PERSON_CHA",
                        "queryPurpose": "forUpdate"  
                    }
                }
            ]
        }
    },
    components: {
        wrapper
    },
    computed: {
        ...mapState({
            cusFormList: state => state.clientManage.cusFormList,
        })
    },
    methods: {
        ...mapActions({
            loadFormItem: 'clientManage/loadFormItem'
        })
    },
    async created() {
        try {
            await this.loadFormItem(this.data)
            this.businessParams.formItem[0].formList.push(...this.cusFormList[0].chaValue)
            this.idenList.formItem[0].formList.push(...this.cusFormList[1].chaValue)
            this.contMediumList.formItem[0].formList.push(...this.cusFormList[2].chaValue)
            this.addressList.formItem[0].formList.push(...this.cusFormList[3].chaValue)
            this.relPersonList.formItem[0].formList.push(...this.cusFormList[4].chaValue)
        } catch (error) {
            console.error(error);
        }
        this.formData = Object.assign({}, this.formData, {
            businessParams: this.businessParams,
            idenList: this.idenList,
            addressList: this.addressList,
            contMediumList: this.contMediumList,
            relPersonList:this.relPersonList
        })
    }

}
</script>
<style scoped lang="less">

</style>
