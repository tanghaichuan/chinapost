<template>
<div class="permission">
  <div class="crumb">
    <t-breadcrumb>
      <t-breadcrumb-item href="/permission/1">权限管理</t-breadcrumb-item>
      <t-breadcrumb-item href="/permission/1">视图授权</t-breadcrumb-item>
    </t-breadcrumb>
  </div>
  <div class="tabs">
    <t-tabs>
      <t-tab-panel label="指标授权" name="tab-1" class="permission-panel">
        <div class="left">
          <t-tree :data="data" :props="defaultProps" @on-click="handleNodeClick"></t-tree>
        </div>
        <div class="right">
          <div class="checkboxs"></div>
          <div class="selebox">
            <t-select v-model="model12" filterable multiple>
              <t-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</t-option>
            </t-select>
          </div>
        </div>
      </t-tab-panel>
      <t-tab-panel label="视图授权" name="tab-2">标签二内容</t-tab-panel>
    </t-tabs>
  </div>

</div>
</template>
<script>
export default {
  name: "permission",
  data() {
    return {
      data: [{
        label: '客户基本视图',
        children: [{
          label: '客户基本信息',
          children: [{
            label: '一般基本信息'
          }, {
            label: '企业法人代表信息'
          }, {
            label: '实际控制人信息'
          }, {
            label: '证件信息'
          }]
        }]
      }, {
        label: '客户关系视图',
        children: [{
          label: '获客来源',
          children: [{
            label: '客户拜访记录'
          }, {
            label: '咨询&投诉记录'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      cityList: [{
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ],
      model12: []
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }

}
</script>
<style lang="less">
.permission {
    overflow: hidden;
    width: 900px;
    margin: 0 auto;
    .selebox {
        .select--multiple {
            width: 400px;
        }
    }
    .breadcrumb {
        padding: 1rem 0;
    }
}
.permission-panel {
    padding: 20px 0;
    overflow: hidden;
}
.left {
    width: 20%;
    float: left;
    padding: 10px;
    border: 1px solid #eee;
}
.right {
    width: 70%;
    padding: 0 10px;
    float: left;
}
</style>
