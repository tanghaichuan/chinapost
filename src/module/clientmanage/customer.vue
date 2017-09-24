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
            baseInfo: {
                "isCollapse": true,
                "isAsync": true,
                "title": "基本信息",
                "formItem": [
                    {
                        "formList": [
                        ]
                    }
                ]
            },
            idenInfo: {
                "isExtend": true,
                "isCollapse": true,
                "title": "认证识别信息",
                "formItem": [
                    {
                        "formList": [
                        ]
                    }
                ]
            },
            contactInfo: {
                "isExtend": true,
                "isCollapse": true,
                "title": "联系媒介信息",
                "formItem": [
                    {
                        "formList": [
                            
                        ]
                    }

                ]
            },
            address: {
                "isExtend": true,
                "isCollapse": true,
                "title": "地址信息",
                "formItem": [
                    {
                        "formList": [
                            
                        ]
                    }
                ]
            },
            formData: {}
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
        let arr = []
        let data = {
            "systemParams": {

            },
            "businessParams": {
                "customerId": "-1",  //客户ID
                "specCode": "CUST_ADDR_BASE_CHA",
                "queryPurpose": "forUpdate"  //查询用于更新(forUpdate)或只是用于展示详情(forBrowse),目前只有这两种选择。
            }
        }
        // 这里的每个specCode暂时不做区分
        for (let i = 0; i < 4; i++) {
            arr.push(data)
        }

        try {
            await this.loadFormItem(arr)
            this.baseInfo.formItem[0].formList.push(...this.cusFormList[0].chaValue)
            this.idenInfo.formItem[0].formList.push(...this.cusFormList[1].chaValue)
            this.contactInfo.formItem[0].formList.push(...this.cusFormList[2].chaValue)
            this.address.formItem[0].formList.push(...this.cusFormList[2].chaValue)
        } catch (error) {
            console.error(error);
        }
        this.formData = Object.assign({}, this.formData, {
            baseInfo: this.baseInfo,
            idenInfo: this.idenInfo,
            contactInfo: this.contactInfo,
            address: this.address
        })
    }

}
</script>
<style scoped lang="less">

</style>
