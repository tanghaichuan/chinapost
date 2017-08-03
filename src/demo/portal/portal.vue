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
            <t-icon type="home"></t-icon>
            <span>内容管理</span>
          </template>
          <t-menu-item name="1-1">文章管理</t-menu-item>
          <t-menu-item name="1-2">评论管理</t-menu-item>
          <t-menu-item name="1-3">举报管理</t-menu-item>
        </t-submenu>
        <t-submenu name="2">
          <template slot="title">
            <t-icon type="account-multiple"></t-icon>
            <span>用户管理</span>
          </template>
          <t-menu-item name="2-1">新增用户</t-menu-item>
          <t-menu-item name="2-2">活跃用户</t-menu-item>
        </t-submenu>
        <t-submenu name="3">
          <template slot="title">
            <t-icon type="chart-bar"></t-icon>
            <span>统计分析</span>
          </template>
          <t-menu-group title="使用">
            <t-menu-item name="3-1">新增和启动</t-menu-item>
            <t-menu-item name="3-2">活跃分析</t-menu-item>
            <t-menu-item name="3-3">时段分析</t-menu-item>
          </t-menu-group>
          <t-menu-group title="留存">
            <t-menu-item name="3-4">用户留存</t-menu-item>
            <t-menu-item name="3-5">流失用户</t-menu-item>
          </t-menu-group>
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
