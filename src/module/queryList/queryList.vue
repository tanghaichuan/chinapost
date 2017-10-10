<template>
    <div class="company">
        <div class="userinfo clearfix">
            <div class="infoarea">
                <t-avatar :img-src="userInfo.userImg" class="user-img"></t-avatar>
                <span>{{userInfo.username}}</span>
                <span>
                    <i class="iconfont">&#xe657;</i>{{userInfo.organization}}</span>
                <span>
                    <i class="iconfont">&#xe66b;</i>{{userInfo.position}}</span>
            </div>
            <!--用户下属经理-->
            <div class="customer-select">
                <t-select v-model="show" filterable>
                    <t-option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</t-option>
                </t-select>
            </div>
        </div>
        <div class="operatearea clearfix">
            <div class="btngroup">
                <t-button type="primary" @click="showJudgeModal = true">
                    <i class="iconfont">&#xe632;</i>新建</t-button>
                <t-button type="outline" class="sub-btn ml-2">
                    <i class="iconfont">&#xe636;</i>导入</t-button>
            </div>
            <!--查询-->
            <div class="searcharea">
                <t-select v-model="queryCustomerByType" placeholder="按名称">
                    <t-option value="name">按名称</t-option>
                    <t-option value="customerCode">按主码</t-option>
                    <t-option value="partyId">按识别号码</t-option>
                </t-select>
                <t-select class="ml-1" v-model="queryCustomer" clearable :loading="typeLoading" filterable remote :remote-method="filterRemoteMethod" @on-query-change="onQueryChange" @on-change="onChange">
                    <t-option v-for="(option, index) in searchReslist" :value="option" :key="index">{{option}}</t-option>
                </t-select>
            </div>
        </div>
        <!--查询无结果-->
        <div class="view-empty" v-if="showEmptyBg">
            <p class="empty-img">
                <img src="../../asset/image/query-ept.png" width="100%;" />
            </p>
            <p class="notice-txt">SO 抱歉！无相关结果，有劳重搜。</p>
        </div>
        <!--查询列表区域-->
        <query-result v-else :column="column" :data="queryList"></query-result>
        <!--分页-->
        <div class="client-pager">
            <t-pager :page-size="pageSize" :sizer-range="[10, 15, 20]" :total="currentList.length" :show-sizer="true" :show-elevator="true" @on-change="changePage"></t-pager>
        </div>
        <!--校验-->
        <t-modal v-model="showJudgeModal" width="430">
            <p slot="header">
                <span>客户唯一性校验</span>
            </p>
            <div class="dialog-content">
                <t-form :rules="ruleForm" :model="personal" ref="personal" label-position="left" :label-span="2">
                    <t-form-item label="客户名称" prop="name">
                        <t-input v-model="personal.name" placeholder="请输入"></t-input>
                    </t-form-item>
                    <t-form-item label="识别类型" prop="type">
                        <t-select v-model="personal.type" placeholder="请选择">
                            <t-option v-for="(item,index) in cardType" :value="item.value" :key="index">
                                {{item.label}}
                            </t-option>
                        </t-select>
                    </t-form-item>
                    <t-form-item label="号码" prop="num">
                        <t-input v-model="personal.num" placeholder="请输入"></t-input>
                    </t-form-item>
                </t-form>
            </div>
            <div slot="footer">
                <t-button type="outline" class="sub-btn" @click.native="cancel('personal')">取消</t-button>
                <t-button type="primary" @click.native="submitForm('personal')">查询</t-button>
            </div>
        </t-modal>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import queryResult from './wrapper/queryResult'
