<template>
    <div class="item-form">
        <div class="form-top">
            <div class="left" @click="showForm = !showForm">
                <span v-if="userList.isCollapse" class="info-icon">
                    <i class="iconfont" v-if="showForm">&#xe78e;</i>
                    <i class="iconfont" v-else>&#xe78d;</i>
                </span>
                <h6>{{userList.title}}</h6>
            </div>
        </div>
        <div class="form-item-container" v-show="showForm">
            <div class="form-item-wrap">
                <div class="form-block--info col-4" v-for="(item, index) in userList.formItem" :key="index">
                    <t-form-item :label="item.DISP+':'" :prop="getValidatePath+'.'+'formItem.'+ index + '.VALUE'" :rules="{required: item.REQUIRE, message: item.DISP+'不能为空', trigger: 'blur'}">
                        <t-select :disabled="isDisabled" v-model="item.VALUE" :title="item.VALUE" v-if="item.OPER_MODE === '02'">
                            <t-option v-for="item in item.ENUM" :value="item.value" :key="item">{{ item.value }}</t-option>
                        </t-select>

                        <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '010'"></t-input>

                        <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '013'" type="textarea"></t-input>

                        <t-date-picker v-model="item.VALUE" v-if="item.OPER_MODE === '014'"></t-date-picker>
                    </t-form-item>
                </div>
            </div>
            <div class="form-item-wrap" v-if="flod">
                <div class="form-block--info col-4" v-for="(item, index) in userList.addFormItem" :key="index">
                    <t-form-item 
                    :label="item.DISP+':'" 
                    :prop="getValidatePath+'.'+'addFormItem.'+ index + '.VALUE'" 
                    :rules="{required: item.REQUIRE, message: item.DISP+'不能为空', trigger: 'blur'}">
                        <t-select :disabled="isDisabled" v-model="item.VALUE" :title="item.VALUE" v-if="item.OPER_MODE === '02'">
                            <t-option v-for="item in item.ENUM" :value="item.value" :key="item">{{ item.value }}</t-option>
                        </t-select>

                        <div v-if="item.OPER_MODE === '017'" class="cas">
                            <!--级联-->
                            <t-cascader :data="item.ENUM" v-model="item.VALUE"></t-cascader>
                        </div>

                        <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '010'"></t-input>

                        <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '013'" type="textarea"></t-input>

                        <t-date-picker v-model="item.VALUE" v-if="item.OPER_MODE === '014'"></t-date-picker>
                    </t-form-item>
                </div>
            </div>
            <a href="javascript:;" v-if="userList.isAsync" class="more" @click="getMore">
                <span v-text="flod ? '收起' : '更多'"></span>
                <t-icon :type="flod ? 'chevron-up' : 'chevron-down'" style="margin-left: -5px;margin-top: 2px;" size="18"></t-icon>
            </a>
        </div>

    </div>
</template>
<script>
// 说明：
// 1.  特征值数据类型目前定义如下：
// 01--文本
// 02--数字
// 03--日期

// 2. 操作方式目前定义如下：
// 010--手工录入单行：
// 012--手工录入密码：当用户输入密码时，以特殊字符替代密码字符进行展示；
// 013--手工录入多行：需要多行录入的文本
// 014--手工录入日期：录入日期
// 015--手工录入纯数字：
// 016--手工录入逻辑值：录入只有真假两种选择的值（即check box）
// 017--级联 
// 02--枚举值选择：录入枚举值

// 3. CODE希望能作为界面控件的id或name，以便作为选择器定位控件的凭据。因为前台针对这些控件还是有些代码要写的
// 4. ENUM_NAME的用处是，将来可能重复的枚举值就重新送了，以节约网络流量。
// const INPUT = '010',
//     PASSWORD = '012',
//     TEXTAREA = '013',
//     SELECT = '02',
//     TIME = '014',
//     CHECKBOX = '016';
export default {
    name: 'itemForm',
    data() {
        return {
            flod: false,
            showForm: true,
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
                    "OPER_MODE": "017",
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
                    "DISP": '联系人证件号码',
                    "OPER_MODE": "010"
                }
            ]
        }
    },
    props: {
        userList: {
            type: Object,
            default: {}
        },
        isAsync: {              // 表单异步加载
            type: Boolean,
            default: false
        },
        isDisabled: {           // 表单只读
            type: Boolean,
            default: false
        },
        isExtend: {             // 表单可添加重复信息
            type: Boolean,
            default: false
        },
        isCollapse: {           // 表单折叠
            type: Boolean,
            default: false
        },
        title: String,
        getValidatePath: String
    },
    components: {

    },
    methods: {
        getMore() {
            if (this.flod) {
                this.flod = false;
            } else {
                this.$set(this.userList, "addFormItem", this.addFormItem)
                console.log(this.userList);
                this.flod = true;
            }
        },
        addFormList() {

        },
        delFormList() {
            let len = this.addFormItem.length;
            while (len) {
                this.userList.pop();
                len--;
            }
        },
    },
    created() {

        // this.list.push(this.userList.formItem)
        // console.log(this.userList);
    }
}
</script>
<style scoped lang="less">
.info-icon {
    i {
        font-size: 8px;
    }
}

.form-item-container {
    position: relative;
    padding: 19px 10px 9px;
    zoom: 1;
    border-top: 1px solid #dfe5e7;
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
}

.more {
    margin-right: 14px;
    padding-bottom: 14px;
    display: inline-block;
    line-height: 15px;
    text-align: right;
    display: block;
    span {
        padding-right: 5px;
        font-size: 12px;
        font-family: "Microsoft YaHei";
        color: rgb( 0, 146, 65);
    }
}

.form-item-wrap {
    zoom: 1;
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
}

.item-form {
    margin-top: -1px;

    background: #fff;
    border: 1px solid #dfe5e7;
    .form-top {
        padding-left: 13px;
        line-height: 45px;
        background: #f6f8f8;
        .left {
            display: inline-block;
            cursor: pointer;
            h6 {
                display: inline-block;
                border: 0;
                padding: 0;
                font-size: 16px;
                color: #333;
            }
            i {
                &.aid {
                    margin-right: 3px;
                    font-size: 18px;
                    color: #898989;
                }
            }
        }
        .right {
            padding-right: 15px;
            display: inline-block;
            float: right;
        }
    }
}

.clearfix {
    float: left;
    width: 100%;
}

.form-block--info {
    float: left;
}

.item-form {
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
}

.silde-enter-active,
.slide-leave-active {
    transition: all .3s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}
</style>
