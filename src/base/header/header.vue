<style lang="less">
.header {
    border-bottom: 1px solid #d9d9d9;
    box-shadow: 0 0 8px rgba(0, 0, 0,.14);
    .mymenu {
        height: 50px;
        // padding: 10px 0;
        line-height: 50px;
    }
    .menu-icon {
        background: #f5f5f5;
        display: inline-block;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #333;
    }

    .d-inline {
        width: 390px;
        .form-control {
            background: #f5f5f5;
        }
        .btn-secondary,
        .form-input .form-control {
            border-radius: 0!important;
        }
    }
    .input-group {
        .aid-magnify,
        .aid-menu {
            color: #333;
        }
    }
}
.navbar {
    background: #fff;
}
</style>
<template>
<div class="header">
  <nav class="navbar  navbar-expand-lg">
    <t-tooltip content="主页" placement="bottom">
      <a href="/" class="layout-logo mr-4">
        <img src="../../asset/image/aid-icon-alone.png" alt="">
        <span class="text-xxl align-middle ml-1">Veris</span>
      </a>
    </t-tooltip>

    <t-dropdown class="mymenu">
      <t-tooltip content="系统菜单" placement="bottom">
        <a href="javascript:;" class="menu-icon">
          <t-icon type="apps" size="26"></t-icon>
        </a>
      </t-tooltip>
      <t-tooltip content="历史记录" placement="bottom">
        <a href="javascript:;" class="menu-icon ml-2">
          <t-icon type="backup-restore" size="26"></t-icon>
        </a>
      </t-tooltip>
    </t-dropdown>

    <div class="d-inline ml-3">
      <t-input icon="magnify" size="lg" placeholder="搜索...">
        <t-button slot="appendbtn" :class="['pl-3','pr-3']"><i class="aid aid-menu"></i></t-button>
      </t-input>
    </div>
    <t-tooltip content="便签 & 待办事项" placement="bottom" class=" ml-auto">
      <a href="javascript:;" class="menu-icon">
        <t-icon type="calendar-plus" size="26"></t-icon>
      </a>
    </t-tooltip>
    <t-tooltip content="公告" placement="bottom">
      <a href="javascript:;" class="menu-icon ml-2">
        <t-icon type="bullhorn" size="26"></t-icon>
      </a>
    </t-tooltip>
    <t-tooltip content="消息" placement="bottom">
      <a href="javascript:;" class="menu-icon ml-2">
        <t-icon type="bell-outline" size="26"></t-icon>
      </a>
    </t-tooltip>

    <t-dropdown trigger="click" placement="bottom-end">
      <t-badge class="ml-4">
        <t-avatar dot-state="danger" text="HC" size="sm"></t-avatar>
        <t-icon type="arrow-down-drop" size="20"></t-icon>
      </t-badge>
      <t-dropdown-menu slot="list">
        <t-dropdown-item>个人中心</t-dropdown-item>
        <t-dropdown-item>账号设置</t-dropdown-item>
        <t-dropdown-item>意见反馈</t-dropdown-item>
        <t-dropdown-item>退出</t-dropdown-item>
      </t-dropdown-menu>
    </t-dropdown>

    <t-dropdown trigger="click" placement="bottom-end" class="mr-2">
      <t-badge count="3" state='warning' class="ml-4">
        <a href="javascript:;" class="text-muted">
          <t-icon type="bell" size="20"></t-icon>
        </a>
      </t-badge>
    </t-dropdown>
  </nav>
  <!-- <div class="layout-menu-assistant">
    <t-menu mode="horizontal" active-name="1">
      <t-menu-item name="1">二级导航</t-menu-item>
      <t-menu-item name="2">二级导航</t-menu-item>
      <t-menu-item name="3">二级导航</t-menu-item>
    </t-menu>
  </div> -->
  <!-- <div class="container">
    <t-breadcrumb>
      <t-breadcrumb-item href="#">首页</t-breadcrumb-item>
      <t-breadcrumb-item href="#">二级</t-breadcrumb-item>
      <t-breadcrumb-item href="#">三级</t-breadcrumb-item>
      <t-breadcrumb-item>当前页</t-breadcrumb-item>
    </t-breadcrumb>
    <div class="bg-white p-3" style="min-height: 200px">
      内容区域
    </div>
    <div class="p-3 text-center text-gray-light text-sm">
      2011-2016 © AI design
    </div>
  </div> -->
</div>
</template>
<script>
export default {
  data() { // store data
  },
  props: { // props data
  },
  computed: {},
  methods: { // methods
  },
  created() { // init entry
  }
}
</script>
