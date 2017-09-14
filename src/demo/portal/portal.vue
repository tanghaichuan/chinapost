<template>
  <div class="layout layout--one-screen bg-gray-lightest-5">
    <!--侧边菜单栏-->
    <white-side-bar :isOpen="isOpen" @changeCurrentMenu="changeBreadCrumb" :menuList="menuList" :openPosition="openPosition"></white-side-bar>
    <div class="layout-content">
      <white-nav-bar :isOpen="isOpen" @toggleSideBar="toggleSide" :openPosition="openPosition"></white-nav-bar>
      <div>
        <t-breadcrumb v-show="currentMenu">
          <t-breadcrumb-item href="/portal" @click.native="emptyMenu">首页</t-breadcrumb-item>
          <t-breadcrumb-item href="#">{{$route.name === 'wrapper' ? currentMenu='' : $route.name}}</t-breadcrumb-item>
          <t-breadcrumb-item>{{currentMenu}}</t-breadcrumb-item>
        </t-breadcrumb>
      </div>

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
import whiteSideBar from './menu/whitesidebar'
import whiteNavBar from './menu/whiteNavBar'
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
  components: {
    whiteSideBar,
    whiteNavBar
  },
  methods: { // methods
    emptyMenu() {
      this.currentMenu = ""
      this.parMenu = ""
    },
    changeBreadCrumb(item) {
      this.currentMenu = item;
    },
    toggleSide(isOpen, pos) {
      this.isOpen = !this.isOpen
      // this.accordion = !this.accordion
      this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
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
<style scoped lang="scss">
.layout--one-screen .layout-content footer {
  position: relative;
  background: #f2f6f7;
}

.main {
  position: relative;
  padding: 24px;
  padding-top: 0;
  background: #f2f6f7;
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
  padding-left: 77px;
}

.menu--folded .menu__submenu .menu .menu__submenu .menu__item {
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
  line-height: 25px;
  background: #f6f8f8;
  border-radius: 0;
  border-bottom: 1px solid #dfe5e7;
  padding: 14px 0 14px 15px;
  font-size: 14px;
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