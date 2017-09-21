<template>
  <div class="wrap-green-layout">
    <div class="layout bg-gray-lightest-5">
      <div class="row no-gutters">
        <div :class="['layout-sidebar bg-gray-darker col-auto',{'layout-sidebar--folded': isOpen===false}]">
          <a href="#" class="layout-logo-left">
            <img src="../../asset/image/zy-logo.png" alt="" class="logo-img">
            <span class="logo-text"><img src="../../asset/image/post-logo.png"></span>
          </a>
          <t-menu type="dark" :open-names="['1']" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
            <t-submenu :name="x" v-for="(item1, x) in menuList" :key="x" :class="{'sub-first':item1.first}">
              <template slot="title">
                <i class="iconfont" v-html="item1.icon"></i>
                <span class="sub-text">{{item1.name}}</span>
                <p class="sub-fold-text">
                  <span>{{item1.name}}</span>
                </p>
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
          <nav class="navbar  navbar-expand-lg bg-white layout-nav--top">
            <a href="javascript:;" class="mr-auto">
              <i class="iconfont iconfont-fold" @click="openOrClose">&#xe609;</i>
            </a>
            <div class="d-inline">
              <t-input icon="magnify" size="sm" placeholder="搜索..."></t-input>
            </div>

            <t-dropdown trigger="click" placement="bottom-end">
              <a href="javascript:void(0)" class="text-muted ml-4">
                <t-icon type="help-circle-outline" size="20" class="text-white"></t-icon>
              </a>
              <t-dropdown-menu slot="list">
                <t-dropdown-item>联络我们</t-dropdown-item>
                <t-dropdown-item>帮助中心</t-dropdown-item>
                <t-dropdown-item>更新日志</t-dropdown-item>
                <t-dropdown-item>新手引导</t-dropdown-item>
              </t-dropdown-menu>
            </t-dropdown>

            <t-dropdown trigger="click" placement="bottom-end">
              <t-badge class="ml-4">
                <t-avatar :img-src="adminImg" class="admin-img"></t-avatar>
                <t-icon type="arrow-down-drop" size="20" class="text-white"></t-icon>
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
                <a href="javascript:void(0)" class="text-muted">
                  <t-icon type="bell" size="20" class="text-white"></t-icon>
                </a>
              </t-badge>
              <t-dropdown-menu slot="list">
                <t-dropdown-item>
                  <div class="d-flex align-items-center">
                    <t-avatar img-src="http://flatfull.com/themes/angulr/angular/img/a0.jpg"></t-avatar>
                    <div class="ml-3">
                      <p class="text-gray mb-0 text-truncate">我是标题文字标题</p>
                      <small class="text-muted text-sm text-truncate">2017年7月16日 09:15</small>
                    </div>
                  </div>
                </t-dropdown-item>
                <t-dropdown-item>
                  <div class="d-flex align-items-center">
                    <t-avatar img-src="http://flatfull.com/themes/angulr/angular/img/a0.jpg"></t-avatar>
                    <div class="ml-3">
                      <p class="text-gray mb-0 text-truncate">我是标题文字标题</p>
                      <small class="text-muted text-sm text-truncate">2017年7月16日 09:15</small>
                    </div>
                  </div>
                </t-dropdown-item>
                <t-dropdown-item>
                  <div class="d-flex align-items-center">
                    <t-avatar img-src="http://flatfull.com/themes/angulr/angular/img/a0.jpg"></t-avatar>
                    <div class="ml-3">
                      <p class="text-gray mb-0 text-truncate">我是标题文字标题</p>
                      <small class="text-muted text-sm text-truncate">2017年7月16日 09:15</small>
                    </div>
                  </div>
                </t-dropdown-item>
                <t-dropdown-item>
                  <div class="d-flex align-items-center">
                    <t-avatar img-src="http://flatfull.com/themes/angulr/angular/img/a0.jpg"></t-avatar>
                    <div class="ml-3">
                      <p class="text-gray mb-0 text-truncate">我是标题文字标题</p>
                      <small class="text-muted text-sm text-truncate">2017年7月16日 09:15</small>
                    </div>
                  </div>
                </t-dropdown-item>
              </t-dropdown-menu>
            </t-dropdown>

          </nav>

          <t-breadcrumb v-if="$route.name != '查询列表'">
            <t-breadcrumb-item href="#">首页</t-breadcrumb-item>
            <t-breadcrumb-item href="#">{{$route.name}}</t-breadcrumb-item>
            <t-breadcrumb-item>{{$route.meta}}</t-breadcrumb-item>
          </t-breadcrumb>
          <div class="bg-white layout-main" style="min-height: 600px">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
          <!-- <footer class="p-3 text-center text-gray-light text-sm">
            2017 © 中国邮政
          </footer> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() { // store data
    return {
      isOpen: true,
      openPosition: 'down',
      adminImg: require('../../asset/image/admin.png'),
      menuList: [
        {
          name: "客户360视图",
          icon: "&#xe784;",
          first: true,
          children: [{
            name: "基本视图",
            children: [{
              name: "客户基本信息",
              url: ""
            }, {
              name: "联系信息",
              url: ""
            }, {
              name: "社交网络信息",
              url: ""
            }]
          }, {
            name: "关系视图",
            children: [{
              name: "咨询&投诉记录",
              url: ""
            }, {
              name: "客户服务活动记录",
              url: ""
            }, {
              name: "地址信息",
              url: ""
            }, {
              name: "获客来源",
              url: ""
            }]
          }, {
            name: "业务视图",
            children: [{
              name: "业务概览",
              url: ""
            }, {
              name: "被保人信息",
              url: ""
            }, {
              name: "续保信息",
              url: ""
            }]
          }, {
            name: "客户洞察",
            children: [{
              name: "业务概览",
              url: ""
            }, {
              name: "被保人信息",
              url: ""
            }, {
              name: "续保信息",
              url: ""
            }]
          }, {
            name: "价值视图",
            children: [{
              name: "业务概览",
              url: ""
            }, {
              name: "被保人信息",
              url: ""
            }, {
              name: "续保信息",
              url: ""
            }]
          }, {
            name: "风险试图",
            children: [{
              name: "业务概览",
              url: ""
            }, {
              name: "被保人信息",
              url: ""
            }, {
              name: "续保信息",
              url: ""
            }]
          }, {
            name: "行为视图",
            children: [{
              name: "业务概览",
              url: ""
            }, {
              name: "被保人信息",
              url: ""
            }, {
              name: "续保信息",
              url: ""
            }]
          }]
        },
        {
          name: "客户管理",
          icon: "&#xe796;",
          children: [{
            name: "客户信息管理",
            children: [{
              name: "个人客户",
              url: "/client/customer"
            }, {
              name: "机构客户",
              url: "/client/company"
            }, {
              name: "查询列表",
              url: "/client/querylist"
            }, {
              name: "可信度打分",
              url: "/menu/clientInfo"
            }, {
              name: "审计追踪",
              url: "/menu/clientInfo"
            }, {
              name: "安全管控",
              url: "/menu/clientInfo"
            }]
          }]
        },
        {
          name: "客户洞察",
          icon: "&#xe786;",
          children: [{
            name: "综合表格",
            url: ""
          }, {
            name: "冻结列表格",
            url: ""
          }, {
            name: "可编辑表格",
            url: ""
          }, {
            name: "合并表格",
            url: ""
          }]
        },
        {
          name: "营销管理",
          icon: "&#xe785;",
          children: [{
            name: "表单一",
            url: ""
          }, {
            name: "表单二",
            url: ""
          }, {
            name: "高级搜索",
            url: ""
          }]
        },
        {
          name: "销售管理",
          icon: "&#xe789;",
          children: [{
            name: "组件",
            url: ""
          }]
        },
        {
          name: "服务管理",
          icon: "&#xe64f;",
          children: [{
            name: "客户咨询、投诉、理赔",
            url: ""
          }, {
            name: "客户回访",
            url: ""
          }, {
            name: "客户关怀",
            url: ""
          }, {
            name: "创新服务",
            url: ""
          }]
        },
        {
          name: "会员管理",
          icon: "&#xe787;",
          children: [{
            name: "活动管理",
            url: ""
          }]
        },
        {
          name: "渠道管理",
          icon: "&#xe78a;",
          children: [{
            name: "渠道整合",
            url: ""
          }, {
            name: "渠道协同",
            url: ""
          }, {
            name: "渠道持续优化",
            url: ""
          }]
        },
        {
          name: "知识库",
          icon: "&#xe64e;",
          children: [{
            name: "知识录入",
            url: ""
          }, {
            name: "知识应用",
            url: ""
          }, {
            name: "知识优化",
            url: ""
          }]
        }
      ],
      currentMenu: "",
      parMenu: ""
    }
  },
  props: { // props data
  },
  computed: {},
  methods: { // methods
    openOrClose() {
      this.isOpen = !this.isOpen
      this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
    },
    getMenu({
      url,
      name
    }) {
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
  }
}
</script>
<style lang="less" scoped>
.wrap-green-layout {
  .layout {
    background: #f2f6f7!important;
  }
  .navbar.bg-white {
    background-color: #3ca358!important;
    box-shadow:0 5px 10px rgba(0,0,0,0.2);
  }
  .layout-main {
    background: #f2f6f7!important;
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
        &.iconfont {
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
    .second-submenu.dropright {
      padding-right: 20px;
      min-width: 98px;
      width: auto;
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
    margin-left: 20px !important;
  }
  .mr-3 {
    margin-right: 20px !important;
  }
  .p-3 {
    padding: 20px 30px !important;
  }
  .breadcrumb {
    padding: 10px 0 10px 20px;
    line-height: 26px;
    background: #f2f6f7!important;
    .breadcrumb__item{
      font-size:12px;
      color:#999999;
      opacity:1;
      &.active{
        color:#666666;
      }
    }
    .breadcrumb__separator{
      padding-left:2px;
      padding-right:2px;
    }
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
