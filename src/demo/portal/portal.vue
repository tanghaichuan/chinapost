<style lang="scss">
@import "../osp/osp.scss";

</style>
<template>
  <div class="layout layout--one-screen bg-gray-lightest-5">
    <div :class="['layout-sidebar bg-gray-darker',{'layout-sidebar--folded': isOpen===false}]">
      <div href="#" class="layout-logo-left">
        <!-- logo  -->
      <t-tooltip content="主页" placement="bottom">
        <a href="/" class="layout-logo mr-4">
            <img src="../../asset/image/logo.png" width="130" alt="">
          </a>
      </t-tooltip>
      </div>
      <t-menu theme="dark" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
        <t-submenu 
        :name="x" 
        v-for="(item1, x) in menuList" 
        :key="x">
          <template slot="title">
            <i class="iconfont" v-html="item1.icon"></i>
            <span>{{item1.name}}</span>
          </template>
          <t-submenu 
          v-if="item2.children"
          :name="`${x}-${y}`" 
          v-for="(item2, y) in item1.children"
          :key="y">
            <template slot="title">
              <span>{{item2.name}}</span>
            </template>
            <t-menu-item 
            :name="`${x}-${y}-${z}`" 
            v-for="(item3, z) in item2.children"
            :key="z">{{item3.name}}</t-menu-item>
          </t-submenu>
          <t-menu-item 
          :name="`${x}-${y}`" 
          v-if="!item2.children"
          v-for="(item2, y) in item1.children"
          :key="y">
          {{item2.name}}
          </t-menu-item>
        </t-submenu>
      </t-menu>
    </div>
    <div class="layout-content">
      <nav class="navbar  navbar-expand-lg bg-white layout-nav--top">
        <a href="javascript:;" class="mr-auto">
          <i class="aid aid-menu text-xxl text-gray" @click="openOrClose"></i>
        </a>
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
  data() {  // store data
    return {
      isOpen: true,
      accordion: true,
      openPosition: 'down',
      menuList: []
    }
  },
  props: { // props data
  },
  computed: {
  },
  methods: { // methods
    openOrClose() {
      this.isOpen = !this.isOpen
      this.accordion = !this.accordion
      this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
    }
  },
  created() { // init entry
    this.$domains.cnpost.get(this.$services.SYSTEM_MENU).then((res) => {
      this.menuList = res.data.list;
    });
  }
}
</script>
