<template>
    <div class="wrapper">
        <t-form :rules="listRule" label-position="left" :label-span="3">
            <div class="wrapper-form" v-for="(item, index) in list" :key="index">
                <h6>{{item.key}}</h6>
                <component :is="currentView(item)" :userList="currentList(item)"></component>
            </div>
        </t-form>
    </div>
</template>
<script>
import dynamicForm from './dynamicForm'
import itemForm from './itemForm'
export default {
    name: 'wrapper',
    data() {
        return {
            userList: [],
            listRule: {
                NAME: [
                    { required: true, message: '不能为空', trigger: 'blur' }
                ]
            },
            list: [
                {
                    "key": "客户基本信息",
                    "formList": [
                        {
                            "key": "基本信息",
                            "formItem": [
                                {
                                    "CODE": "NAME",
                                    "VALUE": "1",
                                    "DISP": '客户编码',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "NAME",
                                    "VALUE": "爱因斯坦",
                                    "DISP": '客户名称',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "BIRTH_DATE",
                                    "VALUE": "1975-09-20",
                                    "DISP": "出生年月",
                                    "OPER_MODE": "014"
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
                                    "CODE": "SEX",
                                    "VALUE": "男",
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
                                    "VALUE": "爱因斯坦",
                                    "DISP": '工作单位',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "NAME",
                                    "VALUE": "110",
                                    "DISP": '联系电话',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "NAME",
                                    "VALUE": "110",
                                    "DISP": '联系地址',
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
                            "key": "基本信息",
                            "formItem": [
                                {
                                    "DISP": "证件类型",
                                    "OPER_MODE": "02",
                                    "VALUE": "",
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
                                    "VALUE": "110",
                                    "DISP": '证件号码',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "NAME",
                                    "VALUE": "110",
                                    "DISP": '证件地址',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "NAME",
                                    "VALUE": "110",
                                    "DISP": '签发机关',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "BIRTH_DATE",
                                    "VALUE": "1975-09-20",
                                    "DISP": "证件有效期",
                                    "OPER_MODE": "014"
                                }
                            ]
                        }
                    ]
                },
                {
                    "key": "联系人信息",
                    "formItem": [
                        {
                            "CODE": "NAME",
                            "VALUE": "1",
                            "DISP": '客户编码',
                            "OPER_MODE": "010"
                        }
                    ]
                }
            ]
        }
    },
    components: {
        dynamicForm,
        itemForm
    },
    computed: {

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
        }
    },
    created() {

    }
}
</script>
<style scoped lang="less">
.wrapper {
    position: absolute;
    top: 70px;
    height: 100%;
    h6 {
        font-size: 16px;
        font-family: "Microsoft YaHei";
        color: rgb( 51, 51, 51);
        line-height: 2.25;
    }
}
</style>
