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
            customFormItem: {
                baseInfo: [
                    {
                        "CODE": "MAJOR_LOGISTICS_REQCONT",
                        "VALUE": "文字内容",
                        "DISP": "客户类型"
                    },
                    {
                        "CODE": "INDUSTYR_TYPE_PARENT",
                        "VALUE": "文字内容",
                        "DISP": "客户等级"
                    },
                    {
                        "CODE": "PAYMENT_TERM",
                        "VALUE": "文字内容",
                        "DISP": "客户状态"
                    },
                    {
                        "CODE": "APPROVAL_FLAG",
                        "VALUE": "文字内容",
                        "DISP": "客户群"
                    },
                    {
                        "CODE": "POSTAGE_CONFIDENCE",
                        "VALUE": "文字内容",
                        "DISP": "扩展信息"
                    },
                    {
                        "CODE": "ACCOUNTING_FLAG",
                        "VALUE": "文字内容",
                        "DISP": "扩展信息"
                    },
                    {
                        "CODE": "ARREARS_LIMIT",
                        "VALUE": "文字内容",
                        "DISP": "扩展信息"
                    },
                    {
                        "CODE": "ARREARS_TIME_LIMIT",
                        "VALUE": "文字内容",
                        "DISP": "扩展信息"
                    },
                    {
                        "CODE": "IF_DEVELOPECUST",
                        "VALUE": "文字内容",
                        "DISP": "扩展信息"
                    }
                ],
                idenInfo: [

                ]
            },
            companyFromItem: [
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "客户类型"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "客户等级"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "客户状态"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "客户群"
                },
                {
                    "CODE": "EBUSINESS_WEBSITE",
                    "VALUE": "文字内容",
                    "DISP": "扩展信息"
                },
                {
                    "CODE": "COMPANY_TYPE",
                    "VALUE": "文字内容",
                    "DISP": "扩展信息"
                },
                {
                    "CODE": "Economic_Nature",
                    "VALUE": "文字内容",
                    "DISP": "扩展信息"
                },
                {
                    "CODE": "IS_MARKET",
                    "VALUE": "文字内容",
                    "DISP": "扩展信息"
                },
                {
                    "CODE": "Operation_Mode",
                    "VALUE": "文字内容",
                    "DISP": "扩展信息"
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
            this.$set(obj, "addFormItem", this.customFormItem.baseInfo)
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
    zoom: 1;
    &:before {
        margin-right: 25px;
        margin-top: -19px;
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
