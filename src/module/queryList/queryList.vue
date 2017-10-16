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
        <!--导入-->
        <t-modal class="upload-in" v-model="showPutInModal" @on-cancel="uploadOnCancel" @on-ok="uploadOnOk">
            <p slot="header">导入文档</p>
            <t-upload  
            ref="upload" 
            multiple 
            type="drag" 
            action="//jsonplaceholder.typicode.com/posts/" 
            style="margin:0 auto; width:260px;" 
            show-progress 
            :show-upload-list="false" 
            :format="['xlsx','xls']" 
            :on-success="uploadSuccess" 
            :on-error="uploadError" 
            :on-preview="uploadPreview" 
            :on-remove="uploadRemove" 
            :on-format-error="uploadFormatError" 
            :on-exceeded-size="uploadExce">
                <span tabindex="0" role="button">
                    <div class="upload--drag__container">
                        <p class="upload--drag__icon">
                            <i class="aid iconfont text-80 icon-gradient-primary" style="color: #0f7d3d;">&#xe7ae;</i>
                        </p>
                        <p>点击或拖动文件到这个区域导入</p>
                    </div>
                </span>
            </t-upload>
            <div v-for="(item, index) in uploadFileList" :key="index">
                <template v-if="item.status === 'finished'">
                    <div class="upload-file__info upload__success">
                        <p>
                            <i class="iconfont">&#xe623;</i>
                            <span>{{item.name}}</span>
                        </p>
                        <i class="iconfont upload__del" @click="delUploadFile(item)">&#xe626;</i>
                    </div>
                </template>
                <template v-else>
                    <t-progress 
                    status="active" 
                    v-if="item.showProgress" 
                    :percent="item.percentage" 
                    hide-info
                    style="width:260px; margin: 10px auto;">
                    </t-progress>
                </template>
            </div>
        </t-modal>
        <div class="operatearea clearfix">
            <div class="btngroup">
                <t-button type="primary" @click="showJudgeModal = true">
                    <i class="iconfont">&#xe632;</i>新建</t-button>
                <t-button type="outline" class="sub-btn ml-2" @click="showPutInModal = true">
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
        <t-table v-else class="query-result query-table" :columns="column" :data="queryList" @on-sort-change="onSortChange"></t-table>
        <!--分页-->
        <div class="client-pager">
            <t-pager :page-size="pageSize" :sizer-range="[10, 15, 20]" :total="currentList.length" :show-sizer="true" :show-elevator="true" @on-change="changePage"></t-pager>
        </div>
        <!--校验-->
        <t-modal v-model="showJudgeModal" class="judge-modal" width="430">
            <p slot="header">
                <span>客户唯一性校验</span>
            </p>
            <div class="dialog-content">
                <t-alert v-if="showCreateFaileMsg" class="createFailed" type="danger" show-icon>客户已存在，请[
                    <span class="feedback-cell" @click="showDetails">查看详情</span>]或[
                    <span class="feedback-cell" @click="cancel('personal')">返回</span>]</t-alert>
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
export default {
    name: "company",
    data() {
        return {
            uploadFileList: [],
            uploadRes: {},
            showPutInModal: false,
            similarCustomerList: [], // 缓存相似客户列表
            showCreateFaileMsg: false,
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
                    sortable: true,
                    title: "客户名称",
                    key: "name",
                    render: (h, params) => {
                        let vm = this;
                        return h('div', {

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
                                            vm.$router.push('/client/customerDtl')
                                            if (params.row.partType === '1000') {
                                                vm.linkToCumDetails(params.row.name, params.row.customerId)
                                            } else {
                                                vm.linkToComDetails(params.row.name, params.row.customerId)
                                            }
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
                        return h('div', {
                            style: {
                                position: 'relative',
                                left: '15px'
                            }
                        }, [
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
                    title: "操作",
                    render: (h, params) => {
                        if (params.row.custmerStatusId === '0') {
                            return h('div', {}, [
                                h('span', {
                                    'class': 'option-status'
                                }, ['添加协议'])
                            ])
                        } else if (params.row.custmerStatusId === '1' || params.row.custmerStatusId === '2') {
                            return h('div', {}, [
                                h('span', {
                                    'class': 'option-status'
                                }, ['修改']),
                                h('span', {
                                    'class': 'option-status'
                                }, ['添加协议'])
                            ])
                        } else if (params.row.custmerStatusId === '3') {
                            return h('div', {}, [
                                h('span', {
                                    'class': 'option-status'
                                }, ['审核']),
                                h('span', {
                                    'class': 'option-status'
                                }, ['添加协议'])
                            ])
                        }
                    }
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
        // 名称排序（首字母）降序
        sortByPinYinAlphabeticalDesc(property) {
            return (a, b) => {
                return b[property] - a[property]
            }
        },
        // 升序
        sortByPinYinAlphabeticalAsce(property) {
            return (a, b) => {
                return a[property] - b[property]
            }
        },
        onSortChange(column, key, order) {

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
        // 删除上传文件
        delUploadFile(file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        uploadOnCancel(){
            // 清空上传列表
            this.uploadFileList = this.$refs.upload.fileList = []
        },
        uploadOnOk(){
            if(this.uploadRes.id) {
                this.$Message.success("导入成功")
            }else{
                this.$Message.danger("导入失败")
            }
            // 模拟一条数据插入
            const obj = {
                "partType": "1000",
                "customerId": "1",
                "partyId": "123",
                "customerCode": "C1039",
                "name": "亚信",
                "idenCode": "USCI",
                "idenNr": "91430111MA4L16JQ9B",
                "custmerStatusId": "2",
                "custmerStatusName": "正在修改"
            }
            this.queryList.unshift(obj)
            // 清空上传列表
            this.uploadFileList = this.$refs.upload.fileList = []
        },
        // 文件上传成功
        uploadSuccess(response, file, fileList) {
            if(response){
                this.uploadRes = response
            }
        },
        // 文件上传失败
        uploadError(error, file, fileList) {
            this.$Notice.error({
                title: '文件上传失败',
                desc: `文件  + ${file.name} + ' 上传失败，${error}。`
            })
        },
        // 文件已上传文件链接
        uploadPreview(file) {
            //console.log(file);
        },
        // 文件格式验证失败
        uploadFormatError(file, fileList) {
            this.$Notice.warning({
                title: '文件格式不正确',
                desc: '文件 ' + file.name + ' 格式不正确，请上传 xls 或 xlsx 格式的文件。'
            })
        },
        // 文件大小超出限制
        uploadExce(file, fileList) {
            // this.$Notice.warning({
            //     title: '超出文件大小限制',
            //     desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            // })
        },
        // 跳转至个人客户详情(机构和个人详情页参数可能不同，这里先不合并)
        linkToCumDetails(name, id) {
            this.$router.push({
                name: `个人客户信息详情`, params: {
                    name: name,
                    id: id
                }
            })
        },
        // 跳转至机构客户详情 
        linkToComDetails(name, id) {
            this.$router.push({
                name: `机构客户信息详情`, params: {
                    name: name,
                    id: id
                }
            })
        },
        showDetails() {
            this.$refs.personal.resetFields()
            this.showJudgeModal = false
            this.showCreateFaileMsg = false
            // 目前查看相似客户详情按第一条
            if (this.similarCustomerList[0].partType === '1000') {
                this.linkToCumDetails(this.similarCustomerList[0].name, this.similarCustomerList[0].customerId)
            } else {
                this.linkToComDetails(this.similarCustomerList[0].name, this.similarCustomerList[0].customerId)
            }
        },
        showModal() {
            this.showJudgeModal = true
        },
        cancel(name) {
            this.$refs[name].resetFields()
            this.showJudgeModal = false
            this.showCreateFaileMsg = false
        },
        async submitForm(name) {
            this.$refs[name].validate(async valid => {
                if (valid) {
                    try {
                        let data = {
                            customerName: this.personal.name,
                            idenCode: this.personal.type,
                            idenNr: this.personal.num
                        }
                        let res = await this.judgeCustomerUnicity(data) // 确定是否唯一，不唯一则返回相似性数据列表
                        if (res.systemParams.businessParams.unicity === 'Y') {
                            // 创建的客户唯一

                            this.$Message.success('验证成功!')
                            this.showCreateFaileMsg = false
                        } else {
                            // 创建的客户不唯一
                            this.showCreateFaileMsg = true
                            // 若不唯一则拿到相似客户信息
                            this.similarCustomerList = res.systemParams.businessParams.customerList
                        }
                    } catch (error) {
                        console.error(error)
                    }

                } else {
                    this.$Message.success('验证失败!')
                }
            })

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
    },
    mounted () {
        this.uploadFileList = this.$refs.upload.fileList;
    }
}
</script>
<style scoped lang="less">
.upload__success {
    color: rgb( 60, 149, 97);
}

.upload__failed {
    color: red;
}

.upload-file__info {
    width: 260px;
    margin: 10px auto;
    p {
        display: inline-block;
    }
    span {
        margin-left: 10px;
        display: inline-block;
    }
    .upload__del {
        cursor: pointer;
        float: right;
    }
}

.upload-in {
    .modal-content {
        max-height: 100%;
    }
}

.judge-modal {
    .modal-content {
        max-height: 100% !important;
    }
    .dialog-content {
        padding: 10px 10px 0px;
    }
}

.createFailed {
    .feedback-cell {
        cursor: pointer;
        color: #108eea;
        &:hover {
            text-decoration: underline;
        }
    }
}

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

.query-result {
    width: 100%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-bottom: transparent;
    border-radius: 4px;
    .table--border th {
        border-left: 0;
    }
    .table th {
        width: 16.666666%;
        font-size: 12px;
        font-weight: 400;
        color: #000;
        text-align: left;
        text-indent: 7px;
    }
    thead {
        tr {
            line-height: 40px;
            background: #f7f7f7;
        }
    }
    .table td {
        border-bottom: 1px solid #e9e9e9;
    }
    .table__body {
        .table__cell--text {
            padding-left: 28px;
            opacity: 0.8;
            font-size: 12px;
            color: #000;
        }
    }
    .table-body-iden_cell--text {
        margin: 0;
        line-height: 30px;
        font-size: 12px;
        color: #000;
        text-indent: 14px;
        opacity: 0.8;
    }
    .table-body-name_cell--text {
        padding-left: 6px;
        color: #1f90e6;
        font-size: 12px;
        cursor: pointer;
        opacity: 0.8;
        &:hover {
            text-decoration: underline;
        }
    }
    .iconClient {
        font-size: 20px;
        vertical-align: middle;
        margin-right: 4px;
        color: #007f3b;
    }
    .iconPerson {
        font-size: 20px;
        vertical-align: middle;
        margin-right: 4px;
        color: #ffbb37;
    }
    .option-status {
        padding: 0 5px;
        &:first-child {
            padding-left: 25px;
        }
        display: inline-block;
        line-height: 12px;
        font-size: 12px;
        color: #108eea;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
        &:not(:first-child) {
            border-left: 1px solid #ccc;
        }
    }
}

.query-table .table th {
    width: 16.666666%;
    font-size: 12px;
    color: #000;
    text-align: left;
    text-indent: 25px;
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
