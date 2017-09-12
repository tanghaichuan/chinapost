<template>
    <div class="wrapper">
        <h5>
            <i class="iconfont tit-icon">&#xe78b;</i>创建个人客户信息</h5>
        <div class="back-options">
            <p class="btn-icon">
                <t-button type="outline" class="sub-btn">
                    <i class="iconfont">&#xe639;</i>返回</t-button>
                <!-- <t-button type="outline" class="sub-btn" @click="handleSubmit('formDynamic')"><i class="iconfont">&#xe624;</i>保存</t-button> -->
            </p>
        </div>
        <!-- 表单域 -->
        <t-form :model="formData" ref="formDynamic" :rules.sync="listRule" label-position="left" :label-span="5">
            <div class="wrapper-form" v-for="(item, index) in formData" :key="index">
                <item-form :getValidatePath="getValidatePath(item, index)" :isDisabled="isDisabled" ref="form" :userList="item"></item-form>
            </div>
        </t-form>
        <!-- 表格域 -->
        <!-- <div class="extend-attr">
                    <div class="form-top">
                        <div class="left" @click="showTable = !showTable">
                            <span class="info-icon">
                                <i class="iconfont" v-if="showTable">&#xe78e;</i>
                                <i class="iconfont" v-else>&#xe78d;</i>
                            </span>
                            <h6>客户扩展属性</h6>
                        </div>
                        <div class="right"></div>
                    </div>
                    <div v-show="showTable" class="wrapper-table" ref="table">
                        <div class="table-top">
                            <t-button @click.native="addTableList" type="outline" class="left sub-btn">新增</t-button>
                            <t-input v-model="searchInfo" icon="magnify" class="right" icon-placement="right" placeholder="请输入搜索内容" style="width: 150px;"></t-input>
                        </div>
                        <edit-table :editColumn.sync="editColumn" :editData.sync="showTableList"></edit-table>
                    </div>
                </div> -->
        <div class="form-options">
            <t-button type="primary" class="save" @click.native="handleSubmit('formDynamic')">
                <i class="iconfont">&#xe624;</i>保存</t-button>
            <t-button type="outline" class="sub-btn approval">
                <i class="iconfont">&#xe65f;</i>审批</t-button>
        </div>
    </div>
