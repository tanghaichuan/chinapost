<template>
  <div class="layout layout--one-screen bg-gray-lightest-5">
    <div :class="['layout-sidebar bg-gray-darker',{'layout-sidebar--folded': isOpen===false}]">
      <div href="#" class="layout-logo-left">
        <img src="../../../asset/image/osp-logo.png" alt="" class="layout-logo-img">
        <span class="text-xl text-white align-middle ml-2 mr-auto layout-logo-text" >OSP</span>
        <a href="javascript:;"><i class="aid aid-menu text-xxl text-white" @click="openOrClose"></i></a>
      </div>
      <t-menu type="dark" active-name="assessDashboard"
        :accordion="accordion"
        :open-position="openPosition"
        :class="[{'menu--folded': isOpen===false}]"
        @on-select="_hdMenuClick"
        ref="sidebarMenu">
        <t-menu-item name="assessDashboard"><i class="aid aid-view-dashboard"></i><span>首页</span></t-menu-item>
        <t-menu-item name="assessApp"><i class="aid aid-apps"></i><span>{{ $t('demo.osp.portal.access_app') }}</span></t-menu-item>
        <t-menu-item name="quota"><i class="aid aid-chart-pie"></i><span>{{ $t('demo.osp.portal.quota') }}</span></t-menu-item>
        <t-menu-item name="rootCertificates"><i class="aid aid-certificate"></i><span>{{ $t('demo.osp.portal.root_certificates') }}</span></t-menu-item>
        <hr>
        <t-menu-item name="capabilityQuery"><i class="aid aid-lightbulb-on"></i><span>{{ $t('demo.osp.portal.capability_query') }}</span></t-menu-item>
        <t-menu-item name="packagePurchase"><i class="aid aid-cart-plus"></i><span>{{ $t('demo.osp.portal.package_purchase') }}</span></t-menu-item>
        <hr>
        <t-menu-item name="devManual"><i class="aid aid-book-open-page-variant"></i><span>{{ $t('demo.osp.portal.dev_manual') }}</span></t-menu-item>
      </t-menu>
    </div>
    <div class="layout-content">
      <nav class="navbar navbar-expand-lg bg-white layout-nav--top">
        <h5>接入应用</h5>
        <t-dropdown placement="bottom-end"  trigger="click"  class="layout-search">
          <t-input icon="magnify" placeholder="搜索..."></t-input>
          <t-dropdown-menu slot="list">
            <div class="card">
              <div class="card-header">
                帮助文档
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-action">
                  <t-breadcrumb class="p-0">
                    <t-breadcrumb-item href="/">用户指南 </t-breadcrumb-item>
                    <t-breadcrumb-item href="/">新手指南</t-breadcrumb-item>
                    <t-breadcrumb-item><span class="text-primary">应用管理</span> </t-breadcrumb-item>
                  </t-breadcrumb>
                  <p class="text-muted text-sm mb-0">开发者创建<span class="text-primary">应用</span>之后，可以对应用进行管理。应用管理包括应用信息变更和应用状态变更。</p>
                </li>
                <li class="list-group-item list-group-item-action">
                  <t-breadcrumb class="p-0">
                    <t-breadcrumb-item href="/">环境介绍 </t-breadcrumb-item>
                    <t-breadcrumb-item href="/">沙箱测试</t-breadcrumb-item>
                    <t-breadcrumb-item>授权接口</t-breadcrumb-item>
                  </t-breadcrumb>
                  <p class="text-muted text-sm mb-0">开发者创建<span class="text-primary">应用</span>之后，可以对应用进行管理。应用管理包括应用信息变更和应用状态变更。</p>
                </li>
              </ul>
              <div class="card-header">
                API
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex align-items-center">
                    <t-icon type="check-all" bg-shape="rectangle" size="20" class="bg-primary text-white"></t-icon>
                    <div class="ml-2 text-truncate">
                      <small class=" text-truncate">话费充值</small>
                      <p class="mb-0 text-muted text-sm text-truncate">开发者创建<span class="text-primary">应用</span>之后，可以对应用进行管理。</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="card-header">
                APP
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex align-items-center">
                    <t-icon type="check-all" bg-shape="rectangle" size="20" class="bg-success text-white"></t-icon>
                    <div class="ml-2 text-truncate">
                      <small class=" text-truncate">应用宝</small>
                      <p class="mb-0 text-muted text-sm text-truncate">腾讯 <span class="text-primary">应用</span>之王</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </t-dropdown-menu>
        </t-dropdown>

        <t-dropdown placement="bottom-end"  trigger="click" @on-click="_hdMenuClick">
          <a href="javascript:void(0)" class="toolbar__trigger">
            <t-badge state='danger' dot>
              <t-icon type="bell" size="20"></t-icon>
            </t-badge>
          </a>
          <t-dropdown-menu slot="list">
            <div class="card">
              <div class="card-header border-bottom-0">
                <h6 class="mb-0 py-2">消息与公告</h6>
              </div>
              <div class="list-group list-group-flush border-bottom-0">
                <a class="list-group-item list-group-item-action d-flex align-items-center border-top-0">
                  <t-icon size="20" type="check-all" bg-shape="rectangle" class="bg-primary text-white"></t-icon>
                  <div class="ml-2 text-truncate">
                    <small class="text-muted text-sm text-truncate">应用创建审核</small>
                    <p class="mb-0 text-truncate">已通过审核</p>
                  </div>
                  <a href="#" class="text-muted ml-auto align-self-start">
                    <t-icon type="close" size="20"></t-icon>
                  </a>
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center">
                  <t-icon size="20" type="close" bg-shape="rectangle" class="bg-danger text-white"></t-icon>
                  <div class="ml-2 text-truncate">
                    <small class="text-muted text-sm text-truncate">应用上线审核</small>
                    <p class="mb-0 text-truncate">未能通过审核</p>
                  </div>
                  <a href="#" class="text-muted ml-auto align-self-start">
                    <t-icon type="close" size="20"></t-icon>
                  </a>
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center">
                  <t-icon size="20" type="bullhorn" bg-shape="rectangle" class="bg-info text-white"></t-icon>
                  <div class="ml-2 text-truncate">
                    <small class="text-muted text-sm text-truncate">新能力上线</small>
                    <p class="mb-0 text-truncate">基站定位能力全新上线。</p>
                  </div>
                  <a href="#" class="text-muted ml-auto align-self-start">
                    <t-icon type="close" size="20"></t-icon>
                  </a>
                </a>
              </div>
              <div class="card-footer text-center bg-gray-lightest-10 border-0">
                <a href="#" class="text-gray text-sm font-weight-bold">更多消息与公告</a>
              </div>
            </div>
          </t-dropdown-menu>
        </t-dropdown>

        <t-dropdown placement="bottom-end" trigger="click">
          <a href="javascript:void(0)" class="toolbar__trigger">
            <t-icon type="clipboard-account" size="20" class="align-middle"></t-icon>
            <i class="aid aid-arrow-down-drop align-middle"></i>
          </a>
          <t-dropdown-menu slot="list">
            <div class="card">
              <div class="card-block d-flex align-items-center bg-gray-darker">
                <t-avatar :img-src="avatarSrc"></t-avatar>
                <div class="ml-3 text-truncate">
                  <p class="mb-0 text-truncate text-white">Gaofei</p>
                  <small class="text-sm text-truncate text-muted">企业开发者 <i class="aid aid-city  align-middle ml-1"></i></small>
                </div>
              </div>
              <div class="list-group list-group-flush">
                <a class="list-group-item list-group-item-action d-flex align-items-center"
                  @click="_hdGotoPersonInfo">
                  <i class="aid aid-account-card-details text-lg mr-2"></i>
                  账号信息
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center border-0">
                  <i class="aid aid-account text-lg mr-2"></i>
                  我的订单
                </a>
                <a class="list-group-item list-group-item-action d-flex align-items-center"
                  @click="_logout">
                  <i class="aid aid-login-variant text-lg mr-2 text-danger"></i>
                  登出
                </a>
              </div>
            </div>
          </t-dropdown-menu>
          <div slot="content">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action"></a>
              <a href="#" class="list-group-item list-group-item-action"><i class="aid aid-account"></i>我的订单</a>
              <a href="#" class="list-group-item list-group-item-action"><i class="aid aid-clipboard-account"></i>登出</a>
            </div>
          </div>
        </t-dropdown>
      </nav>
      <div class="layout-main" style="top:60px">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import avatarSrc from '../../../asset/image/avastar.jpg'

  const DEFAULT_NAME = 'assessDashboard' // 默认被选中的侧边栏菜单项名称
  export default {
    data() {  // store data
      return {
        isOpen: true,
        accordion: true,
        openPosition: 'down',
        value: '1',
        avatarSrc
      }
    },
    methods: { // methods
      ...mapActions({
        doLogout: 'osp/doLogout'
      }),
      openOrClose() {
        this.isOpen = !this.isOpen
        this.accordion = !this.accordion
        this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
      },
      _hdGotoPersonInfo() {
        this.$router.push({ name: 'osp.person.info' })
      },
      _logout() {
        this.doLogout()
        this.$router.push({ name: 'osp' })
      },
      _hdMenuClick(menuName) {
        let routeInfo = null;
        if (this._prevMenuName !== menuName) {
          this._prevMenuName = menuName
          switch (menuName) {
            case DEFAULT_NAME:
              routeInfo = { name: 'osp.dashboard' }
              break;
            case 'assessApp':
              routeInfo = { name: 'osp.access-app' }
              break;
            default:
              routeInfo = { name: 'coming.soon' }
              break;
          }
          if (routeInfo !== null) {
            this.$router.push(routeInfo)
          }
        }
      }
    },
    created() {
      this._prevMenuName = DEFAULT_NAME
    }
  }
</script>
