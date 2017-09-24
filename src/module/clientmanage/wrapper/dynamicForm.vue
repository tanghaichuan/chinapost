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
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import itemWrap from './itemWrap'
export default {
    name: 'dynamicForm',
    data() {
        return {
            cusData: {
                "systemParams": {

                },
                "businessParams": {
                    "customerId": "-1",  //客户ID
                    "specCode": "IDN_CUST_BASE_CHA",
                    "queryPurpose": "forUpdate"  //查询用于更新(forUpdate)或只是用于展示详情(forBrowse)，目前只有这两种选择。
                }
            },
            comData: {
               "systemParams": {

                },
                "businessParams": {
                    "customerId": "-1",  //客户ID
                    "specCode": "COMPANY_CUST_BASE_CHA",
                    "queryPurpose": "forUpdate"  //查询用于更新(forUpdate)或只是用于展示详情(forBrowse)，目前只有这两种选择。
                } 
            },
            openSelect: false,
            flod: false,
            customFormItem: [

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
        itemWrap
    },
    computed: {
        ...mapState({
            extFormList: state => state.clientManage.extFormList,
        })
    },
    methods: {
        ...mapActions({
            loadExtFormItem: 'clientManage/loadExtFormItem'
        }),
        getMore(id, obj) {
            if (this.flod) {
                this.flod = false
            } else {
                if (this.$route.name === '个人客户管理') {
                    this.getCustomerForm(obj)
                } else {
                    this.getCompany(obj)
                }
            }
        },
        async getCustomerForm(obj) {
            try {
                await this.loadExtFormItem(this.cusData)
                this.flod = true
            } catch (error) {
                console.error(error);
            }
            this.customFormItem = this.extFormList.chaValue
            this.$set(obj, "addFormItem", this.customFormItem)
            //console.log(obj)
        },
        async getCompany(obj) {
            //console.log(obj);
            this.flod = true
            this.$set(obj, "addFormItem", this.companyFromItem)
        }
    },
    async created() {

    }
}
</script>
<style scoped lang="less">
.form-item-wrap {
    padding-left: 25px;
    padding-top: 20px;
    zoom: 1;
    &:before {
        margin-right: 25px;
        margin-top: -19px;
        padding-bottom: 19px;
        display: block;
        content: '';
        border-top: 1px dashed #dfe5e7;
    }
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
}

.load-more {
    text-align: right;
    a {
        &:hover {
            span,
            i {
                color: #3DAC6E;
            }
        }
        &:active {
            span,
            i {
                color: #007f3b;
            }
        }
    }
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
