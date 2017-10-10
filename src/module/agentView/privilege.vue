<script src="../../../.ipu/ipu.js"></script>
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
        <div class="privilege">
            <div>
                <p>权限管理</p>
            </div>
            <div class="privilege-top clearfix">
                <div class="role-query float-left">
                    <t-card  dis-hover style="height: 120px">
                        <span slot="head"><span style="font-size: 12px">用户角色询查</span></span>
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
                    <t-card  dis-hover style="height: 120px">
                        <span slot="head"><span style="font-size: 12px">该用户下角色</span>  </span>
                       <div v-for="(items,index) in tagrole" style="display: inline-block" @click="clickedTag(index)">
                           <t-tag :class="{active: isActive}" > <span >{{items.name}},{{index}}</span></t-tag>
                       </div>
                    </t-card>
                </div>
            </div>


            <div class="privilege-down clearfix mt-3">
                <div class="distribution float-left">
                    <t-card style="" dis-hover>
                        <span slot="head"><span style="font-size: 12px">权限分配</span>   </span>
                        <!-- <tree></tree>-->
                        <t-tree
                                all-expandable="ture"
                                :data="dataList"
                                is-check
                                :props="defaultProps"
                                @on-select="handleNodeClick">

                        </t-tree>


                    </t-card>
                </div>
                <div class="administrators float-right ">
                    <t-card style="" dis-hover>
                        <span slot="head" style="width: 100%;font-size: 12px; display: inline-block;" class="clearfix">
                            <span class="float-left">当前选中角色:管理员 </span>
                            <span class="amount float-right">已选择指标数: <span style="color:#009241 ">1000</span> /个</span>
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
                            <p class="mt-lg-4" style="font-size: 12px">选中三级名称</p>
                            <!--  <t-tabs>
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
                              </t-tabs>-->
                            <t-collapse v-model="value" accordion style="background: #fff;">

                                <t-panel name="1">
                                    <t-checkbox
                                            class="ml-2"
                                            style="font-size: 12px;"
                                            :indeterminate="indeterminate"
                                            :value="checkAll"
                                            @click.prevent.stop.native="all">四级指标1
                                    </t-checkbox>
                                    <p slot="content" style="font-size: 12px;">
                                        <t-checkbox-group class="d-flex justify-content-between mb-2"
                                                          v-model="checkAllGroup" @on-change="son">

                                            <span style="width: 25%">
                                                <t-checkbox>客户编号</t-checkbox>
                                            </span>
                                            <span style="width: 25%">
                                                <t-checkbox>客户编号</t-checkbox>
                                            </span>

                                            <span style="width: 25%">
                                                <t-checkbox>客户编号</t-checkbox>
                                            </span>

                                            <span style="width: 25%">
                                                <t-checkbox>客户编号</t-checkbox>
                                            </span>


                                        </t-checkbox-group>
                                        <t-checkbox-group class="d-flex justify-content-between "
                                                          v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                            <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                        </t-checkbox-group>
                                    </p>
                                </t-panel>
                                <t-panel name="2">
                                    <t-checkbox
                                            class="ml-2"
                                            style="font-size: 12px;"
                                            :indeterminate="indeterminate"
                                            :value="checkAll"
                                            @click.prevent.stop.native="all">四级指标1
                                    </t-checkbox>
                                    <p slot="content" style="">
                                        <t-checkbox-group size="lg" class="d-flex justify-content-between mb-2"
                                                          v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="客户编号"></t-checkbox></span>

                                            <span style="width: 25%">
                                                <t-checkbox>
                                                    <a href="javascript:;" @click="modal = true">客户名称</a>
                                                    <t-modal
                                                            v-model="modal"
                                                            title="普通的t-modal对话框标题"
                                                            @on-ok="ok"
                                                            @on-cancel="cancel">
                                     <t-checkbox-group size="lg" class="d-flex justify-content-between "
                                                       v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                            <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                        </t-checkbox-group>  <t-checkbox-group size="lg"
                                                                               class="d-flex justify-content-between "
                                                                               v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                            <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                        </t-checkbox-group>
                                    </t-modal>
                                                </t-checkbox>
                                            </span>
                                            <span style="width: 25%"> <t-checkbox label="客户简称"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户英文名称"></t-checkbox></span>

                                        </t-checkbox-group>
                                        <t-checkbox-group size="lg" class="d-flex justify-content-between "
                                                          v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                            <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                        </t-checkbox-group>
                                    </p>
                                </t-panel>
                                <t-panel name="3">
                                    <t-checkbox
                                            class="ml-2"
                                            style="font-size: 12px;"
                                            :indeterminate="indeterminate"
                                            :value="checkAll"
                                            @click.prevent.stop.native="all">四级指标1
                                    </t-checkbox>
                                    <p slot="content" style="">
                                        <t-checkbox-group size="lg" class="d-flex justify-content-between mb-2"
                                                          v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="客户编号"></t-checkbox></span>

                                            <span style="width: 25%">
                                                <t-checkbox>
                                                    <a href="javascript:;" @click="modal = true">客户名称</a>
                                                    <t-modal
                                                            v-model="modal"
                                                            title="普通的t-modal对话框标题"
                                                            @on-ok="ok"
                                                            @on-cancel="cancel">
                                     <t-checkbox-group size="lg" class="d-flex justify-content-between "
                                                       v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                            <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                        </t-checkbox-group>  <t-checkbox-group size="lg"
                                                                               class="d-flex justify-content-between "
                                                                               v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                            <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                        </t-checkbox-group>
                                    </t-modal>
                                                </t-checkbox>
                                            </span>
                                            <span style="width: 25%"> <t-checkbox label="客户简称"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户英文名称"></t-checkbox></span>

                                        </t-checkbox-group>
                                        <t-checkbox-group size="lg" class="d-flex justify-content-between "
                                                          v-model="checkAllGroup" @on-change="son">
                                            <span style="width: 25%"> <t-checkbox label="英文简称"></t-checkbox></span>

                                            <span style="width: 25%"> <t-checkbox label="职工姓名"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="组织机构代码"></t-checkbox></span>
                                            <span style="width: 25%"> <t-checkbox label="客户类别"></t-checkbox></span>

                                        </t-checkbox-group>
                                    </p>
                                </t-panel>
                            </t-collapse>

                        </div>
                    </t-card>
                </div>

            </div>


            <div class="foot float-right mt-2 mb-3">
                <t-button type="outline-primary" @click="confirm">清空权限</t-button>

                <t-button type="primary" class="ml-3">确定修改</t-button>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                isActive: false,
                tagrole: [
                    {
                        name:'a1',
                        id:1
                    },{
                        name:'a2',
                        id:2
                    },{
                        name:'a3',
                        id:3
                    }
                ],
                isClicked: false,
                indeterminate: false,
                checkAll: false,
                checkAllGroup: [],
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
        components: {},
        mounted() {
            axios.get('/mock/property', {
            }).then( (response)=> {
                var serData=response.data.data
                for(var i=0;i<serData.length;i++){
                    for(var a in serData[i]){
                        } 
                    } 

            });
        },
        methods: {
            handleNodeClick(datanode, dd, aa) {

            },
            clickedTag(event,index) {

            },
            //客户查询
            remoteMethod1(query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        var arr = []
                        var ary = null

                        this.person.map((e, i) => {
                            arr.push(e.name)
                            ary = e.role
                        })
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
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            },
            //全选
            all() {

                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['客户编号', '客户名称', '客户英文名称', '客户简称', '英文简称', '职工姓名', '客户类别', '组织机构代码'];
                } else {
                    this.checkAllGroup = []
                }

            },

            son(data) {
                console.log(data)

                if (data.length === 8) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .active{
        background: skyblue;
    }

    .breadcrumb__item:hover{
      color: #2D98FF !important;
    }

    .privilege {
        width: 100%;
        .privilege-top {
            width: 100%;
            .role-query {
                width: 35%;
                .input {
                    border: none !important;

                    .aid {
                        display: block !important;
                        margin-right: 20px;
                        color: #eaeaea;
                    }
                    .aid::before {
                        content: "\F54E";
                    }
                }
            }
            .common-roles {
                width: 65%;
            }

        }
        .privilege-down {
            width: 100%;
            .distribution {
              width: 35% ;
            }
            .administrators {
                width: 65%;
                .input {
                    border: none !important;
                    .aid {
                        display: block !important;
                        margin-right: 20px;
                        color: #eaeaea;
                    }
                    .aid::before {
                        content: "\F54E";
                    }
                }
            }

        }
    }


</style>
