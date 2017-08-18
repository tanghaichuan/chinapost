<style lang="scss">
  @import "../osp/osp.scss";
</style>
<template>
  <div class="layout layout--one-screen bg-gray-lightest-5">
    <div :class="['layout-sidebar bg-gray-darker',{'layout-sidebar--folded': isOpen===false}]">
      <div href="#" class="layout-logo-left"></div>
      <t-menu theme="dark" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
        <t-submenu name="1">
          <template slot="title">
            <i class="iconfont">&#xe784;</i>
            <span>客户360视图</span>
          </template>
          <t-submenu name="1-1">
            <template slot="title">
              <span>基本视图</span>
            </template>
            <t-menu-item name="1-1-1">客户基本信息</t-menu-item>
            <t-menu-item name="1-1-2">联系信息</t-menu-item>
            <t-menu-item name="1-1-3">社交网络信息</t-menu-item>
          </t-submenu>          
          <t-submenu name="1-2">
            <template slot="title">
              <span>关系视图</span>
            </template>
            <t-menu-item name="1-2-1">咨询&投诉记录</t-menu-item>
            <t-menu-item name="1-2-2">客户服务活动记录</t-menu-item>
            <t-menu-item name="1-2-3">地址信息</t-menu-item>
            <t-menu-item name="1-2-4">获客来源</t-menu-item>
          </t-submenu>
          <t-submenu name="1-3">
            <template slot="title">
              <span>业务视图</span>
            </template>
            <t-menu-item name="1-3-1">业务概览</t-menu-item>
            <t-menu-item name="1-3-2">被保人信息</t-menu-item>
            <t-menu-item name="1-3-3">续保信息</t-menu-item>
          </t-submenu>
          <t-submenu name="1-4">
            <template slot="title">
              <span>洞察信息</span>
            </template>
            <t-menu-item name="1-4-1">业务概览</t-menu-item>
            <t-menu-item name="1-4-2">被保人信息</t-menu-item>
            <t-menu-item name="1-4-3">续保信息</t-menu-item>
          </t-submenu>
          <t-submenu name="1-5">
            <template slot="title">
              <span>价值视图</span>
            </template>
            <t-menu-item name="1-5-1">业务概览</t-menu-item>
            <t-menu-item name="1-5-2">被保人信息</t-menu-item>
            <t-menu-item name="1-5-3">续保信息</t-menu-item>
          </t-submenu>
          <t-submenu name="1-6">
            <template slot="title">
              <span>风险视图</span>
            </template>
            <t-menu-item name="1-6-1">业务概览</t-menu-item>
            <t-menu-item name="1-6-2">被保人信息</t-menu-item>
            <t-menu-item name="1-6-3">续保信息</t-menu-item>
          </t-submenu> 
          <t-submenu name="1-7">
            <template slot="title">
              <span>行为视图</span>
            </template>
            <t-menu-item name="1-7-1">业务概览</t-menu-item>
            <t-menu-item name="1-7-2">被保人信息</t-menu-item>
            <t-menu-item name="1-7-3">续保信息</t-menu-item>
          </t-submenu>
        </t-submenu>
        <t-submenu name="2">
          <template slot="title">
            <i class="iconfont">&#xe783;</i>
            <span>客户管理</span>
          </template>
          <t-menu-item name="2-1">客户主数据管理</t-menu-item>
          <t-menu-item name="2-2">客户分级</t-menu-item>
          <t-menu-item name="2-3">资源共享</t-menu-item>
        </t-submenu>
        <t-submenu name="3">
          <template slot="title">
            <i class="iconfont">&#xe785;</i>
            <span>销售管理</span>
          </template>
          <t-menu-item name="3-1">商机管理</t-menu-item>
          <t-menu-item name="3-2">大客户销售</t-menu-item>
          <t-menu-item name="3-3">交叉销售管理</t-menu-item>
          <t-menu-item name="3-4">活动/日程/任务跟踪</t-menu-item>
          <t-menu-item name="3-5">销售团队管理</t-menu-item>
          <t-menu-item name="3-6">合同管理</t-menu-item>
          <t-menu-item name="3-7">业务协同</t-menu-item>
        </t-submenu>
        <t-submenu name="4">
          <template slot="title">
            <i class="iconfont">&#xe787;</i>
            <span>服务管理</span>
          </template>
          <t-menu-item name="4-1">客户咨询、投诉、理赔</t-menu-item>
          <t-menu-item name="4-2">客户回访</t-menu-item>
          <t-menu-item name="4-3">客户关怀</t-menu-item>
          <t-menu-item name="4-4">创新服务</t-menu-item>
        </t-submenu>
        <t-submenu name="5">
          <template slot="title">
            <i class="iconfont">&#xe786;</i>
            <span>客户洞察</span>
          </template>
          <t-menu-item name="5-1">客户价值</t-menu-item>
          <t-menu-item name="5-2">客户分类</t-menu-item>
          <t-menu-item name="5-3">客户分析报表</t-menu-item>
        </t-submenu>
        <t-submenu name="6">
          <template slot="title">
            <i class="iconfont">&#xe788;</i>
            <span>知识库管理</span>
          </template>
          <t-menu-item name="6-1">知识录入</t-menu-item>
          <t-menu-item name="6-2">知识应用</t-menu-item>
          <t-menu-item name="6-3">知识优化</t-menu-item>
        </t-submenu>
        <t-submenu name="7">
          <template slot="title">
            <i class="iconfont">&#xe789;</i>
            <span>营销管理</span>
          </template>
            <t-menu-item name="7-1">营销计划管理</t-menu-item>
            <t-menu-item name="7-2">营销活动管理</t-menu-item>
            <t-menu-item name="7-3">线索管理</t-menu-item>
            <t-menu-item name="7-4">营销活动效果评估</t-menu-item>
        </t-submenu>
        <t-submenu name="8">
          <template slot="title">
            <i class="iconfont">&#xe78a;</i>
            <span>渠道管理</span>
          </template>
          <t-menu-item name="8-1">渠道整合</t-menu-item>
          <t-menu-item name="8-2">渠道协同</t-menu-item>
          <t-menu-item name="8-3">渠道持续优化</t-menu-item>
        </t-submenu>
      </t-menu>
    </div>
    <div class="layout-content">
      <nav class="navbar  navbar-expand-lg bg-white layout-nav--top">
        <a href="javascript:;" class="mr-auto"><i class="aid aid-menu text-xxl text-gray" @click="openOrClose"></i></a>
        <form class="form-inline">
          <t-input icon="magnify" size="sm" placeholder="搜索..."></t-input>
        </form>
        <a class="nav-link" href="#">
          <i class="aid aid-help-circle-outline"></i>
          <span>帮助</span>
        </a>
        <t-dropdown trigger="click">
          <t-badge>
            <t-avatar dot-state="danger" text="HC" size="sm"></t-avatar>
          </t-badge>
          <t-dropdown-menu slot="list">
            <t-dropdown-item>Action</t-dropdown-item>
            <t-dropdown-item>Another action</t-dropdown-item>
            <t-dropdown-item>Something else here</t-dropdown-item>
          </t-dropdown-menu>
        </t-dropdown>
      </nav>
      <t-breadcrumb>
        <t-breadcrumb-item href="#">首页</t-breadcrumb-item>
        <t-breadcrumb-item href="#">二级</t-breadcrumb-item>
        <t-breadcrumb-item href="#">三级</t-breadcrumb-item>
        <t-breadcrumb-item>当前页</t-breadcrumb-item>
      </t-breadcrumb>
      <div class="layout-main">内容区域</div>
      <footer class="p-3 text-center text-gray-light text-sm">
        2011-2016 © AI design
      </footer>
    </div>
  </div>
</template>
<script>
  export default {
    data () {  // store data
      return {
        isOpen: true,
        accordion: true,
        openPosition: 'down'
      }
    },
    props: { // props data
    },
    computed: {
    },
    methods: { // methods
      openOrClose () {
        this.isOpen = !this.isOpen
        this.accordion = !this.accordion
        this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
      }
    },
    created () { // init entry
    }
  }
</script>
