<template>
    <div class="company">
        <div class="userinfo clearfix">
            <div class="infoarea">
                <t-avatar :img-src="userInfo.userImg" class="user-img"></t-avatar>
                <span>{{userInfo.username}}</span>
                <span><i class="iconfont">&#xe657;</i>{{userInfo.organization}}</span>
                <span><i class="iconfont">&#xe66b;</i>{{userInfo.position}}</span>   
            </div>
<!--             <div class="powerselect">
                <t-select
                v-model="model1"
                filterable
                remote
                :remote-method="remoteMethod1"
                :loading="loading1"
                 placeholder="戴维">
                <t-option v-for="option in options1" :value="option.value" :key="new Date()">{{option.label}}</t-option>
              </t-select>
            </div> -->
        </div>
        <div class="operatearea clearfix">
            <div class="btngroup">
               <t-button type="primary" @click="modal = true"><i class="iconfont">&#xe632;</i>新建</t-button>
               <t-button type="outline" class="sub-btn ml-2"><i class="iconfont">&#xe636;</i>导入</t-button> 
            </div>
            <div class="searcharea">
                <t-select v-model="model3" placeholder="按名称">
                    <t-option value="beijing">按名称</t-option>
                    <t-option value="shanghai">按号码</t-option>
                    <t-option value="shenzhen">按类型</t-option>
                </t-select>
                <t-select
                class="ml-1"
                v-model="model2"
                filterable
                remote
                :remote-method="remoteMethod2"
                :loading="loading2"
                placeholder="请输入名称">
                <t-option v-for="option in options2" :value="option.value" :key="new Date()">{{option.label}}</t-option>
                </t-select>
                <t-button type="outline-primary" class="nature-btn ml-2"><i class="iconfont">&#xe62c;</i>搜索</t-button>
            </div>
        </div>
        <!--查询无结果-->
        <div class="view-empty">
            <p class="empty-img">
                <img src="../../asset/image/query-ept.png" />
            </p>
            <p class="notice-txt">SO 抱歉！无相关结果，有劳重搜。</p>
        </div>
        <!--查询列表-->
        <div class="queryresult">   
           <div class="query-list">
                <ul class="list-tit">
                    <li>客户名称</li><li>主码</li><li>识别码</li><li>纳税人识别号</li><li>状态</li><li>操作</li>
                </ul>
                <ul class="list-result">
                    <li v-for="(items,index) in queryList" :key="index">
                        <p><a href="javascript:;"><i class="iconfont iconClient" v-if="items.partyType ==1001">&#xe7ab;</i>
                             <i class="iconfont iconPerson" v-if="items.partyType ==1002">&#xe7ac;</i>
                             <span>{{items.name}}</span></a></p>
                        <p><span>{{items.mainCode}}</span></p>
                        <div class="iden-code"><p><span>{{items.idenCode}}</span></p><p><span>{{items.idenNr}}</span></p></div>
                        <p><span>{{items.customerCode}}</span></p>
                        <p><span>{{items.StatusName}}</span></p>
                        <p><span><a href="javascript:;" v-for="(item,key) in items.operation" :key="key">{{item}}</a></span></p>
                    </li>
                </ul>
            </div>
            <div class="client-pager">
                <t-pager :total="100" :show-elevator="true" :show-sizer="true"></t-pager>
            </div>
        </div>
        <t-modal v-model="modal" width="430">
            <p slot="header">
                <span>客户唯一性校验</span>
            </p>
            <div class="dialog-content">
                <t-form :model="personal" label-position="left" :label-span="2">
                    <t-form-item label="客户名称">
                            <t-input v-model="personal.name" placeholder="请输入"></t-input>
                    </t-form-item>
                    <t-form-item label="识别类型">
                        <t-select v-model="personal.type" placeholder="请选择">
                                <t-option v-for="(item,index) in personal.cardType" :value="item.value" :key="index">
                                    {{item.label}}
                                </t-option>
                        </t-select>
                    </t-form-item>
                    <t-form-item label="号码">
                            <t-input v-model="personal.num" placeholder="请输入"></t-input>
                    </t-form-item>
                </t-form>
            </div>
            <div slot="footer">
                <t-button type="outline" class="sub-btn" @click="cancel">取消</t-button>
                <t-button type="primary" @click="cancel">查询</t-button>
            </div>
        </t-modal>
    </div>
