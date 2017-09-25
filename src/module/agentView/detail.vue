<template>
<div class="agent">
  <!-- 面包屑导航 -->
  <t-breadcrumb>
    <t-breadcrumb-item href="/">Home</t-breadcrumb-item>
    <t-breadcrumb-item href="#">Components</t-breadcrumb-item>
    <t-breadcrumb-item>Breadcrumb</t-breadcrumb-item>
  </t-breadcrumb>
  <!-- 创建客户/客户选择 tab -->
  <div class="customers">
    <div class="new-customer float-left">
      <button class="btn btn-new-customer"><i class="iconfont">&#xe632;</i>查询新客户</button>
    </div>
    <div class="customer-tabs float-left">

    </div>
    <div class="customer-share">
      <t-button type="outline">默认按钮（幽灵）</t-button>
      <label for="">该客户其他业务线：邮务、证券、速递</label>
    </div>
  </div>
  <!-- 视图指标 -->
  <div class="views-menu">
    <div :class="[{'bg-warning h500': theme1 == 'ghost' }]">
      <t-menu mode="horizontal" :type="theme1" active-name="1" @on-select="handleSelect">
        <t-menu-item name="1"><i class="aid aid-home"></i>首页</t-menu-item>
        <t-menu-item name="2"><i class="aid aid-account-multiple"></i>用户管理</t-menu-item>
        <t-submenu name="3">
          <template slot="title"><i class="aid aid-chart-bar"></i>统计分析</template>
          <t-menu-item name="3-1" disabled>新增和启动</t-menu-item>
          <t-menu-item name="3-2">活跃分析</t-menu-item>
          <t-menu-item name="3-3">时段分析</t-menu-item>
        </t-submenu>
        <t-menu-item name="4">
          <i class="aid aid-settings"></i> 综合设置
        </t-menu-item>
      </t-menu>
    </div>
  </div>
</div>
</template>
<script>
import './index.less';
export default {
  data() {
    return {
      customerId: this.$route.params.customerId
    }
  },
  methods: {

  },
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
          "condValue":[
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
  }
}
</script>
