<template>
    <div class="agent" style="margin-right: 20px">
        <!-- 面包屑导航 -->
        <t-breadcrumb class="breadcrumb">
            <t-breadcrumb-item href="javascript;:">首页</t-breadcrumb-item>
            <t-breadcrumb-item href="">悬停</t-breadcrumb-item>
            <t-breadcrumb-item>三级</t-breadcrumb-item>
            <t-breadcrumb-item>四级</t-breadcrumb-item>
            <t-breadcrumb-item>当前页</t-breadcrumb-item>
        </t-breadcrumb>
        <!--权限管理视图-->
        <div class="jurisdiction">
            <div>
                <p>权限管理</p>
            </div>
            <div class="jurisdiction-top clearfix">
                <div class="role-query float-left">
                    <t-card style="" dis-hover>
                        <span slot="head">角色询查   </span>
                        <t-select
                                style="width: "
                                v-model="model13"
                                filterable
                                placeholder="请输出客户名称搜索"
                                remote
                                :remote-method="remoteMethod1"
                                :loading="loading1">
                            <t-option v-for="option in options1" :value="option.value" :key="new Date()">{{option.label}}</t-option>
                        </t-select>
                    </t-card>
                </div>
                <div class="common-roles float-right">
                    <t-card style="" dis-hover>
                        <span slot="head">常用角色</span>
                        <!--<t-tag type="text">标签1</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag>

                        <t-tag type="text">标签3</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag>-->

                        <!--<div v-show="show"><span>标签1</span>
                           <span class="ml-2" @click="modal1 = true">X</span>
                            <t-modal
                                    mask-closable="false"
                                    v-model="modal1"
                                    title="普通的t-modal对话框标题"
                                    @on-ok="ok"
                                    @on-cancel="cancel">
                                <p>对话框内容</p>
                                <p>对话框内容</p>
                                <p>对话框内容</p>
                            </t-modal></div>-->
                        <t-tag type="text" @on-close="closed">标签2</t-tag>
                        <t-tag type="text" @on-close="closed">标签2</t-tag>
                        <t-tag type="text" @on-close="closed">标签2</t-tag>

                    </t-card>
                </div>
            </div>
            <div class="jurisdiction-down clearfix mt-3">
                <div class="distribution float-left">
                    <t-card style="" dis-hover>
                        <span slot="head">权限分配</span>
                        <!-- <tree></tree>-->
                        <t-tree
                                all-expandable="ture"
                                :data="dataList"
                                is-check
                                :props="defaultProps"
                                @on-click="handleNodeClick">

                        </t-tree>


                    </t-card>
                </div>
                <div class="administrators float-right ">
                    <t-card style="" dis-hover>
                        <span slot="head" style="width: 100%">
                            <span>当前选中角色：管理员 </span>
                            <span class="amount">已选择指标数:1000/个</span>
                        </span>
                        <t-select
                                class="select-role"
                                v-model="model13"
                                filterable
                                placeholder="请输入指标名称搜索"
                                remote
                                :remote-method="remoteMethod1"
                                :loading="loading1">
                            <t-option v-for="option in options1" :value="option.value" :key="new Date()">{{option.label}}</t-option>
                        </t-select>
                        <!--<t-input class="input-center" icon="magnify" icon-placement="right" placeholder="请输入角色名称"
                                 style="width: 340px"></t-input>-->
                        <div class="base-info">
                            <p class="mt-lg-4">个人基本信息</p>
                            <t-tabs>
                                <t-tab-panel label="标签一" name="tab-1">
                                    <t-checkbox-group size="lg" class="d-flex justify-content-between mt-3">
                                        <span style="width: 25%"> <t-checkbox label="客户编号"></t-checkbox></span>

                                        <span style="width: 25%"> <t-checkbox label="客户名称"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户简称"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户英文名称"></t-checkbox></span>

                                    </t-checkbox-group>
                                    <t-checkbox-group size="lg" class="d-flex justify-content-between mt-3 ">
                                        <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                        <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                    </t-checkbox-group>
                                    <t-checkbox-group size="lg" class="d-flex justify-content-between mt-3 ">
                                        <span style="width: 25%"> <t-checkbox label="客户编号"></t-checkbox></span>

                                        <span style="width: 25%"> <t-checkbox label="客户名称"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户简称"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户英文名称"></t-checkbox></span>

                                    </t-checkbox-group>
                                    <t-checkbox-group size="lg" class="d-flex justify-content-between mt-3 ">
                                        <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                        <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                    </t-checkbox-group>
                                    <t-checkbox-group size="lg" class="d-flex justify-content-between mt-3 ">
                                        <span style="width: 25%"> <t-checkbox label="客户编号"></t-checkbox></span>

                                        <span style="width: 25%"> <t-checkbox label="客户名称"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户简称"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户英文名称"></t-checkbox></span>

                                    </t-checkbox-group>
                                    <t-checkbox-group size="lg" class="d-flex justify-content-between mt-3 ">
                                        <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                        <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                        <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                    </t-checkbox-group>


                                </t-tab-panel>
                                <t-tab-panel label="标签二" name="tab-2">标签二内容</t-tab-panel>
                                <t-tab-panel label="标签三" name="tab-3">标签三内容</t-tab-panel>
                            </t-tabs>

                        </div>
                    </t-card>
                </div>

            </div>
            <div class="foot float-right mt-2 mb-3">
                <t-button type="outline-primary" @click="confirm">清空权限</t-button>

                <t-button type="primary" class="ml-3">确定修改</t-button>
                <!--<t-button type="primary" @click="modal = true">清空权限</t-button>
                <t-modal
                        v-model="modal"
                        @on-ok="ok"
                        @on-cancel="cancel">
                    <div style="padding: 20px">
                        <i style="font-size: 14px; font-style: normal" class="swsw">!</i><h4 style="font-size: 12px;display: inline-block;line-height: 12px;margin-bottom: -5px"> 是否要清空所有权限</h4>
                        <p style="font-size: 12px">是否要清空所有权限是否要清空所有权限是否要清空所有权限</p>
                    </div>
                </t-modal>-->
            </div>
        </div>
    </div>
