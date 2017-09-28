<template>
    <div class="agent" style="margin-right: 20px">
        <!-- 面包屑导航 -->
        <t-breadcrumb class="breadcrumb">
            <t-breadcrumb-item href="">首页</t-breadcrumb-item>
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
                        <t-input icon="magnify" icon-placement="right" placeholder="请输入角色名称"></t-input>
                    </t-card>
                </div>
                <div class="common-roles float-right">
                    <t-card style="" dis-hover>
                        <span slot="head">常用角色</span>
                        <t-tag type="text">标签1</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag><t-tag type="text">标签1</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag><t-tag type="text">标签1</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag><t-tag type="text">标签1</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag><t-tag type="text">标签1</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag><t-tag type="text">标签1</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag><t-tag type="text">标签1</t-tag>
                        <t-tag type="text">标签2</t-tag>
                        <t-tag type="text">标签3</t-tag>

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
                        <t-input class="input-center" icon="magnify" icon-placement="right" placeholder="请输入角色名称"
                                 style="width: 340px"></t-input>
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
                <!--  <t-button type="outline-primary">清空权限</t-button>-->
                <t-button type="primary" class="ml-3">确定修改</t-button>

            </div>

        </div>

    </div>
</template>
<script>
    import './index.less';
    // import tree from '../clientmanage/components/checkBoxTree.vue'

    export default {
        data() {
            return {
                customerId: this.$route.params.customerId,
                dataList:[{
                    label: '客户基本视图',
                    children: [{
                        label: '客户基本信息',
                        children: [{
                            label: '一般基本信息',
                        },{
                            label: '实际控制人信息',
                        },{
                            label: '企业打人代表信息',
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
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                modal: false,

            }
        },
        methods: {},
        created() {
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
        },
        components: {},
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: '确认清空权限吗？？？',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            },
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
                }
            }

        }

    }
</style>