</template>
<script>
export default {
    name: "company",
    data() {
        return {
            userInfo: {
                userImg: require('../../asset/image/user-img.png'),
                username: '戴维(18919000923)',
                organization: '大客户经理部经理',
                position: '客户经理'               
            },
            personal:{
                type:'',
                name:'',
                num:'',
                cardType:[
                    {
                        value:'IDCard',
                        label:'组织机构代码'
                    },
                    {
                        value:'HDCard',
                        label:'纳税人识别号'
                    },
                    {
                        value:'JDCard',
                        label:'军官证'
                    }
                ]
            },
            modal: false,
            model1: '',
            model2: '',
            model3: '',
            loading1: false,
            loading2: false,
            options1: [],
            options2: [],
            list: [
                '戴维',
                '张三',
                '李四',
                '王五'
            ],
            queryList: [
                {
                    customerid: "1",
                    partyType: "1001",
                    name: "亚信中国",
                    mainCode:"12114114",
                    idenCode: "组织机构代码",
                    idenNr:"66881786-2", 
                    customerCode: "320114302674668",
                    StatusName: "修改待提交",
                    operation: ["修改详情"]
                },
                {
                    customerid: "2",
                    partyType: "1001",
                    name: "亚信中国",
                    mainCode:"12114114",
                    idenCode: "组织机构代码",
                    idenNr:"66881786-2", 
                    customerCode: "320114302674668",
                    StatusName: "修改审批中",
                    operation: ["审批查询"]
                },
                {
                    customerid: "3",
                    partyType: "1001",
                    name: "中国银行",
                    mainCode:"12114114",
                    idenCode: "组织机构代码",
                    idenNr:"66881786-2", 
                    customerCode: "320114302674668",
                    StatusName: "在网",
                    operation: ["修改","注销","添加协议"]
                },
                {
                    customerid: "4",
                    partyType: "1001",
                    name: "中国石化",
                    mainCode:"12114114",
                    idenCode: "组织机构代码",
                    idenNr:"66881786-2", 
                    customerCode: "320114302674668",
                    StatusName: "创建待提交",
                    operation: ""
                },
                {
                    customerid: "5",
                    partyType: "1001",
                    name: "交通银行",
                    mainCode:"12114114",
                    idenCode: "组织机构代码",
                    idenNr:"66881786-2", 
                    customerCode: "320114302674668",
                    StatusName: "修改审批中",
                    operation: ["审批查询"]
                },
                {
                    customerid: "6",
                    partyType: "1001",
                    name: "京东",
                    mainCode:"12114114",
                    idenCode: "组织机构代码",
                    idenNr:"66881786-2", 
                    customerCode: "320114302674668",
                    StatusName: "离网",
                    operation: ["修改"]
                },
                {
                    customerid: "7",
                    partyType: "1002",
                    name: "唐晓阳",
                    mainCode:"12114114",
                    idenCode: "身份证",
                    idenNr:"320113196307064578", 
                    customerCode: "320114302674668",
                    StatusName: "在网",
                    operation: ["修改","注销","添加协议"]
                },
                {
                    customerid: "8",
                    partyType: "1002",
                    name: "唐睿智",
                    mainCode:"12114114",
                    idenCode: "军官证",
                    idenNr:"政字第00111206", 
                    customerCode: "320114302674668",
                    StatusName: "在网",
                    operation: ["修改","注销","添加协议"]
                },
                {
                    customerid: "9",
                    partyType: "1001",
                    name: "交通银行",
                    mainCode:"12114114",
                    idenCode: "组织机构代码",
                    idenNr:"66881786-2", 
                    customerCode: "320114302674668",
                    StatusName: "修改审批中",
                    operation: ["审批查询"]
                },
                {
                    customerid: "10",
                    partyType: "1001",
                    name: "京东",
                    mainCode:"12114114",
                    idenCode: "组织机构代码",
                    idenNr:"66881786-2", 
                    customerCode: "320114302674668",
                    StatusName: "离网",
                    operation: ["修改"]
                }
            ]
        }
    },
    methods: {
        remoteMethod1 (query) {
            if (query !== '') {
                this.loading1 = true;
                setTimeout(() => {
                    this.loading1 = false;
                    const list = this.list.map((item,index) => {
                        return {
                            value: item,
                            label: item
                        };
                    });
                    this.options1 = list.filter(item => item.label.indexOf(query) > -1);
                }, 200);
            } else {
                this.options1 = [];
            }
        },
        remoteMethod2 (query) {
            if (query !== '') {
                this.loading2 = true;
                setTimeout(() => {
                    this.loading2 = false;
                    const list = this.list.map((item,index) => {
                        return {
                            value: item,
                            label: item
                        };
                    });
                    this.options2 = list.filter(item => item.label.indexOf(query) > -1);
                }, 200);
            } else {
                this.options2 = [];
            }
        },
        showModal(){
            this.modal = true
        },
        cancel(){
            this.modal = false
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
    margin:0 20px;
    position: relative;
}
.userinfo {
    padding:25px;
    min-height: 120px;
    border:1px solid #dce2e4;
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
    .powerselect {
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
    border:1px solid #d9d9d9;
    border-radius:4px;
    p{
        margin:0;
    }
    ul{
        list-style:none;
        margin:0;
        padding:0;
    }
    .query-list{
        .list-tit{
            line-height:40px;
            background:#f7f7f7;
            li{
                width:16.666666%;
                font-size:12px;
                color:#000;
                text-align:left;
                text-indent:25px;
                float:left;
            }
            &:after{
                content:" ";
                height:0;
                clear:both;
                display:block;
            }
        }
        .list-result{
            li{
                line-height:60px;
                border-bottom:1px solid #e9e9e9;
                cursor:pointer;
                &:after{
                    content:" ";
                    height:0;
                    clear:both;
                    display:block;
                }
                p{
                    width:16.666666%;
                    font-size:12px;
                    color:#000;
                    float:left;
                    text-indent:25px;
                    span{
                        opacity:0.8;
                        filter:alpha(opacity=80);
                    }
                    i{
                        font-size:20px;
                        vertical-align:top;
                        margin-right:2px;
                        &.iconClient{
                            color:#007f3b;
                        }
                        &.iconPerson{
                            color:#ffbb37;
                        }
                    }
                    a {
                        color: #1f90e6;
                        &:not(:last-child) {
                            zoom: 1;
                            &:after {
                                margin:0 10px;
                                display: inline-block;
                                content: '';
                                height: 10px;
                                border-right: 1px solid #ccc;
                            }
                        }
                    }
                }
                .iden-code {
                    width:16.666666%;
                    float:left;
                    p {
                        width: 100%;
                        line-height:30px;
                    }
                }
                &:hover{
                  background:#F3FAF6;
                }
            }
        }
    }
    .client-pager{
        padding:20px 10px 20px 0;
        .pagination{
            float:right;
        }
        &:after{
            content:" ";
            height:0;
            clear:both;
            display:block;
        }
    }
}
.dialog-content{
    padding:10px 10px 20px;
    .form-group {
        margin-bottom: 15px;
    }
}
.view-empty{
    background:#fff;
    padding:130px 0;
    p{
        margin:0;
    }
    .empty-img{
        text-align:center;
        img{
            width:180px;
        }
    }

    .notice-txt{
        font-size:12px;
        color:#767676;
        text-align:center;
        line-height:50px;
    }
}
</style>
