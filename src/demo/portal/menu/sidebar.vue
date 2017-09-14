<template>
<div class="wrap-green-layout">
  <div class="layout bg-gray-lightest-5">
    <div class="row no-gutters">
      <div :class="['layout-sidebar bg-gray-darker col-auto',{'layout-sidebar--folded': isOpen===false}]">
        <a href="#" class="layout-logo-left">
          <img src="../../../asset/image/zy-logo.png" alt="" class="logo-img">
          <span class="logo-text"><img src="../../../asset/image/post-logo.png"></span>
        </a>
        <t-menu type="dark" :open-names="['1']" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
          <t-submenu :name="x" v-for="(item1, x) in menuList" :key="x" :class="{'sub-first':item1.icon ==='&#xe784;'}">
            <template slot="title">
              <i class="iconfont" v-html="item1.icon"></i>
              <span class="sub-text">{{item1.name}}</span>
              <p class="sub-fold-text"><span>{{item1.name}}</span></p>
            </template>
            <t-submenu v-if="item2.children" :name="`${x}-${y}`" v-for="(item2, y) in item1.children" :key="y" class="second-submenu">
              <template slot="title">
                  <span class="sub-text">{{item2.name}}</span>
                </template>
              <t-menu-item :name="`${x}-${y}-${z}`" v-for="(item3, z) in item2.children" :key="z" @click.native="getMenu(item3)" class="sec-item">{{item3.name}}</t-menu-item>
            </t-submenu>
            <t-menu-item :name="`${x}-${y}`" v-if="!item2.children" v-for="(item2, y) in item1.children" :key="y" @click.native="getMenu(item2)">
              {{item2.name}}
            </t-menu-item>
          </t-submenu>
        </t-menu>
      </div>
      <div class="col layout-content">
        <navBar :isOpen.sync="isOpen" :openPosition.sync="openPosition"></navBar>
        <t-breadcrumb v-if="currentMenu">
          <t-breadcrumb-item href="#">首页</t-breadcrumb-item>
          <t-breadcrumb-item href="#">{{$route.name}}</t-breadcrumb-item>
          <t-breadcrumb-item>{{currentMenu}}</t-breadcrumb-item>
        </t-breadcrumb>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import navBar from './navbar.vue'
export default {
  components:{
    navBar
  },
  data() { // store data
    return {
      isOpen: true,
      openPosition: 'down',
      menuList: [],
      currentMenu: "",
      parMenu: ""
    }
  },
  props: { // props data
  },
  computed: {},
  methods: { // methods
    getMenu({
      url,
      name
    }) {
      console.log(this.$route);
      this.$router.push({
        path: url
      });
      this.currentMenu = name;
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
  }
}
</script>
<style lang="less" scoped>
.wrap-green-layout {
    .layout{
      background:#f2f6f7!important;
    }
    .navbar.bg-white {
        background-color: #3ca358!important;
    }
    .layout-main{
      background:#f2f6f7!important;
    }
    .layout-logo-left {
        background: #007f3b;
        .logo-text {
            padding-left: 10px;
            img {
                width: 80px;
            }
        }
        .logo-img {
            width: 38px;
        }
    }
    .layout-sidebar--folded {
        .layout-logo-left {
            padding: 12.5px 26px;
            width: 98px;
            overflow: hidden;
            .logo-text {
                display: none;
            }
        }
    }
    .menu {
        .menu__submenu-title {
            i {
                font-size: 16px;
                &.iconfont{
                  font-size: 20px;
                }
            }
        }
        .menu__submenu-title-icon {
            right: 16px;
            top: 55%;
        }
    }
    .sub-first {
        margin-top: 25px;
    }
    .bg-gray-darker {
        background-color: #3a4556 !important;
    }
    .menu--dark {
        .menu__submenu {
            background-color: #3a4556;
        }
        .menu--open {
            background-color: #2b3341;
            z-index: 10001;
        }
    }
    .menu--dark {
        .menu__submenu-title {
            &:hover {
                background-color: #2b3341;
            }
        }
    }
    .menu--vertical {
        .menu__item {
            border-right: 4px solid transparent;
        }
    }
    .menu--dark {
        .menu__item--checked {
            border-right-color: #45b331;
        }
    }
    .menu--vertical.menu--folded {
        .menu__submenu-title {
            min-width: 98px;
            padding: 0;
            border-left: 4px solid transparent;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            height: auto;
            i {
                padding-left: 30px;
            }
        }
    }
    .menu--vertical {
        .menu__submenu.dropright {
            min-width: 98px;
            height: auto;
        }
        .second-submenu.dropright{
          padding-right:20px;
          min-width:98px;
          width:auto;
        }
        .menu__submenu {
            .menu__item {
                padding-left: 60px;
            }
        }
    }
    .menu--folded {
        .menu__submenu {
            .menu__item {
                padding-left: 20px;
            }
        }
    }
    .menu--folded {
        .menu__submenu-title {
            &:hover {
                border-left-color: #45b331;
                border-top-color: #505e74;
                border-bottom-color: #505e74;
                z-index: 10001;
                i {
                    color: #45b331;
                }
                .sub-fold-text {
                    color: #45b331;
                }
                .sub-fold-text {
                    span {
                        border-bottom: 1px solid transparent;
                    }
                }

            }
        }
        .menu--open {
            .menu__submenu-title {
                border-left-color: #45b331;
                border-top-color: #505e74;
                border-bottom-color: #505e74;
                z-index: 10001;
                i {
                    color: #45b331;
                }
                .sub-fold-text {
                    color: #45b331;
                }
                .sub-fold-text {
                    span {
                        border-bottom: 1px solid transparent;
                    }
                }
            }
        }
    }
    .sub-fold-text {
        padding-top: 3px;
        display: none;
        margin: 0;
        line-height: 22px;
        text-align: center;
        text-indent: -10px;
        position: relative;
        top: -15px;
        z-index: 1000;
        span {
            padding-bottom: 18px;
            border-bottom: 1px solid #505e74;
        }
    }
    .menu--folded {
        .menu__submenu-title {
            .sub-fold-text {
                display: block;
            }
        }
        .menu--open.dropdown--open {
            ul.dropdown__menu {
                background-image: none;
                background: #3a4556;
                .menu__item {
                    &:hover {
                        background-color: #2b3341;
                        color: #fff;
                    }
                }
            }
        }
    }
    .menuthre-list {
        .menu__submenu {
            background-color: #2b3341;
        }
    }
    .menu {
        .menu__submenu {
            .menu__submenu-title {
                .iconfont {
                    vertical-align: top;
                }
            }
        }
    }
    .iconfont-fold {
        font-size: 15px;
        color: #fff;
    }
    .admin-img {
        width: 35px;
        background-color: transparent;
        cursor: pointer;
        .avatar__dot {
            display: none;
        }
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
        padding:14px 0 14px 20px;
        line-height:25px;
        background: #f6f8f8!important;
        border-bottom:1px solid #dfe5e7;
    }
    .second-submenu {
        .menu__submenu-title {
            padding-left: 60px;
        }
        .menu {
            .sec-item {
                text-indent: 15px;
            }
        }
    }
    .menu--folded {
        .menu--open.dropdown--open {
            .second-submenu {
                .menu__submenu-title {
                    border: none;
                }
                .sub-text {
                    padding-left: 20px;
                    display: block;
                    line-height: 40px;
                }
                .dropdown__menu {
                    width: auto;
                }
                .dropdown__menu {
                    .sec-item {
                        // display: none;
                    }
                }
            }
        }
    }
}
</style>