</template>
<script>
import dynamicForm from './dynamicForm'
import itemForm from './itemForm'
import editTable from './editTable'
export default {
    name: 'wrapper',
    data() {
        return {
            isDisabled: false,  // 表单只读
            showForm: true,
            showTable: true,
            userList: [],
            searchInfo: "",
            listRule: {
                NAME: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ]
            },
            addTableItem: [
                {
                    "type": "证件信息",
                    "name": "身份证",
                    "value": "22222",
                    "isEdit": false
                }
            ],
            editData: [
                {
                    "type": "家庭信息",
                    "name": "子女数量",
                    "value": "2",
                    "isEdit": false
                },
                {
                    "type": "家庭信息",
                    "name": "是否有车",
                    "value": "有",
                    "isEdit": false
                }
            ],
            editColumn: [
                {
                    title: '属性类型',
                    key: 'type',
                    render: (h, params) => {
                        let vm = this
                        return h('div', [
                            h('div', {
                                'class': {
                                    'hidden': params.row.isEdit
                                }
                            }, [
                                    h('span', params.row.type)
                                ]),
                            h('div', {
                                'class': {
                                    'hidden': !params.row.isEdit
                                }
                            }, [
                                    h('t-input', {
                                        props: {
                                            placeholder: '请输入编辑内容',
                                            value: params.row.type
                                        },
                                        style: {
                                            width: '100%',
                                            display: 'inline-block',
                                            'margin-right': '15px'
                                        },
                                        on: {
                                            input: function(value) {
                                                params.row.type = value
                                            }
                                        }
                                    })
                                ])
                        ])
                    }
                },
                {
                    title: '属性名称',
                    key: 'name',
                    render: (h, params) => {
                        let vm = this
                        return h('div', [
                            h('div', {
                                'class': {
                                    'hidden': params.row.isEdit
                                }
                            }, [
                                    h('span', params.row.name)
                                ]),
                            h('div', {
                                'class': {
                                    'hidden': !params.row.isEdit
                                }
                            }, [
                                    h('t-input', {
                                        props: {
                                            placeholder: '请输入编辑内容',
                                            value: params.row.name
                                        },
                                        style: {
                                            width: '100%',
                                            display: 'inline-block',
                                            'margin-right': '15px'
                                        },
                                        on: {
                                            input: function(value) {
                                                params.row.name = value
                                            }
                                        }
                                    })
                                ])
                        ])
                    }
                },
                {
                    title: '操作',
                    key: 'operation',
                    render: (h, params) => {
                        let vm = this
                        return h('div', [
                            h('div', {
                                'class': {
                                    'hidden': params.row.isEdit
                                },
                                style: {
                                    'height': '60px'
                                }
                            }, [
                                    h('span', {
                                        style: {
                                            color: '#35aeed',
                                            'line-height': '60px'
                                        },
                                        on: {
                                            click: () => {
                                                let inx = params.index
                                                vm.showTableList[inx].isEdit = true
                                            }
                                        }
                                    }, '编辑')
                                ]),
                            h('div', {
                                'class': {
                                    'hidden': !params.row.isEdit
                                },
                                style: {
                                    'height': '60px'
                                }
                            }, [
                                    h('span', {
                                        style: {
                                            marginRight: '20px',
                                            color: '#35aeed',
                                            'line-height': '60px'
                                        },
                                        on: {
                                            click: () => {
                                                let inx = params.index
                                                console.log(params.row)
                                                vm.$set(vm.showTableList, inx, params.row)
                                                vm.showTableList[inx].isEdit = false
                                            }
                                        }
                                    }, '保存'),
                                    h('t-poptip', {
                                        props: {
                                            confirm,
                                            title: '您确取消这条编辑吗？'
                                        },
                                        on: {
                                            'on-ok': function() {
                                                let inx = params.index
                                                vm.showTableList[inx].isEdit = false
                                            }
                                        }
                                    }, [
                                            h('span', {
                                                style: {
                                                    color: '#35aeed',
                                                    'line-height': '60px'
                                                }
                                            }, '取消')
                                        ])
                                ])
                        ])
                    }
                }
            ],
            baseInfo: {
                "isCollapse": true,
                "isAsync": true,
                "title": "基本信息",
                "formItem": [
                    {
                        "CODE": "INDIVIDUAL_NAME",
                        "VALUE": "",
                        "DISP": "名称",
                        "OPER_MODE": "010",
                        "REQUIRE": true
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
            },
            idenInfo: {
                "isCollapse": true,
                "title": "认证识别信息",
                "formItem": [
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
            },
            contactInfo: {
                "isCollapse": true,
                "title": "联系媒介信息",
                "formItem": [
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
            },
            address: {
                "isCollapse": true,
                "title": "地址信息",
                "formItem": [
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
            },
            customInfo: {
                "isCollapse": false,
                "title": "客户扩展信息",
                "formItem": [
                    {
                        "CODE": "MAJOR_LOGISTICS_REQCONT",
                        "VALUE": "",
                        "DISP": "主要物流需求内容",
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
                        "OPER_MODE": "02"
                    },
                    {
                        "CODE": "IF_AGREEMENTCUST",
                        "VALUE": "",
                        "DISP": "是否合同用户",
                        "OPER_MODE": "02"
                    },
                    {
                        "CODE": "IF_COMPOSITECUST",
                        "VALUE": "",
                        "DISP": "是否综合用户",
                        "OPER_MODE": "02"
                    },
                    {
                        "CODE": "VIP_CARD_NUMBER",
                        "VALUE": "",
                        "DISP": "贵宾卡号",
                        "OPER_MODE": "010"
                    },
                    {
                        "CODE": "PAYER_NUMBER",
                        "VALUE": "",
                        "DISP": "付款人客户编码",
                        "OPER_MODE": "010"
                    },
                    {
                        "CODE": "CUSTOMER_NUMBER",
                        "VALUE": "",
                        "DISP": "大客户号",
                        "OPER_MODE": "010"
                    },
                    {
                        "CODE": "TOUCHWAY",
                        "VALUE": "",
                        "DISP": "客户触达方式",
                        "OPER_MODE": "010"
                    },
                    {
                        "CODE": "COMPANY_CODE",
                        "VALUE": "",
                        "DISP": "客户办理业务机构编号",
                        "OPER_MODE": "010"
                    },
                    {
                        "CODE": "SOURCE_MANNER",
                        "VALUE": "",
                        "DISP": "客户来源方式",
                        "OPER_MODE": "02"
                    },
                    {
                        "CODE": "RESOURCE_SYSTEM",
                        "VALUE": "",
                        "DISP": "来源系统",
                        "OPER_MODE": "02"
                    }
                ]
            },
            formData: {

            },
            list: [

            ]
        }
    },
    components: {
        dynamicForm,
        itemForm,
        editTable
    },
    computed: {
        showTableList() {
            return this.editData.filter(item => {
                let reg = new RegExp(this.searchInfo);
                return item.type.match(reg);
            })
        }
    },
    methods: {
        currentView(item) {
            if (item.hasOwnProperty('formItem')) {
                return 'itemForm'
            } else {
                return 'dynamicForm'
            }
        },
        currentList(item) {
            if (this.currentView(item) === 'dynamicForm') {
                return item.formList
            } else {
                return item.formItem
            }
        },
        getValidatePath(item, index) {
            return `${index}`
            // let ret = this.currentView(item);
            // if (ret === 'dynamicForm') {
            //     return `${index}.formList`
            // } else {
            //     return `${index}.formItem`
            // }
        },
        addTableList() {
            this.editData.push(...this.addTableItem);
        },
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success('保存成功!');
                } else {
                    this.$Message.danger('表单验证失败!');
                }
            })
        }
    },
    created() {
        // this.list.push(this.customInfo, this.attenInfo)
        this.formData = Object.assign({}, this.formData, {
            baseInfo: this.baseInfo,
            idenInfo: this.idenInfo,
            contactInfo: this.contactInfo,
            address: this.address,
            customInfo: this.customInfo
        })
    }
}
</script>
<style scoped lang="less">
.clearfix {
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
}

