<template>
  <div class="wrap-green-layout">
    <div class="layout bg-gray-lightest-5">
      <div class="row no-gutters">
        <side-bar :isOpen="isOpen" :openPosition="openPosition" :menuList="menuList" @changeCurrentMenu="changeBreadCrumb"></side-bar>
        <div class="col layout-content">
          <nav-bar :isOpen="isOpen" :openPosition="openPosition" @toggleSideBar="toggleSide"></nav-bar>

          <t-breadcrumb v-if="$route.name === '查询列表'">
            <t-breadcrumb-item href="#">首页</t-breadcrumb-item>
            <t-breadcrumb-item href="#">{{$route.name}}</t-breadcrumb-item>
            <t-breadcrumb-item>{{$route.meta}}</t-breadcrumb-item>
          </t-breadcrumb>

          <div class="bg-white p-3 ml-3 mr-3 layout-main" style="min-height: 580px">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from './sidebar.vue'
import navBar from './navbar.vue'
export default {
  components: {
    sideBar,
    navBar
  },
  data() {
    return {
      isOpen: true,
      openPosition: 'down',
      menuList: [],
      currentMenu: "",
      parMenu: ""
    }
  },
  methods: { // methods
    emptyMenu() {
      this.currentMenu = ""
      this.parMenu = ""
    },
    changeBreadCrumb(item) {
      this.currentMenu = item;
    },
    toggleSide() {
      this.isOpen = !this.isOpen
      this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
    }
  },
  created() { // init entry
    //console.log(this.$route);
    this.$domains.cnpost.get(this.$services.SYSTEM_MENU).then((res) => {
      this.menuList = res.data.list;
    })
  }
}	
</script>
<style lang="less" scoped>
.layout {
  background: #f2f6f7!important;
}

.layout-main {
  background: #f2f6f7!important;
}

.bg-gray-darker {
  background-color: #3a4556 !important;
}

.ml-3 {
  margin-left: 30px !important;
}

.mr-3 {
  margin-right: 30px !important;
}

.p-3 {
  padding: 20px 30px !important;
}

.breadcrumb {
  padding: 14px 0 14px 20px;
  line-height: 25px;
  background: #f6f8f8!important;
  border-bottom: 1px solid #dfe5e7;
}
</style>