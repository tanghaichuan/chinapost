<template>
    <div class="create-rel-person">
        <div v-show="flod" class="rel-person-container">
            <div class="rel-person-content" style="margin-top: 50px;">
                <div class="rel-container">
                    <div class="person-content-top">
                        <h3 v-if="$route.name.indexOf('个人客户')>-1">创建更多个人客户其他关系人信息</h3>
                        <i class="iconfont" @click="flod=false">&#xe60a;</i>
                    </div>
                    <t-form :model="formData" ref="createRelForm" label-position="left" :label-span="5">
                        <div class="wrapper-form" v-for="(item, index) in formData" :key="index">
                            <item-form :row="row" :getValidatePath="getValidatePath(item, index)" :userList="item"></item-form>
                        </div>
                    </t-form>
                </div>
                <div class="rel-person-bottom">
                    <t-button type="outline" @click="flod=false" style="margin-right:10px;" class="sub-btn approval">取消</t-button>
                    <t-button type="primary" @click="submit('createRelForm')">确定</t-button>
                </div>
            </div>
        </div>
        <div class="load-more">
            <a href="javascript:;" class="more" @click="loadMore">
                <span>更多</span>
                <i class="iconfont" style="font-size: 12px;">&#xe621;</i>
            </a>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import itemForm from './itemForm'
export default {
    name: "createRelPer",
    data() {
        return {
            row: 4,
            flod: false,
            userList: [],
            formData: {
                baseInfo: {
                    "isCollapse": true,
                    "isAsync": true,
                    "title": "机构客户基本信息",
                    "formItem": [
                        {
                            "formList": [
                                {
                                    "CODE": "COMPANY_NAME",
                                    "VALUE": "",
                                    "DISP": "选择机构",
                                    "OPER_MODE": "018"
                                },
                                {
                                    "CODE": "COMPANY_NAME",
                                    "VALUE": "",
                                    "DISP": "客户名称",
                                    "OPER_MODE": "010",
                                    "REQUIRE": true
                                },
                                {
                                    "CODE": "ENGLISH_NAME",
                                    "VALUE": "",
                                    "DISP": '英文名称',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "ENGLISH_SHORT_NAME",
                                    "VALUE": "",
                                    "DISP": '英文简称',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "ENTERPRISE_SIZE_CODE",
                                    "VALUE": "",
                                    "DISP": '企业规模',
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "ENT_EMPLOYEE_COUNT",
                                    "VALUE": "",
                                    "DISP": "员工总数",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "REGISTERED_CAPITAL",
                                    "VALUE": "",
                                    "DISP": "注册资金",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "WEBSITE",
                                    "VALUE": "",
                                    "DISP": "WEB",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "REG_DATE",
                                    "VALUE": "",
                                    "DISP": "注册日期",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "BUSINESS_SCOPE",
                                    "VALUE": "",
                                    "DISP": "经营范围",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "ANNUAL_OUTPUT_VALUE",
                                    "VALUE": "",
                                    "DISP": "年营业额",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "COMPANY_NATURE",
                                    "VALUE": "",
                                    "DISP": "企业性质",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "COMPANY_CODE",
                                    "VALUE": "",
                                    "DISP": "服务机构编码",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "INNER_ORG_TYPE",
                                    "VALUE": "",
                                    "DISP": "内部组织机构版块",
                                    "OPER_MODE": "010"
                                },
                                {
                                    "CODE": "REMARKS",
                                    "VALUE": "",
                                    "DISP": "备注",
                                    "OPER_MODE": "010"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    },
    mixins: [],
    props: {

    },
    computed: {
        ...mapState({
            cusFormList: state => state.clientManage.cusFormList,
        })
    },
    components: {
        itemForm
    },
    methods: {
        getValidatePath(item, index) {
            return `${index}.`
        },
        ...mapActions({
            loadFormItem: 'clientManage/loadFormItem'
        }),
        loadMore() {
            // 加载创建联系人特征值 ？ 获取整个formList
            this.flod = true
        },
        submit(name) {
            // console.log(this.$refs.createRelForm)
            this.$refs[name].validate(valid => {
                console.log(valid);
                if (valid) {
                    //this.$Message.success('保存成功!')
                    console.log(this.formData);
                    // 拿到联系人信息list
                    //this.$emit
                    this.flod = false
                } else {
                    this.$Message.danger('保存失败!')
                }
            })
        }
    }
}
</script>
<style scoped lang="less">
.rel-person-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .rel-person-content {
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        height: 592px;
        width: 80%;
        background: #fff;
        margin: 0 auto;
        zoom: 1;
        form {
            padding: 0 10px 10px;
        }
        .rel-container {
            padding-bottom: 60px;
            position: relative;
            height: 592px;
            overflow: auto;
        }
        &:after {
            content: '';
            overflow: hidden;
            display: table;
            clear: both;
        }
        .person-content-top {
            padding: 0 10px 10px;
            margin-bottom: 20px;
            position: relative;
            height: 50px;
            border-bottom: 1px solid #f1f1f1;
            h3 {
                display: inline-block;
                line-height: 50px;
                font-size: 14px;
                font-family: "Microsoft YaHei";
                color: rgb( 89, 89, 89);
            }
            i {
                position: absolute;
                right: 0;
                line-height: 50px;
                vertical-align: middle;
                font-size: 24px;
                cursor: pointer;
            }
        }
        .rel-person-bottom {
            padding-right: 20px;
            width: 100%;
            height: 55px;
            line-height: 55px;
            position: absolute;
            bottom: 0;
            border-top: 1px solid #f1f1f1;
            background: #fff;
            text-align: right;
        }
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
