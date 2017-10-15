<script src="../../../.ipu/ipu.js"></script>
<template>
  <div class="agent">
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
        <!--用户角色查询-->
        <div class="role-query float-left">
          <t-card dis-hover class="top-card">
            <span slot="head"><span class="p-title">用户角色询查</span></span>
            <t-select
              v-model="role"
              filterable
              placeholder="请输出客户名称搜索"
              remote
              @on-change="showRole"
              :remote-method="remoteMethod11"
              :loading="loading11">
              <t-option v-for="option in options11" :value="option.value" :key="new Date()">{{option.label}}</t-option>
            </t-select>
          </t-card>
        </div>
        <!--用户角色展示-->
        <div class="common-roles float-right">
          <t-card dis-hover class="top-card">
            <span slot="head">
               <span class="p-title">该用户下角色</span>
            </span>
            <div
              @click="changeColor(item)"
              v-for="( item,index) in role"
              style="display: inline-block">
              <t-tag :class="{tagColor:isColor==item}">{{item}}</t-tag>
            </div>
          </t-card>
        </div>
      </div>
      <div class="privilege-down clearfix mt-3">
        <!--权限分配-->
        <div class="distribution float-left">
          <t-card style="" dis-hover>
            <span slot="head" class="p-title  clearfix">
               <div class="float-left">指标目录 </div>
               <div class="float-right" style="height: 18px">全部指标 <t-switch rounded size="sm" class=""></t-switch></div>
            </span>
            <t-tree
              :data="dataList"
              is-select
              accordion="true"
              :props="defaultProps"
              @on-select="handleNodeClick">
            </t-tree>

          </t-card>
        </div>
        <!--当前选中角色-->
        <div class="administrators float-right ">
          <t-card dis-hover>
            <span slot="head" class="p-title  ">
               <div class=" ">已选择指标数: <span class="target-total">1000</span> /个</div>
            </span>
            <t-checkbox
              :indeterminate="indeterminate"
              :value="checkAll"
              @click.prevent.native="handleCheckAll">全选当前目录
            </t-checkbox>
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
            <!--指标展示-->
            <div class="show-target" v-show="showTarget">
              <t-checkbox-group
                class="target-group"
                v-model="checkAllGroup"
                @on-change="checkAllGroupChange">
                <!--<t-checkbox class="target" label="客户信息">客户信息</t-checkbox>
                <t-checkbox class="target" label="客户名称">客户名称</t-checkbox>
                <t-checkbox class="target" label="管理员">管理员</t-checkbox>
                <t-checkbox class="target" label="系统管理员">系统管理员</t-checkbox>-->


                <div v-for="ss in aa">{{aa}}</div>
              </t-checkbox-group>

            </div>
          </t-card>
        </div>
      </div>

      <!--底部按钮-->
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
    name:'privilege',
    data() {
      return {
        aa:'',
        showTarget:false,
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['香蕉', '西瓜'],
        isColor:'',

        role: [],
        loading11: false,
        options11: [],
        customerlist: [
          {
            "name": "张三",
            "showRole": ["超级管理", "普通管理", "部门管理", "小组管理"],
            "isColor": false
          },
          {
            "name": "李四",
            "showRole": ["超级管理", "普通管理",],
            "isColor": false
          },
          {
            "name": "王五",
            "showRole": ["普通管理", "部门管理", "小组管理"],
            "isColor": false
          },
          {
            "name": "李木子",
            "showRole": ["超级管理"],
            "isColor": false
          }
        ],
        //以上查询客户角色
        indeterminate: false,
        checkAll: false,
        checkAllGroup: [],
        show: true,
        customerId: this.$route.params.customerId,
        dataList: [
          {
            label: '客户基本视图',
            index: ['一级指标1', '一级指标2', '一级指标3', '一级指标4', '一级指标5',],
            isShow:false,
            children: [{
              label: '客户基本信息',
              index: ['二级指标', '二级指标', '二级指标3', '二级指标4', '二级指标ddd5',],
              isShow:false,
              children: [{
                label: '一般基本信息',
                index: ['3级指标', '3级指标', '3级指标3', '3级指标4', '3级指标ddd5',],
                isShow:false
              }, {
                label: '实际控制人信息',
                index: ['3级指标', '3级指标', '3级指标3', '3级指标4', '3级指标ddd5',],
                isShow:false
              }, {
                label: '企业法人代表信息',
                index: ['3级指标', '3级指标', '3级指标3', '3级指标4', '3级指标ddd5',],
                isShow:false
              }]
            }, {
              label: '客户基本信息2',
              index: ['二级指标', '二级指标', '二级指标3', '二级指标4', '二级指标ddd5',],
              isShow:false,
              children: [{
                label: '一般基本信息2',
                index: ['3级指标', '3级指标', '3级指标3', '3级指标4', '3级指标ddd5',],
                isShow:false
              }, {
                label: '实际控制人信息2',
                index: ['3级指标', '3级指标', '3级指标3', '3级指标4', '3级指标ddd5',],
                isShow:false
              }, {
                label: '企业法人代表信息2',
                index: ['3级指标', '3级指标', '3级指标3', '3级指标4', '3级指标ddd5',],
                isShow:false
              }]
            }]
          }, {
            label: '客户关系视图',
            index: ['1级指标', '1级指标', '1级指标3', '1级指标4', '1级指标ddd5',],
            isShow:false,
            children: [{
              label: '归属信息',
              index: ['二级指标', '二级指标', '二级指标3', '二级指标4', '二级指标ddd5',],
              isShow:false
            }, {
              label: '获客来源',
              index: ['二级指标', '二级指标', '二级指标3', '二级指标4', '二级指标ddd5',],
              isShow:false
            }]
          }, {
            label: '客户业务视图',
            index: ['1级指标', '1级指标', '1级指标3', '1级指标4', '1级指标ddd5',],
            isShow:false,
            children: [{
              label: '存款信息',
              index: ['二级指标', '二级指标', '二级指标3', '二级指标4', '二级指标ddd5',],
              isShow:false,
              children: [{
                label: '存款账户基本信息',
                index: ['3级指标', '3级指标', '3级指标3', '3级指标4', '3级指标ddd5',],
                isShow:false
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
    },
    methods: {
      //角色标签选中颜色
      changeColor(item) {
        this.isColor=item
      },
      //点击tree
      handleNodeClick(a, b,c ) {
       var arr=a.index
         console.log(arr)
        this.showTarget=!a.isShow
        for(var ok of arr){

            } 
        this.aa=arr

         console.log(this.aa)
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
      //客户角色查询
      remoteMethod11(query) {
        if (query !== '') {
          this.loading11 = true;
          setTimeout(() => {
            this.loading11 = false;
            var arrlist = []
            for (var i = 0; i < this.customerlist.length; i++) {
              arrlist.push(this.customerlist[i].name)
            }
            const list = arrlist.map((item, index) => {

              return {
                value: item,
                label: item
              };
            });
            this.options11 = list.filter(item => {


              return item.label.indexOf(query) > -1
            });

          }, 200);
        } else {
          this.options11 = [];
        }
      },
      showRole(value) {
        for (var i = 0; i < this.customerlist.length; i++) {
          if (value == this.customerlist[i].name) {
            this.role = this.customerlist[i].showRole
          }
        }
      },
      //全选
      handleCheckAll () {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['客户信息', '管理员', '客户名称','系统管理员'];
        } else {
          this.checkAllGroup = [];
        }
      },
      checkAllGroupChange (data) {
        console.log(data)
        if (data.length === 4) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .tagColor {
    background: #009241;
  }

  .breadcrumb__item:hover {
    color: #2D98FF !important;
  }

  .agent {
    .breadcrumb{
      padding-left: 0;
    }

    .privilege {
      width: 100%;
      .p-title {
        width: 100%;
        font-size: 12px;
        display: block;
      }
      .privilege-top {
        width: 100%;
        .top-card {
          height: 120px;
        }
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
          width: 35%;
        }
        .administrators {
          width: 65%;
          .select-role {
            width: 400px !important;
            margin-left: 100px;
          }
          .show-target {
            margin-top: 30px;
            width: 100%;
            .target-group{
              width: auto;
              .target{
                width: 25%;
              }

            }
          }
          .target-total{
            color: #00A854;
          }

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
  }


</style>
