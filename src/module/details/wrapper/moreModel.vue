<template>
    <div class="create-rel-person">
        <div v-show="flod" class="rel-person-container">
            <div class="rel-person-content" style="margin-top: 50px;">
                <div class="rel-container">
                    <div class="person-content-top">
                        <h3>更多其他关系人信息</h3>
                        <i class="iconfont" @click="flod=false">&#xe60a;</i>
                    </div>
                    <t-form :model="formData" ref="createRelForm" label-position="left" :label-span="5">
                        <div class="wrapper-form" v-for="(item, index) in userList" :key="index">
                            <item-model :row="row" :userList="item"></item-model>
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
import itemModel from './itemModel'
export default {
    name: "createRelPer",
    data() {
        return {
            row: 4,
            flod: false,
            userList: [],
            formData: {
                cusInfo: {
                    "isCollapse": true,
                    "isAsync": true,
                    "title": "个人客户其他关系人基本信息",
                    "formItem": [
                        {
                            "formList": [
                                {
                                    "CODE": "INDIVIDUAL_NAME",
                                    "VALUE": "张三",
                                    "DISP": "客户名称"
                                },
                                {
                                    "CODE": "SIMPLE_SPELL",
                                    "VALUE": "ZS",
                                    "DISP": '名称简拼'
                                },
                                {
                                    "CODE": "PROFESSION",
                                    "VALUE": "建筑师",
                                    "DISP": '职业'
                                },
                                {
                                    "CODE": "BIRTH_DATE",
                                    "VALUE": "1999-01-01",
                                    "DISP": "出生日期"
                                },
                                {
                                    "CODE": "GENDER",
                                    "VALUE": "男",
                                    "DISP": "性别"
                                },
                                {
                                    "CODE": "MARITAL_STATUS",
                                    "VALUE": "未婚",
                                    "DISP": "婚姻状况"
                                },
                                {
                                    "CODE": "NATIONALITY",
                                    "VALUE": "中国",
                                    "DISP": "国籍"
                                },
                                {
                                    "CODE": "NATIONAL_TYPE",
                                    "VALUE": "汉族",
                                    "DISP": "民族"
                                },
                                {
                                    "CODE": "EDUCATION",
                                    "VALUE": "高中",
                                    "DISP": "学历"
                                }
                            ]
                        }
                    ]
                },
                comInfo: {
                    "isCollapse": true,
                    "isAsync": true,
                    "title": "机构客户其他关系人基本信息",
                    "formItem": [
                        {
                            "formList": [
                                {
                                    "CODE": "COMPANY_NAME",
                                    "VALUE": "亚信",
                                    "DISP": "客户名称"
                                },
                                {
                                    "CODE": "ENGLISH_NAME",
                                    "VALUE": "ASIAINFOR",
                                    "DISP": '英文名称'
                                },
                                {
                                    "CODE": "ENGLISH_SHORT_NAME",
                                    "VALUE": "AI",
                                    "DISP": '英文简称'
                                },
                                {
                                    "CODE": "ENTERPRISE_SIZE_CODE",
                                    "VALUE": "大型",
                                    "DISP": '企业规模'
                                },
                                {
                                    "CODE": "ENT_EMPLOYEE_COUNT",
                                    "VALUE": "10000",
                                    "DISP": "员工总数"
                                },
                                {
                                    "CODE": "REGISTERED_CAPITAL",
                                    "VALUE": "100000000",
                                    "DISP": "注册资金"
                                },
                                {
                                    "CODE": "REG_DATE",
                                    "VALUE": "2000-01-01",
                                    "DISP": "注册日期"
                                },
                                {
                                    "CODE": "BUSINESS_SCOPE",
                                    "VALUE": "IT",
                                    "DISP": "经营范围"
                                },
                                {
                                    "CODE": "COMPANY_NATURE",
                                    "VALUE": "股份制",
                                    "DISP": "企业性质"
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
    components: {
        itemModel
    },
    methods: {
        loadMore(obj) {
            if (this.$route.name === '个人客户信息详情') {
                this.userList = []
                this.userList.push(this.formData.cusInfo)
            } else {
                this.userList = []
                this.userList.push(this.formData.comInfo)
            }
            this.flod = true
        },
        submit() {
            this.flod = false
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
        height: 500px;
        width: 70%;
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
