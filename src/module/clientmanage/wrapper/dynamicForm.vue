<template>
    <div class="dynamic-load">
        <item-wrap v-if="flod" :row="row" :path="getValidatePath+'formItem.'+id+'.addFormItem.'" :userList="userList" :formList="userList.formItem[id].addFormItem"></item-wrap>
        <div class="load-more">
            <a href="javascript:;" v-if="userList.isAsync" class="more" @click="getMore(userList.title,userList.formItem[id])">
                <span v-text="flod ? '收起' : '更多'"></span>
                <t-icon :type="flod ? 'chevron-up' : 'chevron-down'" style="margin-left: -5px;margin-top: 2px;" size="18"></t-icon>
            </a>
        </div>
    </div>
</template>
<script>
import selectContainer from './selectContainer'
import itemWrap from './itemWrap'
export default {
    name: 'dynamicForm',
    data() {
        return {
            openSelect: false,
            flod: false,
            customFormItem: [
                {
                    "CODE": "MAJOR_LOGISTICS_REQCONT",
                    "VALUE": "",
                    "DISP": "主要物流需求",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "INDUSTYR_TYPE_PARENT",
                    "VALUE": "",
                    "DISP": "行业类型",
                    "OPER_MODE": "017"
                },
                {
                    "CODE": "PAYMENT_TERM",
                    "VALUE": "",
                    "DISP": "账期",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "APPROVAL_FLAG",
                    "VALUE": "",
                    "DISP": "审批标志",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "POSTAGE_CONFIDENCE",
                    "VALUE": "",
                    "DISP": "客户对邮资信度",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "ACCOUNTING_FLAG",
                    "VALUE": "",
                    "DISP": "允许记账标志",
                    "OPER_MODE": "02"
                },
                {
                    "CODE": "ARREARS_LIMIT",
                    "VALUE": "",
                    "DISP": "欠费金额限制",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "ARREARS_TIME_LIMIT",
                    "VALUE": "",
                    "DISP": "欠费时间限制",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "IF_DEVELOPECUST",
                    "VALUE": "",
                    "DISP": "是否开发用户",
                    "OPER_MODE": "02",
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
                    "CODE": "IF_AGREEMENTCUST",
                    "VALUE": "",
                    "DISP": "是否合同用户",
                    "OPER_MODE": "02",
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
                    "CODE": "IF_COMPOSITECUST",
                    "VALUE": "",
                    "DISP": "是否综合用户",
                    "OPER_MODE": "02",
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
                    "CODE": "VIP_CARD_NUMBER",
                    "VALUE": "",
                    "DISP": "贵宾卡号",
                    "OPER_MODE": "010",
                },
                {
                    "CODE": "PAYER_NUMBER",
                    "VALUE": "",
                    "DISP": "付款人客户编码",
                    "OPER_MODE": "010",
                },
                {
                    "CODE": "CUSTOMER_NUMBER",
                    "VALUE": "",
                    "DISP": "大客户号",
                    "OPER_MODE": "010",
                },
                {
                    "CODE": "TOUCHWAY",
                    "VALUE": "",
                    "DISP": "客户触达方式",
                    "OPER_MODE": "010",
                },
                {
                    "CODE": "COMPANY_CODE",
                    "VALUE": "",
                    "DISP": "客户办理业务机构编号",
                    "OPER_MODE": "010",
                },
                {
                    "CODE": "SOURCE_MANNER",
                    "VALUE": "",
                    "DISP": "客户来源方式",
                    "OPER_MODE": "02",
                },
                {
                    "CODE": "RESOURCE_SYSTEM",
                    "VALUE": "",
                    "DISP": "来源系统",
                    "OPER_MODE": "02",
                },
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
            companyFromItem: [
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "",
                    "DISP": "跨境电商平台",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "",
                    "DISP": "电商平台店铺网址",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "",
                    "DISP": "快递电商平台",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "",
                    "DISP": "快递电商平台店铺网址",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "",
                    "DISP": "电子商务网址",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "COMPANY_TYPE",
                    "VALUE": "",
                    "DISP": "组织机构类型",
                    "OPER_MODE": "02",
                    "ENUM": [
                        {
                            "key": "t1",
                            "value": "手工录入"
                        },
                        {
                            "key": "t2",
                            "value": "枚举值选择"
                        },
                        {
                            "key": "t3",
                            "value": "树形菜单选择"
                        },
                        {
                            "key": "t4",
                            "value": "上传文件"
                        },
                        {
                            "key": "t5",
                            "value": "内部动态表选择"
                        },
                        {
                            "key": "t6",
                            "value": "外部动态表选择"
                        }
                    ]
                },
                {
                    "CODE": "Economic_Nature",
                    "VALUE": "",
                    "DISP": "经济性质",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "IS_MARKET",
                    "VALUE": "",
                    "DISP": "上市标志",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Operation_Mode",
                    "VALUE": "",
                    "DISP": "经营方式",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "PRODUCT_FLOW",
                    "VALUE": "",
                    "DISP": "产品流向",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "SERVICE_OBJECT",
                    "VALUE": "",
                    "DISP": "服务对象",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "PROFIT_LOSS",
                    "VALUE": "",
                    "DISP": "盈亏状况",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "CAPITAL_STATUS",
                    "VALUE": "",
                    "DISP": "资金状况",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Development_Potential",
                    "VALUE": "",
                    "DISP": "发展潜力",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Bank_Credit_Degree",
                    "VALUE": "",
                    "DISP": "客户银行资信度",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Company_Degree",
                    "VALUE": "",
                    "DISP": "用户等级）",
                    "OPER_MODE": "02",
                    "ENUM": [
                        {
                            "key": "t1",
                            "value": "国家级"
                        },
                        {
                            "key": "t2",
                            "value": "省级"
                        },
                        {
                            "key": "t3",
                            "value": "地市级"
                        }
                    ]
                },
                {
                    "CODE": "Relationship_With_Rivals",
                    "VALUE": "",
                    "DISP": "与竞争对手关系",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Belong_Region",
                    "VALUE": "",
                    "DISP": "所属区域",
                    "OPER_MODE": "02",
                    "ENUM": [
                        {
                            "key": "t1",
                            "value": "城区"
                        },
                        {
                            "key": "t2",
                            "value": "郊区"
                        },
                        {
                            "key": "t3",
                            "value": "郊县"
                        }
                    ]
                },
                {
                    "CODE": "SIMPLE_SPELL",
                    "VALUE": "",
                    "DISP": "输入简码输入简码",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Unified_Organization_Code",
                    "VALUE": "",
                    "DISP": "专业系统机构代码",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Unified_Organization_Code1",
                    "VALUE": "",
                    "DISP": "基本帐户开户行",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Organization_form",
                    "VALUE": "",
                    "DISP": "组织形式",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Enterprise_GBType",
                    "VALUE": "",
                    "DISP": "国标企业类型",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Inline_business_type",
                    "VALUE": "",
                    "DISP": "行内企业类型",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Enterprise_scale",
                    "VALUE": "",
                    "DISP": "企业规模",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Offshore_signs",
                    "VALUE": "",
                    "DISP": "离岸标志",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "average_age",
                    "VALUE": "",
                    "DISP": "平均年龄",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "ImportExport_Rrights",
                    "VALUE": "",
                    "DISP": "进出口权标志",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "Registration_Type",
                    "VALUE": "",
                    "DISP": "注册类型",
                    "OPER_MODE": "010"
                },
                {
                    "CODE": "BusinessOutletsAttr",
                    "VALUE": "",
                    "DISP": "网点属性",
                    "OPER_MODE": "010"
                }
            ]
        }
    },
    props: {
        row: Number,
        id: {
            type: Number,
            default: 0
        },
        isAsync: {
            type: Boolean,
            default: false
        },
        userList: {
            type: Object,
            default: {}
        },
        getValidatePath: String
    },
    components: {
        selectContainer,
        itemWrap
    },
    computed: {

    },
    methods: {
        getMore(id, obj) {
            if (this.flod) {
                this.flod = false
            } else {
                if (this.$route.name === '个人客户管理') {
                    this.getCustomerForm(obj)
                } else {
                    this.getCompany(obj)
                }
                this.flod = true
            }
        },
        getCustomerForm(obj) {
            console.log(obj);
            this.$set(obj, "addFormItem", this.customFormItem)
        },
        getCompany(obj) {
            console.log(obj);
            this.$set(obj, "addFormItem", this.companyFromItem)
        }
    },
    created() {

    }
}
</script>
<style scoped lang="less">
.form-item-wrap {
    padding-left: 25px;
    padding-top: 20px;
    border-top: 1px dashed #dfe5e7;
    zoom: 1;
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
}

.load-more {
    text-align: right;
}

.form-block--block {
    float: left;
}

.more {
    margin-right: 24px;
    padding-bottom: 14px;
    display: inline-block;
    line-height: 15px;
    text-align: right;
    span {
        padding-right: 5px;
        font-size: 12px;
        font-family: "Microsoft YaHei";
        color: rgb( 0, 146, 65);
    }
}
</style>
