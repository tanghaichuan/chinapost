<template>
    <div class="dynamic-load">
        <item-wrap v-if="flod" :row="row" :userList="userList" :formList="userList.formItem[id].addFormItem"></item-wrap>
        <div class="load-more">
            <a href="javascript:;" v-if="userList.isAsync" class="more" @click="getMore(userList.title,userList.formItem[id])">
                <span v-text="flod ? '收起' : '更多'"></span>
                <t-icon :type="flod ? 'chevron-up' : 'chevron-down'" style="margin-left: -5px;margin-top: 2px;" size="18"></t-icon>
            </a>
        </div>
    </div>
</template>
<script>
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
                    "VALUE": "文字内容",
                    "DISP": "主要物流需求"
                },
                {
                    "CODE": "INDUSTYR_TYPE_PARENT",
                    "VALUE": "文字内容",
                    "DISP": "行业类型"
                },
                {
                    "CODE": "PAYMENT_TERM",
                    "VALUE": "文字内容",
                    "DISP": "账期"
                },
                {
                    "CODE": "APPROVAL_FLAG",
                    "VALUE": "文字内容",
                    "DISP": "审批标志"
                },
                {
                    "CODE": "POSTAGE_CONFIDENCE",
                    "VALUE": "文字内容",
                    "DISP": "客户对邮资信度"
                },
                {
                    "CODE": "ACCOUNTING_FLAG",
                    "VALUE": "文字内容",
                    "DISP": "允许记账标志"
                },
                {
                    "CODE": "ARREARS_LIMIT",
                    "VALUE": "文字内容",
                    "DISP": "欠费金额限制"
                },
                {
                    "CODE": "ARREARS_TIME_LIMIT",
                    "VALUE": "文字内容",
                    "DISP": "欠费时间限制"
                },
                {
                    "CODE": "IF_DEVELOPECUST",
                    "VALUE": "文字内容",
                    "DISP": "是否开发用户"
                }
            ],
            companyFromItem: [
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "跨境电商平台"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "电商平台店铺网址"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "快递电商平台"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "快递电商平台店铺网址"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "电子商务网址"
                },
                {
                    "CODE": "COMPANY_TYPE",
                    "VALUE": "文字内容",
                    "DISP": "组织机构类型"
                },
                {
                    "CODE": "Economic_Nature",
                    "VALUE": "文字内容",
                    "DISP": "经济性质"
                },
                {
                    "CODE": "IS_MARKET",
                    "VALUE": "文字内容",
                    "DISP": "上市标志"
                },
                {
                    "CODE": "Operation_Mode",
                    "VALUE": "文字内容",
                    "DISP": "经营方式"
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
        }
    },
    components: {
        itemWrap
    },
    computed: {

    },
    methods: {
        getMore(id, obj) {
            if (this.flod) {
                this.flod = false
            } else {
                if (this.$route.name === '个人客户信息详情') {
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
