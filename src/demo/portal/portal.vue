<style scoped lang="scss">
.main {
  height: 100%;
  overflow: auto;
  padding: 24px;
  background: #f4f8f9;
}

//左侧菜单
.menu--vertical .menu__submenu .menu__submenu-title {
  &:hover {
    background: #fff;
    color: #009448;
  }
  .menu__submenu-title-icon {
    &:hover {
      color: #009448;
    }
  }
}

.menu--vertical .menu__submenu i.iconfont {
  font-size: 18px;
}

.menu--vertical .menu__submenu .menu .menu__submenu-title {
  padding-left: 57px;
}

.menu--vertical .menu li.menu__item {
  padding-left: 54px;
}

.menu--vertical .menu__submenu .menu .menu__submenu .menu__item {
  padding-left: 16px;
}

.menu--vertical .menu__submenu .menu .menu__item {
  border-left: 3px solid #fff;
  &:hover {
    color: #009448;
    background: #fff;
  }
  &.menu__item--checked {
    background: #eefff4;
    border-left: 3px solid #009549;
    border-right: 0;
    &:hover {
      background: #eefff4;
    }
  }
}

.layout-main {
  background: #f4f8f9;
}

.breadcrumb {
  background: #f4f8f9;
}

.menu--folded .sec .menu__submenu-title>span {
  padding-left: 0px;
  display: block;
}
.sec .menu__submenu-title>span {
  padding-left: 40px;
  display: block;
}
</style>
<template>
  <div class="layout layout--one-screen bg-gray-lightest-5">
    <div :class="['layout-sidebar bg-gray-darker',{'layout-sidebar--folded': isOpen===false}]">
      <div href="#" class="layout-logo-left">
        <!-- logo  -->
        <t-tooltip content="主页" placement="bottom">
          <a href="/portal" class="layout-logo mr-4">
            <img src="../../asset/image/logo.png" width="130" alt="" v-if="isOpen">
            <img src="../../asset/image/logo2.png" width="130" alt="" v-if="!isOpen" style="width: 32px; position:relative;left:-3px;">
          </a>
        </t-tooltip>
      </div>
      <t-menu theme="dark" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
        <!-- <t-submenu :name="x" v-for="(item1, x) in menuList" :key="x">
            <template slot="title">
              <i class="iconfont" v-html="item1.icon"></i>
              <span>{{item1.name}}</span>
            </template>
            <t-menu-item :name="`${x}-${y}`" v-for="(item2, y) in item1.children" :key="y" @click.native="getMenu">
              {{item2.name}}
            </t-menu-item>
          </t-submenu> -->
        <t-submenu :name="x" v-for="(item1, x) in menuList" :key="x" class="first">
          <template slot="title">
            <i class="iconfont" v-html="item1.icon"></i>
            <span ref="parMenu">{{item1.name}}</span>
          </template>
          <t-submenu v-if="item2.children" :name="`${x}-${y}`" v-for="(item2, y) in item1.children" :key="y" class="sec">
            <template slot="title">
              <span>{{item2.name}}</span>
            </template>
            <t-menu-item :name="`${x}-${y}-${z}`" v-for="(item3, z) in item2.children" :key="z" @click.native="getMenu(item3)">{{item3.name}}</t-menu-item>
          </t-submenu>
          <t-menu-item :name="`${x}-${y}`" v-if="!item2.children" v-for="(item2, y) in item1.children" :key="y" @click.native="getMenu(item2)">
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

      <t-breadcrumb v-if="currentMenu">
        <t-breadcrumb-item href="/portal" @click.native="emptyMenu">首页</t-breadcrumb-item>
        <t-breadcrumb-item href="#">{{$route.name === 'wrapper' ? currentMenu='' : $route.name}}</t-breadcrumb-item>
        <t-breadcrumb-item>{{currentMenu}}</t-breadcrumb-item>
      </t-breadcrumb>

      <div class="main">
        <router-view></router-view>
        <!-- <img src="../../asset/image/view.png" alt="" width="100%;height:100%;" /> -->
      </div>
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
      menuList: [],
      currentMenu: "",
      parMenu: ""
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
    },
    getMenu(item) {
      this.$router.push({ path: `/portal${item.url}` });
      this.currentMenu = item.name;
      //this.parMenu = e.target.parentNode.parentNode.querySelector("span").innerHTML
    },
    emptyMenu() {
      this.currentMenu = ""
      this.parMenu = ""
    }
  },
  created() { // init entry
    this.$domains.cnpost.get(this.$services.SYSTEM_MENU).then((res) => {
      this.menuList = res.data.list;
    })
  },
  mounted() {

  }
}
</script>
