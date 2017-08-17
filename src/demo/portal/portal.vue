<style lang="scss">
  @import "../osp/osp.scss";
</style>
<template>
  <div class="layout layout--one-screen bg-gray-lightest-5">
    <div :class="['layout-sidebar bg-gray-darker',{'layout-sidebar--folded': isOpen===false}]">
      <div href="#" class="layout-logo-left"></div>
      <t-menu theme="dark" :accordion="accordion" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
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
            <t-menu-item name="1-2-3">获客来源</t-menu-item>
          </t-submenu>
        </t-submenu>
        <t-submenu name="2">
          <template slot="title">
            <i class="iconfont">&#xe783;</i>
            <span>客户管理</span>
          </template>
          <t-menu-item name="2-1">新增用户</t-menu-item>
          <t-menu-item name="2-2">活跃用户</t-menu-item>
        </t-submenu>
        <t-submenu name="3">
          <template slot="title">
            <i class="iconfont">&#xe785;</i>
            <span>销售管理</span>
          </template>
          <t-menu-item name="2-1">新增用户</t-menu-item>
          <t-menu-item name="2-2">活跃用户</t-menu-item>
        </t-submenu>
        <t-submenu name="4">
          <template slot="title">
            <i class="iconfont">&#xe787;</i>
            <span>服务管理</span>
          </template>
          <t-menu-item name="2-1">新增用户</t-menu-item>
          <t-menu-item name="2-2">活跃用户</t-menu-item>
        </t-submenu>
        <t-submenu name="5">
          <template slot="title">
            <i class="iconfont">&#xe786;</i>
            <span>客户洞察</span>
          </template>
          <t-menu-item name="2-1">新增用户</t-menu-item>
          <t-menu-item name="2-2">活跃用户</t-menu-item>
        </t-submenu>
        <t-submenu name="6">
          <template slot="title">
            <i class="iconfont">&#xe788;</i>
            <span>知识库管理</span>
          </template>
          <t-menu-item name="2-1">新增用户</t-menu-item>
          <t-menu-item name="2-2">活跃用户</t-menu-item>
        </t-submenu>
        <t-submenu name="7">
          <template slot="title">
            <i class="iconfont">&#xe789;</i>
            <span>营销管理</span>
          </template>
          <t-menu-item name="2-1">新增用户</t-menu-item>
          <t-menu-item name="2-2">活跃用户</t-menu-item>
        </t-submenu>
        <t-submenu name="8">
          <template slot="title">
            <i class="iconfont">&#xe78a;</i>
            <span>渠道管理</span>
          </template>
          <t-menu-item name="2-1">新增用户</t-menu-item>
          <t-menu-item name="2-2">活跃用户</t-menu-item>
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
