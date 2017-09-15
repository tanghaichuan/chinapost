<template>
    <div class="company">

        <!--右侧表单区域-->
        <wrapper icon="&#xe64c;" title="创建机构客户信息" :row="4" :formData="formData"></wrapper>
    </div>
</template>
<script>
import wrapper from './wrapper/wrapper'
export default {
    name: "company",
    data() {
        return {
            baseInfo: {
                "isCollapse": true,
                "isExtend": true,
                "isAsync": true,
                "title": "政企客户基本信息",
                "formItem": [
                    {
                        "formList": [
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
                "title": "政企客户识别信息",
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
                "title": "政企客户地址信息",
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
                "title": "政企客户联系信息",
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
                "title": "政企客户其他关系人信息",
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
        wrapper
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

</style>