export default {
    name: "company",
    components: {
        queryResult
    },
    data() {
        return {
            pageSize: 10,
            showEmptyBg: false,
            userInfo: {
                userImg: require('../../asset/image/user-img.png'),
                username: '戴维(18919000923)',
                organization: '大客户经理部经理',
                position: '客户经理'
            },
            personal: {
                type: '',
                name: '',
                num: ''
            },
            cardType: [
                {
                    value: 'IDCard',
                    label: '组织机构代码'
                },
                {
                    value: 'HDCard',
                    label: '纳税人识别号'
                },
                {
                    value: 'JDCard',
                    label: '军官证'
                }
            ],
            ruleForm: {
                type: [{ required: true, message: '不能为空', trigger: 'blur' }],
                name: [{ required: true, message: '不能为空', trigger: 'blur' }],
                num: [{ required: true, message: '不能为空', trigger: 'blur' }]
            },
            showJudgeModal: false,
            queryCustomerByType: 'name', // 查询类型，默认按姓名
            queryCustomer: '', // 查询条件
            typeLoading: false,
            searchReslist: [],
            column: [
                {
                    title: "客户名称",
                    render: (h, params) => {
                        let vm = this;
                        return h('div', {
                            style: {
                                paddingLeft: '12px'
                            }
                        }, [
                                h('i', {
                                    'class': {
                                        iconfont: true,
                                        iconClient: params.row.partType !== '1000',
                                        iconPerson: params.row.partType === '1000'
                                    },
                                    domProps: {
                                        innerHTML: params.row.partType === '1000' ? '&#xe7ac;' : '&#xe7ab;'
                                    },
                                }),
                                h('span', {
                                    'class': 'table-body-name_cell--text',
                                    on: {
                                        click: function() {
                                            // 向后端请求对应客户信息 存储到vuex中，跳转
                                            vm.$router.push('/client/customerDtl')
                                            //console.log(params.row.customerId)
                                        }
                                    },
                                }, [params.row.name])
                            ])
                    }
                },
                {
                    title: "主码",
                    key: "customerCode"
                },
                {
                    title: "识别码",
                    render: (h, params) => {
                        return h('div', {}, [
                            h('p', {
                                'class': 'table-body-iden_cell--text'
                            }, [params.row.idenCode]),
                            h('p', {
                                'class': 'table-body-iden_cell--text'
                            }, [params.row.idenNr])
                        ])
                    }
                },
                {
                    title: "纳税人识别号",
                    key: "partyId"
                },
                {
                    title: "状态",
                    key: "custmerStatusName"
                },
                {
                    title: "操作"
                }
            ],
            queryList: [], // 渲染层
            result: [],  // 数据源
            currentList: [],// 中间层，用于处理分页逻辑
            data: {
                systemParams: {
                    PAGE_INFO: {
                        CURRENT_PAGE: "-1",
                        PAGE_SIZE: "-1"
                    }
                },
                businessParams: {
                    customerCode: "P3509"  //客户编码
                }
            }
        }
    },
    computed: {

    },
    methods: {
        ...mapActions('queryList', {
            loadCustomerList: 'loadCustomerList', // 加载客户列表
            judgeCustomerUnicity: 'judgeCustomerUnicity' // 判断客户唯一性
        }),
        // 按名类型(查询类型(queryCustomerByType)和条件(queryCustomer)筛选客户列表(动态刷新)
        filterCustomerList(query) {
            return this.result.businessParams.customerList.filter(item => item[this.queryCustomerByType].indexOf(query) > -1)
        },
        // 自动补全
        filterRemoteMethod(query) {
            if (query !== '') {
                this.typeLoading = true
                setTimeout(() => {
                    this.typeLoading = false
                    let tempList = this.result.businessParams.customerList.map(item => item[this.queryCustomerByType]) // 默认按名称搜索
                    this.searchReslist = tempList.filter(item => item.indexOf(query) > -1)
                }, 200);
            } else {
                this.searchReslist = []
            }
        },
        // select框值改变时触发筛选
        onQueryChange(query) {
            this.queryList = this.filterCustomerList(query)
            this.currentList = this.queryList
        },
        // option值选中时触发筛选
        onChange() {
            this.queryList = this.filterCustomerList(this.queryCustomer)
            this.currentList = this.queryList
        },
        changePage(current) {
            // currentList用于记录初始数据
            this.queryList = this.currentList.filter((item, index) => index >= (current - 1) * this.pageSize && current * this.pageSize - 1
            )
        },
        showModal() {
            this.showJudgeModal = true
        },
        cancel(name) {
            this.$refs[name].resetFields()
            this.showJudgeModal = false
        },
        async submitForm(name) {
            try {
                let data = {
                    customerName: this.personal.name,
                    idenCode: this.personal.type,
                    idenNr: this.personal.num
                }
                let res = await this.judgeCustomerUnicity(data) // 确定是否唯一，不唯一则返回相似性数据列表
                console.log(res)
            } catch (error) {
                console.error(error)
            }
            this.$Message.success('验证成功!')
        }
    },
    async created() {
        try {
            this.result = await this.loadCustomerList(this.data)
            if (this.result.systemParams.RESPONSE_INFO.responseCode === '0') {
                if (this.result.businessParams.customerList.length !== 0) {
                    this.showEmptyBg = false
                    this.queryList = this.result.businessParams.customerList // 初始化渲染曾
                    this.currentList = this.result.businessParams.customerList// 初始化中间层
                } else {
                    this.showEmptyBg = true
                }
            } else {
                this.showEmptyBg = true
                console.error('加载失败')
            }
        } catch (error) {
            console.error(error)
        }
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

.company {
    margin: 0 20px;
    position: relative;
}

.userinfo {
    padding: 25px;
    min-height: 120px;
    border: 1px solid #dce2e4;
    border-radius: 5px;
    background-color: #fff;
    .infoarea {
        float: left;
        line-height: 70px;
        span {
            padding-left: 20px;
            i {
                margin-right: 5px;
            }
        }
        .user-img {
            padding: 0;
            width: 70px;
            height: 70px;
            line-height: 70px;
            background-color: transparent;
            cursor: pointer;
            .avatar__dot {
                display: none;
            }
        }
    }
    .customer-select {
        margin-top: 22px;
        float: right;
        width: 150px;
        .input {
            input {
                border: 0;
                height: 24px;
            }
        }
    }
}

.operatearea {
    padding: 20px 0;
    .btngroup {
        float: left;
        button {
            i {
                margin-right: 5px;
            }
        }
    }
    .searcharea {
        margin-right: 25px;
        float: right;
        .select {
            width: 208px !important;
            &:first-child {
                width: 100px !important;
            }
        }
        .input {
            input {
                border: 0;
                height: 24px;
            }
        }
        .nature-btn {
            background-color: #fff;
        }
        button {
            i {
                margin-right: 5px;
            }
        }
    }
}

.queryresult {
    margin-bottom: 20px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .query-list {
        .list-tit {
            line-height: 40px;
            background: #f7f7f7;
            li {
                width: 16.666666%;
                font-size: 12px;
                color: #000;
                text-align: left;
                text-indent: 25px;
                float: left;
            }
            &:after {
                content: " ";
                height: 0;
                clear: both;
                display: block;
            }
        }
        .list-result {
            li {
                line-height: 60px;
                border-bottom: 1px solid #e9e9e9;
                cursor: pointer;
                &:after {
                    content: " ";
                    height: 0;
                    clear: both;
                    display: block;
                }
                p {
                    width: 16.666666%;
                    font-size: 12px;
                    color: #000;
                    float: left;
                    text-indent: 25px;
                    span {
                        opacity: 0.8;
                        filter: alpha(opacity=80);
                    }
                    i {
                        font-size: 20px;
                        vertical-align: top;
                        margin-right: 2px;
                        &.iconClient {
                            color: #007f3b;
                        }
                        &.iconPerson {
                            color: #ffbb37;
                        }
                    }
                    a {
                        color: #1f90e6;
                        &:not(:last-child) {
                            zoom: 1;
                            &:after {
                                margin: 0 10px;
                                display: inline-block;
                                content: '';
                                height: 10px;
                                border-right: 1px solid #ccc;
                            }
                        }
                    }
                }
                .iden-code {
                    width: 16.666666%;
                    float: left;
                    p {
                        width: 100%;
                        line-height: 30px;
                    }
                }
                &:hover {
                    background: #F3FAF6;
                }
            }
        }
    }
}

.client-pager {
    background: #fff;
    padding: 20px 10px 20px 0;
    border: 1px solid #d9d9d9;
    border-top: 0;
    margin-bottom: 20px;
    .pagination {
        float: right;
    }
    &:after {
        content: " ";
        height: 0;
        clear: both;
        display: block;
    }
}

.dialog-content {
    padding: 10px 10px 20px;
    .form-group {
        margin-bottom: 15px;
    }
}

.view-empty {
    background: #fff;
    padding: 130px 0;
    p {
        margin: 0;
    }
    .empty-img {
        text-align: center;
        img {
            width: 180px;
        }
    }

    .notice-txt {
        font-size: 12px;
        color: #767676;
        text-align: center;
        line-height: 50px;
    }
}
</style>
