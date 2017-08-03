<template>
  <div class="layout layout--one-screen bg-gray-lightest-5">
    <div :class="['layout-sidebar bg-gray-darker',{'layout-sidebar--folded': isOpen===false}]">
      <router-link :to="{name: 'cloud.home'}"><div class="layout-logo-left"></div></router-link>
      <t-menu theme="dark" :accordion="accordion" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
        <t-submenu name="2">
          <template slot="title">
            <t-icon type="account-multiple"></t-icon>
            <span>用户管理</span>
          </template>
          <t-menu-item name="2-1">
            <router-link :to="{name: 'cloud.client'}">所有用户</router-link>
          </t-menu-item>
          <t-menu-item name="2-3">活跃用户</t-menu-item>
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
        <t-dropdown trigger="click" v-if="logined">
          <t-badge>
            <t-avatar dot-state="danger" text="HC" size="sm"></t-avatar>
          </t-badge>
          <t-dropdown-menu slot="list">
            <t-dropdown-item>
              <a class="nav-link" href="javascript:void(0)" @click="logout" v-if="logined">
                <span>注销</span>
              </a>
            </t-dropdown-item>
          </t-dropdown-menu>
        </t-dropdown>
        <a class="nav-link" href="javascript:void(0)" @click="login" v-else>
          <span>登录</span>
        </a>
      </nav>
      <t-breadcrumb>
        <template v-for="link in breadcrumb">
          <t-breadcrumb-item href="#">{{link}}</t-breadcrumb-item>
        </template>
      </t-breadcrumb>
      <div class="bg-white layout-main">
        <router-view></router-view>
      </div>
      <footer class="p-3 text-center text-gray-light text-sm">
        2011-2016 © AI design
      </footer>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  import * as actions from '../store/action'

  export default {
    data() { // store data
      return {
        isOpen: true,
        accordion: true,
        openPosition: 'down'
      }
    },
    computed: {
      ...mapState({
        logined: state => state.cloud.logined,
        route: 'route'
      }),
      breadcrumb(){
        return this.route.path.split('/').slice(2)
      }
    },
    methods: { // methods
      ...mapActions(Object.keys(actions)),
      openOrClose() {
        this.isOpen = !this.isOpen
        this.accordion = !this.accordion
        this.openPosition = this.openPosition === 'down' ? 'right' : 'down'
      },
      login(){
        this.$router.push({path: '/cloud'})
      },
      logout(){
        this.doLogout()
      }
    },
    watch: {
      logined(newVal, oldVal){
        if (!newVal && oldVal) {
          this.$router.push({path: '/cloud'})
        }
      }
    },
    mounted(){
      this.fetchAuth()
    }
  }
</script>
