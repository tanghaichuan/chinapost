<template>
    <div class="customer">
        <!--表单区域-->
        <wrapper icon="&#xe78b;" title="创建个人客户信息" :row="4" :formData="formData"></wrapper>
    </div>
</template>
<script>
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
                            {
                                "CODE": "INDIVIDUAL_NAME",
                                "VALUE": "",
                                "DISP": "名称",
                                "OPER_MODE": "010",
                                "REQUIRE": true,
                                "REG": '/^1\d{7}$/'
                            },
                            {
                                "CODE": "SIMPLE_SPELL",
                                "VALUE": "",
                                "DISP": '名称简拼',
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "FORMER_NAME",
                                "VALUE": "",
                                "DISP": '曾用名',
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "GENDER",
                                "VALUE": "",
                                "DISP": "性别",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "M",
                                        "value": "男"
                                    },
                                    {
                                        "key": "W",
                                        "value": "女"
                                    }
                                ]
                            },
                            {
                                "CODE": "BIRTH_DATE",
                                "VALUE": "",
                                "DISP": "出生日期",
                                "OPER_MODE": "014"
                            },
                            {
                                "CODE": "MARITAL_STATUS",
                                "VALUE": "",
                                "DISP": "婚姻状况",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "single",
                                        "value": "未婚"
                                    },
                                    {
                                        "key": "married",
                                        "value": "已婚"
                                    },
                                    {
                                        "key": "divorced",
                                        "value": "离异"
                                    }
                                ]
                            },
                            {
                                "CODE": "NATIONALITY",
                                "VALUE": "",
                                "DISP": "国籍",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "China",
                                        "value": "中国"
                                    }
                                ]
                            },
                            {
                                "CODE": "NATIONAL_TYPE",
                                "VALUE": "",
                                "DISP": "民族",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "Han",
                                        "value": "汉族"
                                    }
                                ]
                            },
                            {
                                "CODE": "EDUCATION",
                                "VALUE": "",
                                "DISP": "学历",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "primary",
                                        "value": "小学"
                                    }
                                ]
                            },
                            {
                                "CODE": "GRADUATE_SCHOOL",
                                "VALUE": "",
                                "DISP": "毕业院校",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "SPECIALITY",
                                "VALUE": "",
                                "DISP": "专业",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "JOB_COMPANY",
                                "VALUE": "",
                                "DISP": "工作单位",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "JOB_POSTION",
                                "VALUE": "",
                                "DISP": "工作职位",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "PROFESSION",
                                "VALUE": "",
                                "DISP": "职业",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "edu",
                                        "value": "教育/研究"
                                    }
                                ]
                            },
                            {
                                "CODE": "INCOME_RANGE",
                                "VALUE": "",
                                "DISP": "收入范围",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "REMARKS",
                                "VALUE": "",
                                "DISP": "备注",
                                "OPER_MODE": "010"
                            }
                            // {
                            //     "DISP": "证件类型",
                            //     "OPER_MODE": "02",
                            //     "VALUE": "",
                            //     "REQUIRE": true,
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
                            // {
                            //     "CODE": "NAME",
                            //     "VALUE": "",
                            //     "DISP": '联系人证件号码',
                            //     "OPER_MODE": "010",
                            //     "REQUIRE": true
                            // }
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
                            {
                                "CODE": "IDEN_TYPE_ID",
                                "VALUE": "",
                                "DISP": '识别类型',
                                "OPER_MODE": "02",
                                "ENUM": [

                                ]
                            },
                            {
                                "CODE": "IDEN_NR",
                                "VALUE": "",
                                "DISP": '识别号码',
                                "OPER_MODE": "010",
                            },
                            {
                                "CODE": "IDEN_ADDRESS",
                                "VALUE": "",
                                "DISP": '识别信息地址',
                                "OPER_MODE": "010",
                            },
                            {
                                "CODE": "IDEN_COUNTRY",
                                "VALUE": "",
                                "DISP": '识别信息签发国家',
                                "OPER_MODE": "02",
                                "ENUM": [

                                ]
                            },
                            {
                                "CODE": "IDEN_EFF_DATE",
                                "VALUE": "",
                                "DISP": '识别信息签发时间',
                                "OPER_MODE": "014"
                            },
                            {
                                "CODE": "IDEN_EXP_DATE",
                                "VALUE": "",
                                "DISP": '识别信息失效时间',
                                "OPER_MODE": "014"
                            }
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
                            {
                                "CODE": "Privacy_Preferences",
                                "VALUE": "",
                                "DISP": "隐私偏好",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "USE",
                                "VALUE": "",
                                "DISP": "用途",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "BestContact_Way",
                                "VALUE": "",
                                "DISP": "最佳联系方式",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "BestContact_Date",
                                "VALUE": "",
                                "DISP": "最佳联系时间",
                                "OPER_MODE": "014"
                            },
                            {
                                "CODE": "Contact_FirstSelectDate",
                                "VALUE": "",
                                "DISP": "可联系首选日期",
                                "OPER_MODE": "014"
                            },
                            {
                                "CODE": "Cycle_Max_ContaxtNum",
                                "VALUE": "",
                                "DISP": "周期内最多联系次数",
                                "OPER_MODE": "010"
                            }
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
                            {
                                "CODE": "COUNTRY",
                                "VALUE": "",
                                "DISP": "国家",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "China",
                                        "value": "中国"
                                    }
                                ]
                            },
                            {
                                "CODE": "PROVINCE",
                                "VALUE": "",
                                "DISP": "省",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "China",
                                        "value": "中国"
                                    }
                                ]
                            },
                            {
                                "CODE": "CITY",
                                "VALUE": "",
                                "DISP": "市县",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "China",
                                        "value": "中国"
                                    }
                                ]
                            },
                            {
                                "CODE": "DISTRICT",
                                "VALUE": "",
                                "DISP": "区镇",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "China",
                                        "value": "中国"
                                    }
                                ]
                            },
                            {
                                "CODE": "STREET",
                                "VALUE": "",
                                "DISP": "街道",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "REGION",
                                "VALUE": "",
                                "DISP": "园区",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "DOOR_NUMBER",
                                "VALUE": "",
                                "DISP": "门牌室号",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "ADDR_DETAIL_NAME",
                                "VALUE": "",
                                "DISP": "地址实例详细名称",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "POSTAL_CODE",
                                "VALUE": "",
                                "DISP": "邮政编码",
                                "OPER_MODE": "010"
                            }
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

    },
    methods: {
        
    },
    created() {
        // 逐块获取数据时可以用$set
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