</template>
<script>
    import './index.less';
    export default {
        data() {
            return {
                show: true,
                customerId: this.$route.params.customerId,
                dataList: [
                    {
                        label: '客户基本视图',
                        children: [{
                            label: '客户基本信息',
                            children: [{
                                label: '一般基本信息',
                            }, {
                                label: '实际控制人信息',
                            }, {
                                label: '企业法人代表信息',
                            }]
                        }]
                    }, {
                        label: '客户关系视图',
                        children: [{
                            label: '归属信息',
                        }, {
                            label: '获客来源',
                        }]
                    }, {
                        label: '客户业务视图',
                        children: [{
                            label: '存款信息',
                            children: [{
                                label: '存款账户基本信息'
                            }]
                        }]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                modal: false,
                modal1: false,
                model13: '',
                loading1: false,
                options1: [],
                list: [
                    'Alabama',
                    'Alaska',
                    'Arizona',
                    'Arkansas',
                    'California',
                    'Colorado',
                    'Connecticut',
                    'Delaware',
                    'Florida',
                    'Georgia',
                    'Hawaii',
                    'Idaho',
                    'Illinois',
                    'Indiana',
                    'Iowa',
                    'Kansas',
                    'Kentucky',
                    'Louisiana',
                    'Maine',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                    'Nebraska',
                    'Nevada',
                    'New hampshire',
                    'New jersey',
                    'New mexico',
                    'New york',
                    'North carolina',
                    'North dakota',
                    'Ohio',
                    'Oklahoma',
                    'Oregon',
                    'Pennsylvania',
                    'Rhode island',
                    'South carolina',
                    'South dakota',
                    'Tennessee',
                    'Texas',
                    'Utah',
                    'Vermont',
                    'Virginia',
                    'Washington',
                    'West virginia',
                    'Wisconsin',
                    'Wyoming'
                ],
                person: [
                    {
                        name: '张三',
                        role: ['经理', '系统管理员', '普通员工']
                    },
                    {
                        name: '张四',
                        role: ['经理', '普通员工']
                    },
                    {
                        name: '李四',
                        role: ['大客户经理', '客户经理']
                    },
                    ,
                    {
                        name: '王五',
                        role: ['总经理', '超级管理员']
                    }
                ]

            }
        },
        /* created() {
             let params = {
                 "systemParams": {
                     "pageInfo": {
                         "CURRENT_PAGE": "1",
                         "PAGE_SIZE": "10"
                     }
                 },
                 "businessParams": {
                     "queryCondition": [{
                         "condType": "chaSpecCatalogId",
                         "condValue": [
                             "0"
                         ]
                     }]
                 }
             }

             this.$domains.cnpost.post(this.$services.AGENTVIEW.GET_AGENTVIEW_MENUS, {
                 params
             })
                 .then(({
                            data
                        }) => {
                     console.log(data)
                 })
         },*/
        components: {},
        mounted() {
        },
        methods: {
            //客户查询
            remoteMethod1(query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        var arr = []
                        var ary=null
                        
                        this.person.map((e, i) => {
                            arr.push(e.name)
                            ary=e.role
                        })
                         console.log(ary)
                        const list = arr.map((item, index) => {

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
            //清空权限模态框
            confirm() {
                this.$Modal.confirm({
                    content: '<p style="font-size:14px;">是否要清空管理员权限?</p><p>清空管理员权限可能会造成查询客户信息不全</p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                        console.log(this.data[0].role[2])
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            },
            ok() {
                this.show = false

            }
        }
    }
</script>
<style lang="less">
    .agent {
        padding: 0;
        padding-left: 20px;
        .breadcrumb {
            width: 100%;
            height: 44px;
            padding: 0;
            padding-top: 13px;
            padding-bottom: 10px;
        }
        .jurisdiction {
            width: 100%;
            .jurisdiction-top {
                width: 100%;
                .role-query {
                    width: 33.3%;
                }
                .common-roles {
                    width: 66.7%;
                }
            }
            .jurisdiction-down {

                width: 100%;
                .distribution {
                    width: 33.3%;
                }
                .administrators {
                    width: 66.7%;
                    .input-center {
                        margin-left: 180px;
                    }
                    .amount {
                        margin-left: 60%;
                    }
                    .modal-footer {
                        border: hidden !important;
                    }
                    .select-role {
                        width: 500px !important;
                        margin-left: 100px;
                    }
                }
            }

        }

    }

    .modal-footer {
        border: none !important;
    }

    .input, .select .dropdown-input {
        padding: 0 !important;
    }

    .swsw {
        display: inline-block;
        height: 14px;
        width: 14px;
        background: darkkhaki;
        border-radius: 50%;
    }

</style>
