<template>
    <div class="wrapper">
        <div class="formOptions">
         <p class="btnIcon">
            <t-button type="outline" class="sub-btn"><i class="iconfont">&#xe639;</i>返回</t-button>
            <!-- <t-button type="outline" class="sub-btn" @click="handleSubmit('formDynamic')"><i class="iconfont">&#xe624;</i>保存</t-button> -->
          </p>  
        </div>
        <!-- 表单域 -->
        <t-form 
        :model="formData" 
        ref="formDynamic" 
        :rules.sync="listRule" 
        label-position="left" 
        :label-span="4">
            <div class="wrapper-form" v-for="(item, index) in formData" :key="index">
                <component 
                :id="item.id"
                :isAsync="item.isAsync"
                :isExtend="item.isExtend" 
                :isCollapse="item.isCollapse" 
                :title="item.name" 
                :getValidatePath="getValidatePath(item, index)" 
                :isDisabled="isDisabled" ref="form" 
                :is="currentView(item)" 
                :userList="currentList(item)"></component>
            </div>
        </t-form>
        <!-- 表格域 -->
        <div class="extend-attr">
            <div class="form-top">
                <div class="left" @click="showTable = !showTable">
                   <!--  <t-icon :type="showTable ? 'chevron-down' : 'chevron-up'"></t-icon> -->
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
            // 客户基本信息
            customInfo: {
                "name": "创建个人客户信息",
                "key": "customInfo",
                "formList": [
                    {
                        "name": "基本信息",
                        "key": "basicInfo",
                        "id": "1",
                        "isAsync":true, 
                        "isExtend": false,
                        "isCollapse": true,
                        "formItem": [
                            {
                                "CODE": "NAME",
                                "VALUE": "",
                                "DISP": "客户编码",
                                "OPER_MODE": "010",
                                "REQUIRE": true
                            },
                            {
                                "CODE": "NAME",
                                "VALUE": "",
                                "DISP": "客户名称",
                                "OPER_MODE": "010",
                                "REQUIRE": true
                            },
                            {
                                "CODE": "BIRTH_DATE",
                                "VALUE": "",
                                "DISP": "出生年月",
                                "OPER_MODE": "014",
                                "REQUIRE": true
                            },
                            {
                                "VALUE": "",
                                "DISP": "婚姻状况",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "Y",
                                        "value": "已婚"
                                    },
                                    {
                                        "key": "N",
                                        "value": "未婚"
                                    },
                                    {
                                        "key": "O",
                                        "value": "离异"
                                    }
                                ]
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
                                        "key": "F",
                                        "value": "女"
                                    },
                                    {
                                        "key": "U",
                                        "value": "其他"
                                    }
                                ]
                            },
                            {
                                "DISP": "学历",
                                "OPER_MODE": "02",
                                "VALUE": "",
                                "ENUM": [
                                    {
                                        "key": "primary",
                                        "value": "小学"
                                    },
                                    {
                                        "key": "middle",
                                        "value": "初中"
                                    },
                                    {
                                        "key": "high",
                                        "value": "高中"
                                    },
                                    {
                                        "key": "university",
                                        "value": "本科"
                                    },
                                    {
                                        "key": "Master",
                                        "value": "硕士"
                                    },
                                    {
                                        "key": "Doctor",
                                        "value": "博士"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "博士后"
                                    }
                                ]
                            },
                            {
                                "DISP": "行业类型",
                                "OPER_MODE": "02",
                                "VALUE": "",
                                "ENUM": [
                                    {
                                        "key": "primary",
                                        "value": "农林畜牧业"
                                    },
                                    {
                                        "key": "middle",
                                        "value": "采矿业"
                                    },
                                    {
                                        "key": "high",
                                        "value": "制造业"
                                    },
                                    {
                                        "key": "university",
                                        "value": "电力，燃气及水生产和供应业"
                                    },
                                    {
                                        "key": "Master",
                                        "value": "建筑业"
                                    },
                                    {
                                        "key": "Doctor",
                                        "value": "交通运输，仓储和邮储业"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "住宿和餐饮业"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "金融业"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "房地产业"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "租凭和商务服务业"
                                    }
                                ]
                            },
                            {
                                "DISP": "职业",
                                "OPER_MODE": "02",
                                "VALUE": "",
                                "ENUM": [
                                    {
                                        "key": "primary",
                                        "value": "教育/研究"
                                    },
                                    {
                                        "key": "middle",
                                        "value": "艺术/设计"
                                    },
                                    {
                                        "key": "high",
                                        "value": "法律相关专业"
                                    },
                                    {
                                        "key": "university",
                                        "value": "行政管理"
                                    },
                                    {
                                        "key": "Master",
                                        "value": "传播/媒体"
                                    },
                                    {
                                        "key": "Doctor",
                                        "value": "顾问/分析员"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "服务/后勤"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "工程师"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "政府机关/团体"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "人力资源及训练"
                                    }
                                ]
                            },
                            {
                                "CODE": "NAME",
                                "VALUE": "",
                                "DISP": "工作单位",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "NAME",
                                "VALUE": "",
                                "DISP": "联系电话",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "NAME",
                                "VALUE": "",
                                "DISP": "联系地址",
                                "OPER_MODE": "010"
                            }
                            // {
                            //     "CODE": "IS_CONTRACT_USER",
                            //     "VALUE": "T",
                            //     "DISP": 1,
                            //     "OPER_MODE": "016"
                            // },
                            // {
                            //     "CODE": "REMARKS",//唯一 id
                            //     "VALUE": "需要特殊照顾。\n非常重要！",// 值
                            //     "DISP": '客户编码',
                            //     "OPER_MODE": "013" //控件类型
                            // },

                            // {
                            //     "CODE": "联系地址",
                            //     "VALUE": "北京中关村南路125号",
                            //     "DISP": 2,
                            //     "OPER_MODE": "015"
                            // }
                        ]
                    },
                    {
                        "name": "证件信息",
                        "key": "credentInfo",
                        "id": "2",
                        "isExtend": true,
                        "isCollapse": true,
                        "formItem": [
                            {
                                "DISP": "证件类型",
                                "OPER_MODE": "02",
                                "VALUE": "",
                                "REQUIRE": true,
                                "ENUM": [
                                    {
                                        "key": "primary",
                                        "value": "身份证"
                                    },
                                    {
                                        "key": "middle",
                                        "value": "户口簿"
                                    },
                                    {
                                        "key": "high",
                                        "value": "驾驶证"
                                    },
                                    {
                                        "key": "university",
                                        "value": "出生证"
                                    },
                                    {
                                        "key": "Master",
                                        "value": "护照"
                                    },
                                    {
                                        "key": "Doctor",
                                        "value": "港澳通行证"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "港澳身份证"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "台胞证"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "雇员证（单位证明）"
                                    },
                                    {
                                        "key": "Post-Doctor",
                                        "value": "军官证"
                                    }
                                ]
                            },
                            {
                                "CODE": "NAME",
                                "VALUE": "",
                                "DISP": '证件号码',
                                "OPER_MODE": "010",
                                "REQUIRE": true
                            },
                            {
                                "CODE": "NAME",
                                "VALUE": "",
                                "DISP": '证件地址',
                                "OPER_MODE": "010",
                                "REQUIRE": true,
                            },
                            {
                                "CODE": "NAME",
                                "VALUE": "",
                                "DISP": '签发机关',
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "BIRTH_DATE",
                                "VALUE": "",
                                "DISP": "证件有效期",
                                "OPER_MODE": "014"
                            }
                        ]
                    }
                ]
            },
            attenInfo: {
                "isCollapse": true,
                "isExtend": true,
                "isAsync":true, 
                "name": "联系人信息",
                "key": "attenInfo",
                "id": "3",
                "formItem": [
                    {
                        "CODE": "NAME",
                        "VALUE": "",
                        "DISP": '联系人姓名',
                        "OPER_MODE": "010",
                        "REQUIRE": true,
                    },
                    {
                        "DISP": "证件类型",
                        "OPER_MODE": "02",
                        "VALUE": "",
                        "REQUIRE": true,
                        "ENUM": [
                            {
                                "key": "primary",
                                "value": "身份证"
                            },
                            {
                                "key": "middle",
                                "value": "户口簿"
                            },
                            {
                                "key": "high",
                                "value": "驾驶证"
                            },
                            {
                                "key": "university",
                                "value": "出生证"
                            },
                            {
                                "key": "Master",
                                "value": "护照"
                            },
                            {
                                "key": "Doctor",
                                "value": "港澳通行证"
                            },
                            {
                                "key": "Post-Doctor",
                                "value": "港澳身份证"
                            },
                            {
                                "key": "Post-Doctor",
                                "value": "台胞证"
                            },
                            {
                                "key": "Post-Doctor",
                                "value": "雇员证（单位证明）"
                            },
                            {
                                "key": "Post-Doctor",
                                "value": "军官证"
                            }
                        ]
                    },
                    {
                        "CODE": "NAME",
                        "VALUE": "",
                        "DISP": '联系人证件号码',
                        "OPER_MODE": "010",
                        "REQUIRE": true
                    },
                    {
                        "CODE": "BIRTH_DATE",
                        "VALUE": "",
                        "DISP": "联系人证件有效期",
                        "OPER_MODE": "014"
                    },
                    {
                        "CODE": "NAME",
                        "VALUE": "",
                        "DISP": '联系人电话',
                        "OPER_MODE": "010",
                        "REQUIRE": true
                    },
                    {
                        "CODE": "NAME",
                        "VALUE": "",
                        "DISP": '联系人地址',
                        "OPER_MODE": "010"
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
            let ret = this.currentView(item);
            if (ret === 'dynamicForm') {
                return `${index}.formList`
            } else {
                return `${index}.formItem`
            }
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
            customInfo: this.customInfo,
            attenInfo: this.attenInfo
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
    position: relative;
    margin-bottom: 100px;
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
    .form-group__label{
        color:#000;
        font-size:12px;
        opacity:0.8;
        filter:alpha(opacity=80);
        min-width:93px;
    }
}
.wrapper-form {
    padding: 10px 0;
}
.formOptions {
    position: absolute;
    right: 0;
    top: 7px;
    .btnIcon{
    i{
      margin-right:6px;
      font-size:14px;
      color:#666;
    }
    .sub-btn{
      color:#666;
      &:hover{
        color:#3DAC6E;
        i{
          color:#3DAC6E;
        }
      }
    }
  }
}
.extend-attr{
  .form-top{
    border-bottom:1px solid #dfe5e7;
    height:45px;
    line-height:45px;
    .left{
        i{
            &.aid{
                font-size:18px;
                color:#898989;
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
            color:#333;
        }
        i {
            font-size: 22px;
            line-height: 46px;
        }
        .info-icon{
          i{
            font-size:6px;
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
