<template>
    <div class="company">
        
        <wrapper @addItem="loadMore" icon="&#xe64c;" title="机构客户信息详情" :row="4" :formData="formData" :showTree="true"></wrapper>

        <!--右侧表单区域-->
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
                "isAsync": true,
                "title": "机构客户基本信息",
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
                                "VALUE": "组织识别号",
                                "DISP": '识别类型'
                            },
                            {
                                "CODE": "IDEN_NR",
                                "VALUE": "1111111",
                                "DISP": '识别号码'
                            },
                            {
                                "CODE": "IDEN_ADDRESS",
                                "VALUE": "北京",
                                "DISP": '识别信息地址'
                            },
                            {
                                "CODE": "IDEN_COUNTRY",
                                "VALUE": "中国",
                                "DISP": '识别信息签发国家'
                            },
                            {
                                "CODE": "IDEN_EFF_DATE",
                                "VALUE": "2017-01-01",
                                "DISP": '识别信息签发时间'
                            },
                            {
                                "CODE": "IDEN_EXP_DATE",
                                "VALUE": "2099-01-01",
                                "DISP": '识别信息失效时间'
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
                                "VALUE": "注册地址",
                                "DISP": "类型"
                            },
                            {
                                "CODE": "PROVINCE",
                                "VALUE": "北京市西城区阜成门金融大街1号",
                                "DISP": "地址信息"
                            },
                            {
                                "CODE": "POSTAL_CODE",
                                "VALUE": "100001",
                                "DISP": "邮政编码"
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
                                "VALUE": "移动电话",
                                "DISP": "类型"
                            },
                            {
                                "CODE": "CONTACT2_INFO",
                                "VALUE": "13855557888",
                                "DISP": "联系信息"
                            },
                            {
                                "CODE": "BestContact_Date",
                                "VALUE": "9:00-17:50",
                                "DISP": "最佳联系时间"
                            },
                            {
                                "CODE": "Contact_FirstSelectDate",
                                "VALUE": "2017-12-12",
                                "DISP": "可联系首选日期"
                            },
                            {
                                "CODE": "Cycle_Max_ContaxtNum",
                                "VALUE": "3",
                                "DISP": "周期内最多联系次数"
                            }
                        ]
                    }
                ]
            },
            partyInfo: {
                "isExtend": true,
                "isCollapse": true,
                "isAsync": true,
                "title": "机构客户其他关系人信息",
                "formItem": [
                    {
                        "formList": [
                            {
                                "CODE": "PARTY_TYPE_ID",
                                "VALUE": "联系人",
                                "DISP": "关系类型"
                            },
                            {
                                "CODE": "CONTACT2_INFO",
                                "VALUE": "王二",
                                "DISP": "姓名"
                            },
                            {
                                "CODE": "BestContact_Date",
                                "VALUE": "1231234567",
                                "DISP": "联系电话"
                            },
                            {
                                "CODE": "Contact_FirstSelectDate",
                                "VALUE": "3131@sina.con",
                                "DISP": "邮箱"
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
    border-top: 1px solid #dee5e7;
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
