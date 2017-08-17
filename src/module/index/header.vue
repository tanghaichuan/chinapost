<template>
<div class="header">
  <nav class="navbar  navbar-expand-lg">
    <!-- logo  -->
    <t-tooltip content="主页" placement="bottom">
      <a href="/" class="layout-logo mr-4">
          <img src="../../asset/image/logo.png" width="130" alt="">
        </a>
    </t-tooltip>
    <!-- 菜单按钮 -->
    <div class="mymenu">
      <div class="mymenu-block--muenu" ref="systemMenu">
        <t-tooltip content="系统菜单" placement="bottom" @click.native="toggleSysMenue">
          <a href="javascript:;" :class="[{'active':showSystemMenu},'menu-icon']">
            <t-icon type="apps" size="26"></t-icon>
          </a>
        </t-tooltip>
        <transition name="fade">
          <system-menu v-show="showSystemMenu" :menuList="menuList" @closesysmenu="closemenu"></system-menu>
        </transition>
        <!-- 历史记录菜单 -->
        <t-tooltip class="ml-2" content="历史记录" placement="bottom" @click.native="historyMenuHandle">
          <a href="javascript:;" :class="[{'active':showHistoryMenu},'menu-icon']">
            <t-icon type="history" size="26"></t-icon>
          </a>
        </t-tooltip>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="d-inline ml-3">
      <t-dropdown class="sb" trigger="click">
        <t-input icon="magnify" size="lg" placeholder="搜索...">
        </t-input>
        <t-dropdown-menu slot="list">
          <t-dropdown-item class="luda">
            <t-icon type="account-box-outline" size="26" class="mr-2"></t-icon>
            我是驴打滚驴打滚
          </t-dropdown-item>
          <t-dropdown-item divided>
            <t-icon type="account-box-outline" size="26" class="mr-2"></t-icon>
            我是北京烤鸭
          </t-dropdown-item>
        </t-dropdown-menu>
      </t-dropdown>
    </div>
    <t-button slot="appendbtn" :class="['pl-3','pr-3']" style="{height:50px;}">
      <i class="aid aid-menu"></i>
    </t-button>
    <!-- 待办事项按钮 -->
    <t-tooltip content="便签 & 待办事项" placement="bottom" class=" ml-auto">
      <a href="javascript:;" class="menu-icon" @click="toggleMemo">
        <t-icon type="calendar-plus" size="26"></t-icon>
      </a>
    </t-tooltip>
    <!-- 个人中心按钮 -->
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
    <!-- 历史记录菜单 -->
    <transition name="fade">
      <history-menu v-show="showHistoryMenu" :list="historyData"></history-menu>
    </transition>
    <!-- 便签 -->
    <transition name="move-right">
      <memo v-show="showMemo" :list="memoList" class="memo"></memo>
    </transition>
  </nav>
</div>
</template>
<script>
import {
  mapMutations,
  mapGetters
} from 'vuex'
import historyMenu from 'components/historyMenu'
import systemMenu from 'components/systemMenu'
// import popquery from 'components/popquery'
import memo from 'components/memo'
import invokers from '@/invokers'
export default {
  data() { // store data
    return {
      historyData: [],
      showSystemMenu: false,
      showMemo: false,
      showQuery: false,
      menuList: [],
      memoList: []
    }
  },
  props: { // props data
  },
  computed: {
    ...mapGetters([
      'showHistoryMenu'
    ])
  },
  methods: { // methods
    historyMenuHandle(e) {
      //根据 state 中的值来显示历史菜单
      e.stopPropagation()
      this.changeMenu({
        showHistoryMenu: !this.showHistoryMenu
      })

    },
    closeAllMenu() {
      this.showSystemMenu = false;
      this.showMemo = false;
      this.changeMenu({
        showHistoryMenu: false
      })
    },
    toggleSysMenue() {
      this.showSystemMenu = !this.showSystemMenu;
    },
    toggleQueryBtn() {
      this.showQuery = !this.showQuery;
    },
    closemenu() {
      this.showSystemMenu = false;
    },
    toggleMemo(e) {
      e.stopPropagation()
      this.showMemo = !this.showMemo;
    },
    ...mapMutations({
      changeMenu: 'CHANGE_MENU'
    }),
  },
  created() {
    this.$domains.cnpost.get(this.$services.GET_HISTORY).then((res) => {
      this.historyData = res.data.list
    });
    this.$domains.cnpost.get(this.$services.SYSTEM_MENU).then((res) => {
      this.menuList = res.data.list;
    });
    this.$domains.cnpost.get(this.$services.GET_MEMO).then((res) => {
      this.memoList = res.data.list;
    });
  },
  mounted() {
    //do something after mounting vue instance
    let stopEl = this.$refs.systemMenu;
    // let memoEl = this.$refs.memoWrap;
    // console.log(memoEl);
    document.addEventListener('click', this.closeAllMenu);
    stopEl.addEventListener('click', e => e.stopPropagation());
    // memoEl.addEventListener('click', e => e.stopPropagation());
  },
  destroyed() {
    document.removeEventListener('click', this.closeAllMenu);
  },
  components: {
    historyMenu,
    systemMenu,
    memo,
    // popquery
  }
}
</script>
<style lang="less">
.header {
    border-bottom: 1px solid #d9d9d9;
    box-shadow: 0 0 8px rgba(0, 0, 0, .14);
    position: relative;
    z-index: 3;
    .mymenu {
        height: 50px; // padding: 10px 0;
        line-height: 50px;
        .mymenu-block--muenu {
            display: inline-block;
            position: relative;
        }
    }
    .menu-icon {
        background: #f5f5f5;
        display: inline-block;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #333;
        &.active {
            background: #e5e5e5;
        }
    }

    .d-inline {
        width: 320px;
        .form-control {
            background: #f5f5f5;
            width: 320px;
        }
        .memo {
            width: 300px;
            height: 100%;
            background: #fff;
            position: fixed;
            top: 68px;
            right: 0;
            box-shadow: 0 5px 30px rgba(0, 0, 0, .15);
            transition: all 0.3s linear;
            transform: translate3d(0, 0, 0);
            &.slide-enter,
            &.slide-leave-to {
                opacity: 0;
                transform: translate3d(70%, 0, 0);
            }
        }
        .input-group {
            .aid-magnify,
            .aid-menu {
                color: #333;
            }
        }
    }
    .input-group {
        .aid-magnify,
        .aid-menu {
            color: #333;
        }
    }
}
.input-group {
    .aid-magnify,
    .aid-menu {
        color: #333;
    }
}
.navbar {
    background: #fff;
    .btn.btn-secondary {
        height: 50px;
        line-height: 50px;
        margin-left: -1px;
        background: #f5f5f5;
        border-radius: 0;
        z-index: 2;
    }
}
</style>
