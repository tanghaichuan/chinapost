<template>
    <div class="company">
        <wrapper @addItem="loadMore" icon="&#xe78b;" title="个人客户详细信息" :row="4" :formData="formData" :showTree="false"></wrapper>

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
                "title": "个人客户基本信息",
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
            idenInfo: {
                "isExtend": true,
                "isCollapse": true,
                "title": "个人客户识别信息",
                "formItem": [
                    {
                       "formList": [
                            {
                                "CODE": "IDEN_TYPE_ID",
                                "VALUE": "身份证",
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
                "title": "个人客户地址信息",
                "formItem": [
                    {
                        "formList": [
                            {
                                "CODE": "ADD_TYPE_ID",
                                "VALUE": "家庭地址",
                                "DISP": "类型"
                            },
                            {
                                "CODE": "PROVINCE",
                                "VALUE": "北京市西城区阜成门金融大街1号",
                                "DISP": "地址信息"
                            },
                            {
                                "CODE": "POSTAL_CODE",
                                "VALUE": "200001",
                                "DISP": "邮政编码"
                            }
                        ]
                    }
                ]
            },
            contactInfo: {
                "isExtend": true,
                "isCollapse": true,
                "title": "个人客户联系信息",
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
                "title": "个人客户其他关系人信息",
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
