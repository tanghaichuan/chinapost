<template>
    <div class="dynamic-load">
        <div class="form-item-wrap" v-if="flod">
            <div class="form-block--block" :class="['col-'+row]" v-for="(item, y) in userList.formItem[id].addFormItem" :key="y">
                <t-form-item :label="item.DISP+':'" :prop="getValidatePath+'formItem.'+id+'.addFormItem.'+y+'.'+VALUE" :rules="{required: item.REQUIRE, message: item.DISP+'不能为空', trigger: 'blur'}" :label-span="userList.title === '基本信息' ? 4 : 5">
                    <t-select :disabled="isDisabled" v-model="item.VALUE" :title="item.VALUE" v-if="item.OPER_MODE === '02'">
                        <t-option v-for="(item1, z) in item.ENUM" :value="item1.value" :key="z">{{ item1.value }}</t-option>
                    </t-select>
                    <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '010'"></t-input>
                    <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '013'" type="textarea"></t-input>
                    <t-date-picker v-model="item.VALUE" v-if="item.OPER_MODE === '014'"></t-date-picker>
                </t-form-item>
            </div>
        </div>
        <div class="load-more">
            <a href="javascript:;" v-if="userList.isAsync" class="more" @click="getMore(userList.title,userList.formItem[id])">
                <span v-text="flod ? '收起' : '更多'"></span>
                <t-icon :type="flod ? 'chevron-up' : 'chevron-down'" style="margin-left: -5px;margin-top: 2px;" size="18"></t-icon>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dynamicForm',
    data() {
        return {
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
                    "OPER_MODE": "02"
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

    },
    computed: {

    },
    methods: {
        getMore(id, obj) {
            if (this.flod) {
                this.flod = false
            } else {
                if (!obj.addFormItem) {
                    if (this.$route.name === 'customer') {
                        this.getCustomerForm(obj)
                    } else {
                        this.getCompany(obj)
                    }
                }
                this.flod = true
            }
        },
        getCustomerForm(obj) {
            this.$set(obj, "addFormItem", this.customFormItem)
        },
        getCompany(obj) {
            this.$set(obj, "addFormItem", this.addFormItem)
        }
    },
    created() {

    }
}
</script>
<style scoped lang="less">
.form-item-wrap {
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
