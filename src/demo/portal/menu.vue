<template>
  <div class="wrap-green-layout">
  <div class="layout bg-gray-lightest-5">
    <div class="row no-gutters">
      <div :class="['layout-sidebar bg-gray-darker col-auto',{'layout-sidebar--folded': isOpen===false}]">
        <a href="#" class="layout-logo-left">
          <img src="../../asset/image/zy-logo.png" alt="" class="logo-img">
          <span class="text-xxl text-white align-middle ml-1 logo-text">中国邮政</span>
        </a>
        <t-menu type="dark" :open-names="['1']" :accordion="accordion" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
          <t-submenu name="1" class="sub-first">
            <template slot="title">
              <i class="iconfont">&#xe784;</i>
              <span class="sub-text">客户360视图</span>
              <p class="sub-fold-text"><span>客户360视图</span></p>
            </template>
            <t-menu-item name="1-1">

              客户基本信息
              <!-- <t-menu type="dark" :open-names="['11']" :accordion="accordion" :open-position="openPosition" class="menuthre-list">
                <t-submenu name="11">
                  <template slot="title">
                      <span class="sub-text">客户基本信息</span>

                  </template>
                  <t-menu-item name="11-1">11</t-menu-item>
                  <t-menu-item name="11-2">12</t-menu-item>
                  <t-menu-item name="11-3">12</t-menu-item>
                </t-submenu>
              </t-menu> -->

            </t-menu-item>
            <t-menu-item name="1-2">客户查询信息</t-menu-item>
            <t-menu-item name="1-3">客户关系</t-menu-item>
            <t-menu-item name="1-4">客户接触历史</t-menu-item>
          </t-submenu>
          <t-submenu name="2">
            <template slot="title">
              <i class="iconfont">&#xe787;</i>
              <span class="sub-text">服务管理</span>
              <p class="sub-fold-text"><span>服务管理</span></p>
            </template>
            <t-menu-item name="2-1">客户回访</t-menu-item>
            <t-menu-item name="2-2">客户关怀</t-menu-item>
            <t-menu-item name="2-3">创新服务</t-menu-item>
          </t-submenu>
          <t-submenu name="3">
            <template slot="title">
              <i class="iconfont">&#xe785;</i>
              <span class="sub-text">销售管理</span>
              <p class="sub-fold-text"><span>销售管理</span></p>
            </template>
            <t-menu-group title="分类一">
              <t-menu-item name="3-1">商机管理</t-menu-item>
              <t-menu-item name="3-2">交叉销售管理</t-menu-item>
              <t-menu-item name="3-3">销售团队管理</t-menu-item>
              <t-menu-item name="3-4">业务协同</t-menu-item>
            </t-menu-group>
            <t-menu-group title="分类二">
              <t-menu-item name="3-5">大客户销售</t-menu-item>
              <t-menu-item name="3-6">活动/日程/任务跟踪</t-menu-item>
              <t-menu-item name="3-7">合同管理</t-menu-item>
            </t-menu-group>
          </t-submenu>
        </t-menu>
      </div>
      <div class="col layout-content">
        <nav class="navbar  navbar-expand-lg bg-white layout-nav--top">
          <a href="javascript:;"><i class="aid aid-menu text-xxl text-white" @click="openOrClose"></i></a>
          
          <t-dropdown trigger="click" placement="bottom-end" class="mr-auto">
            <a href="javascript:void(0)" class="text-muted ml-4 text-white">
              <t-icon type="plus-circle-outline" size="20" class="align-middle text-white"></t-icon>
              新建
            </a>
            <t-dropdown-menu slot="list">
              <t-dropdown-item><t-icon type="checkbox-marked-outline" class="text-muted mr-1 text"></t-icon>任务</t-dropdown-item>
              <t-dropdown-item><t-icon type="file" class="text-muted mr-1 text"></t-icon>文件</t-dropdown-item>
              <t-dropdown-item><t-icon type="calendar-today" class="text-muted mr-1 text"></t-icon>日程</t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown>
          
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
          
          <t-dropdown trigger="click"  placement="bottom-end">
            <t-badge class="ml-4">
              <t-avatar dot-state="danger" text="HC" size="sm" class="text-white"></t-avatar>
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
        
        <t-breadcrumb>
          <t-breadcrumb-item href="#">首页</t-breadcrumb-item>
          <t-breadcrumb-item href="#">二级</t-breadcrumb-item>
          <t-breadcrumb-item href="#">三级</t-breadcrumb-item>
          <t-breadcrumb-item>当前页</t-breadcrumb-item>
        </t-breadcrumb>
        <div class="bg-white p-3 ml-3 mr-3 layout-main" style="min-height: 500px">内容区域</div>
        <footer class="p-3 text-center text-gray-light text-sm">
          2011-2016 © AI design
        </footer>
      </div>
    </div>
  
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
<style lang="less">
.header{
  display:none;
}
.wrap-green-layout{
  .navbar.bg-white{
    background-color:#3ca358!important;
  }
  .layout-logo-left{
    background:#007f3b;
    .logo-text{
      padding-left:5px;
      font-size:16px;
    }
    .logo-img{
      width:38px;
    }
  }
  .layout-sidebar--folded{
    .layout-logo-left{
        padding:12.5px 26px;
        width:98px;
        overflow:hidden;
       .logo-text{
          display:none;
       } 
    }
  }
  .menu{
    .menu__submenu-title{
      i{
        font-size:24px;
      }
    }
    .menu__submenu-title-icon{
      right:16px;
      top:55%;
    }
  }
  .sub-first{
      margin-top:30px;
      
  }
  .bg-gray-darker{
    background-color:#3a4556 !important;
  }
  .menu--dark{
    .menu__submenu{
      background-color:#3a4556;
    }
    .menu--open{
      background-color:#2b3341;
    }
  }
  .menu--dark{
    .menu__submenu-title{
      &:hover{
        background-color:#2b3341;
      }
    }
  }
  .menu--vertical{
    .menu__item{
      border-right:4px solid transparent;
    }
  }
  .menu--dark {
    .menu__item--checked{
      border-right-color:#45b331;
    }
  }
  .menu--vertical.menu--folded{
    .menu__submenu-title{
      min-width:98px;
      padding:0;
      border-left:4px solid transparent;
      height:auto;
      i{
        padding-left:30px;
      }
    }
  }
  .menu--vertical {
    .menu__submenu.dropright{
      min-width:98px;
      height:auto;
    }
  }
  .menu--folded{
    .menu__submenu-title{
      &:hover{
        border-left-color:#45b331;
        i{
          color:#45b331;
        }
        .sub-fold-text{
          color:#45b331;
        }
        .sub-fold-text{
          span{
            border-bottom:1px solid transparent;
          }
        }
        
      }
    }
    .menu--open{
      .menu__submenu-title{
        border-left-color:#45b331;
        i{
          color:#45b331;
        }
        .sub-fold-text{
          color:#45b331;
        }
        .sub-fold-text{
          span{
            border-bottom:1px solid transparent;
          }
        }
      }
    }
  }
  .sub-fold-text{
    display:none;
    margin:0;
    line-height:27px;
    text-align:center;
    text-indent:-10px;
    position:relative;
    top:-15px;
    span{
      padding-bottom:16px;
      border-bottom:1px solid #505e74;
    }
  }
  .menu--folded{
    .menu__submenu-title{
      .sub-fold-text{
        display:block;
      }
    }
    .menu--open.dropdown--open{
      ul.dropdown__menu{
        background-image:none;
        background:#3a4556;
        .menu__item{
          &:hover{
            background-color:#2b3341;
            color:#fff;
          }
        }
      }
    }
  }
  .menuthre-list{
    .menu__submenu{
      background-color:#2b3341;
    }
  }
  .menu{
    .menu__submenu{
      .menu__submenu-title{
        .iconfont{
          vertical-align:top;
        }
      }
    }
  }
 }
</style>