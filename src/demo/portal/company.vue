<template>
    <div class="company">

        <wrapper @addItem="loadMore" icon="&#xe64c;" title="创建机构客户信息" :row="4" :formData="formData"></wrapper>

        <!--右侧表单区域-->
    </div>
</template>
<script>
import wrapper from './wrapper/wrapper'
import bus from './bus'
import dropTree from './components/droptree'
export default {
    name: "company",
    data() {
        return {
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
            },
            idenInfo: {
                "isExtend": true,
                "isCollapse": true,
                "title": "机构客户识别信息",
                "formItem": [
                    {
                        "formList": [
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
                    }
                ]
            },
            address: {
                "isExtend": true,
                "isCollapse": true,
                "title": "机构客户地址信息",
                "formItem": [
                    {
                        "formList": [
                            {
                                "CODE": "ADD_TYPE_ID",
                                "VALUE": "",
                                "DISP": "类型",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "ADD1",
                                        "value": "注册地址"
                                    },
                                    {
                                        "key": "ADD2",
                                        "value": "办公地址"
                                    }
                                ]
                            },
                            {
                                "CODE": "PROVINCE",
                                "VALUE": "",
                                "DISP": "地址信息",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "POSTAL_CODE",
                                "VALUE": "",
                                "DISP": "邮政编码",
                                "OPER_MODE": "010"
                            }
                        ]
                    }
                ]
            },
            contactInfo: {
                "isExtend": true,
                "isCollapse": true,
                "title": "机构客户联系信息",
                "formItem": [
                    {
                        "formList": [
                            {
                                "CODE": "CONTACT_TYPE_ID",
                                "VALUE": "",
                                "DISP": "类型",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "CONTACT1",
                                        "value": "移动电话"
                                    },
                                    {
                                        "key": "CONTACT2",
                                        "value": "固定电话"
                                    },
                                    {
                                        "key": "CONTACT2",
                                        "value": "邮件"
                                    }
                                ]
                            },
                            {
                                "CODE": "CONTACT2_INFO",
                                "VALUE": "",
                                "DISP": "联系信息",
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
                    }
                ]
            },
            partyInfo: {
                "isExtend": true,
                "isCollapse": true,
                "title": "机构客户其他关系人信息",
                "formItem": [
                    {
                        "formList": [
                            {
                                "CODE": "PARTY_TYPE_ID",
                                "VALUE": "",
                                "DISP": "关系类型",
                                "OPER_MODE": "02",
                                "ENUM": [
                                    {
                                        "key": "PARTY1",
                                        "value": "联系人"
                                    },
                                    {
                                        "key": "PARTY2",
                                        "value": "客户经理"
                                    }
                                ]
                            },
                            {
                                "CODE": "CONTACT2_INFO",
                                "VALUE": "",
                                "DISP": "姓名",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "BestContact_Date",
                                "VALUE": "",
                                "DISP": "联系电话",
                                "OPER_MODE": "010"
                            },
                            {
                                "CODE": "Contact_FirstSelectDate",
                                "VALUE": "",
                                "DISP": "邮箱",
                                "OPER_MODE": "010"
                            }
                        ]
                    }
                ]
            },
            formData: {}
        }
    },
    components: {
        wrapper,
        dropTree
    },
    methods: {
        loadMore(id) {
            console.log(id);
        }
    },
    created() {
        // 逐块获取数据时可以用$set
        this.formData = Object.assign({}, this.formData, {
            baseInfo: this.baseInfo,
            idenInfo: this.idenInfo,
            address: this.address,
            contactInfo: this.contactInfo,
            partyInfo: this.partyInfo
        })
    }
}
</script>
<style scoped lang="less">
.company {
    position: relative;
}

h5 {
    position: absolute;
    top: 20px;
    margin-bottom: 0;
    display: inline-block;
    font-size: 16px;
    color: #333;
    .tit-icon {
        margin: 0 5px 0 8px;
    }
}

.middle {
    zoom: 1;
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
    .con-left {
        position: relative;
        top: 49px;
        float: left;
        height: auto;
        border: 1px solid #dfe5e7;
        .droptree {
            padding-top: 54px;
            margin-left: -17px;
        }
        h5 {
            position: absolute;
            left: 0;
            border-bottom: 1px solid #dfe5e7;
            height: 45px;
            line-height: 45px;
            width: 100%;
            display: block;
            margin-top: -20px;
            padding-left: 27px;
        }
    }
    .con-right {
        float: left;
    }
}
</style>