.collapse {
    display: none;
}

.wrapper {
    padding-top: 18px;
    position: relative;
    margin-bottom: 100px;
    h5 {
        margin-bottom: 0;
        display: inline-block;
        font-size: 16px;
        color: #333;
        .tit-icon {
            margin: 0 5px 0 8px;
        }
    }
    .input-wrapper {
        .input {
            padding-right: 32px!important;
        }
    }
    .input-group-icon {
        &.input-group-icon--right {
            right: -2px;
            cursor: pointer;
        }
    }
    .form-group__label {
        color: #000;
        font-size: 12px;
        opacity: 0.8;
        filter: alpha(opacity=80);
        max-width: 125px;
        padding-left: 0;
    }
    .col {
        padding-right: 25px;
    }
}

.wrapper-form {
    padding: 11px 0;
}

.back-options {
    position: absolute;
    right: 0;
    top: 11px;
    .btn-icon {
        margin: 0;
        i {
            margin-right: 6px;
            font-size: 14px;
            color: #666;
        }
        .sub-btn {
            color: #666;
            &:hover {
                color: #3DAC6E;
                i {
                    color: #3DAC6E;
                }
            }
        }
    }
}

.form-options {
    margin-top: 7px;
    .btn>span {
        font-size: 14px;
    }
    .save {
        margin-right: 15px;
        width: 88px;
        height: 36px;
    }
    .approval {
        width: 88px;
        height: 36px;
        border-color: #42ab6f;
    }
    .iconfont {
        margin-right: 8px;
    }
}

.extend-attr {
    .form-top {
        border-bottom: 1px solid #dfe5e7;
        height: 45px;
        line-height: 45px;
        .left {
            i {
                &.aid {
                    font-size: 18px;
                    color: #898989;
                }
            }
        }
    }
}

.wrapper-table {
    padding: 25px;
    width: 100%;
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
    background: #fff;
    border: 1px solid #dfe5e7;
    border-top:0;
}

.table-top {
    padding-bottom: 10px;
    width: 100%;
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
    .left {
        float: left;
    }
    .right {
        float: right;
        .aid-plus-circle-outline {
            cursor: pointer;
        }
    }
}

.form-top {
    position: relative;
    display: flex;
    align-items: center;
    zoom: 1;
    margin-top: 20px;
    border: 1px solid #dfe5e7;
    border-bottom: 0;
    &.botom {
        border-bottom: 1px solid #dfe5e7;
    }
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
    .left {
        padding-left: 14px;
        display: inline-block;
        cursor: pointer;
        h6 {
            margin: 0;
            display: inline-block;
            line-height: 46px;
            color: #333;
        }
        i {
            font-size: 22px;
            line-height: 46px;
        }
        .info-icon {
            i {
                font-size: 6px;
            }
        }
    }
    .right {
        display: inline-block;
        position: absolute;
        right: 15px;
        top: 8px;
        i {
            font-size: 22px;
        }
    }
}
</style>
