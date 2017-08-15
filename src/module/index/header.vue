<template>
  <div class="header">
    <nav class="navbar  navbar-expand-lg">
      <t-tooltip content="主页" placement="bottom">
        <a href="/" class="layout-logo mr-4">
          <img src="../../asset/image/aid-icon-alone.png" alt="">
          <span class="text-xxl align-middle ml-1">Veris</span>
        </a>
      </t-tooltip>
  
      <div class="mymenu">
        <div class="mymenu-block--muenu" ref="systemMenu">
          <t-tooltip content="系统菜单" placement="bottom" @click.native="toggleSysMenue">
            <a href="javascript:;" class="menu-icon">
              <t-icon type="apps" size="26"></t-icon>
            </a>
          </t-tooltip>
          <system-menu v-show="showSystemMenu" :menuList="menuList"></system-menu>
        </div>
        <t-tooltip content="历史记录" placement="bottom">
          <a href="javascript:;" :class="['menu-icon ml-2',{'active':showHistoryMenu}]" @click="historyMenuHandle">
            <t-icon type="backup-restore" size="26"></t-icon>
          </a>
        </t-tooltip>
      </div>
  
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
      <t-tooltip content="便签 & 待办事项" placement="bottom" class=" ml-auto">
        <a href="javascript:;" class="menu-icon" @click.stop.prevent="showCustom">
          <t-icon type="calendar-plus" size="26"></t-icon>
        </a>
      </t-tooltip>
      <t-tooltip content="公告" placement="bottom">
        <a href="javascript:;" class="menu-icon ml-2">
          <t-icon type="bullhorn" size="26"></t-icon>
        </a>
      </t-tooltip>
      <t-tooltip content="消息" placement="bottom">
        <a href="javascript:;" class="menu-icon ml-2">
          <t-icon type="bell-outline" size="26"></t-icon>
        </a>
      </t-tooltip>
  
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
<<<<<<< HEAD
  
      <t-dropdown trigger="click" placement="bottom-end" class="mr-2">
        <t-badge count="3" state='warning' class="ml-4">
          <a href="javascript:;" class="text-muted">
            <t-icon type="bell" size="20"></t-icon>
          </a>
        </t-badge>
      </t-dropdown>
      <transition name="fade">
        <history-menu v-show="showHistoryMenu" :list="historyData"></history-menu>
      </transition>
    </nav>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import historyMenu from './historyMenu'
import systemMenu from './systemMenu'
import invokers from '../../invokers'
=======
    </div>
    <t-button slot="appendbtn" :class="['pl-3','pr-3']" style="{height:50px;}"><i class="aid aid-menu"></i></t-button>
    <t-tooltip content="便签 & 待办事项" placement="bottom" class=" ml-auto">
      <a href="javascript:;" class="menu-icon" @click="toggleMemo">
        <t-icon type="calendar-plus" size="26"></t-icon>
      </a>
    </t-tooltip>
    <t-tooltip content="公告" placement="bottom">
      <a href="javascript:;" class="menu-icon ml-2">
        <t-icon type="bullhorn" size="26"></t-icon>
      </a>
    </t-tooltip>
    <t-tooltip content="消息" placement="bottom">
      <a href="javascript:;" class="menu-icon ml-2">
        <t-icon type="bell-outline" size="26"></t-icon>
      </a>
    </t-tooltip>

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

    <t-dropdown trigger="click" placement="bottom-end" class="mr-2">
      <t-badge count="3" state='warning' class="ml-4">
        <a href="javascript:;" class="text-muted">
          <t-icon type="bell" size="20"></t-icon>
        </a>
      </t-badge>
    </t-dropdown>
    <transition name="fade">
      <history-menu v-show="showHistoryMenu" :list="historyData"></history-menu>
    </transition>
    <transition name="slide">
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
import memo from 'components/memo'
import invokers from '@/invokers'
>>>>>>> e5faa32ae71298a6d42e85d59364d727df68211e
export default {
  data() { // store data
    return {
      historyData: [],
      showSystemMenu: false,
<<<<<<< HEAD
      menuList: [{
        name: '营销管理',
        children: [{
          name: '统计报表',
          url: '/trouble/1'
        },
        {
          name: '活动管理',
          children: [{
            name: '活动视图',
            url: '/trouble/2'
          },
          {
            name: '问卷统计',
            url: '/trouble/3'
          }
          ]
        },
        {
          name: '细分管理',
          children: [{
            name: '共享列表',
            url: '/trouble/4'
          },
          {
            name: '市场细分',
            url: '/trouble/5'
          }
          ]
        },
        {
          name: '营销配置',
          children: [{
            name: '频次控制',
            url: '/trouble/6'
          },
          {
            name: '活动类型',
            url: '/trouble/7'
          }
          ]
        }
        ]
      },
      {
        name: '故障单',
        children: [{
          name: '工单工作区',
          url: '/trouble/8'
        },
        {
          name: '工单统计',
          url: '/trouble/9'
        },
        {
          name: '工单配置',
          children: [{
            name: '工单类型配置',
            url: '/trouble/10'
          },
          {
            name: '离岗规则配置',
            url: '/trouble/11'
          },
          {
            name: '自动建单配置',
            url: '/trouble/12'
          },
          ]
        }
        ]
      },
      {
        name: '销售',
        children: [{
          name: '销售管理',
          children: [{
            name: '线索管理',
            url: '/trouble/13'
          },
          {
            name: '商机管理',
            url: '/trouble/14'
          },
          {
            name: '建议书管理',
            url: '/trouble/15'
          },
          {
            name: '客户竞争者管理',
            url: '/trouble/16'
          },
          {
            name: '销售漏斗',
            url: '/trouble/17'
          },
          {
            name: '商机追踪',
            url: '/trouble/18'
          },
          {
            name: '未分配全局线索池',
            url: '/trouble/19'
          }
          ]
        },
        {
          name: '销售助手',
          children: [{
            name: '销售任务',
            url: '/trouble/20'
          },
          {
            name: '销售记录',
            url: '/trouble/21'
          },
          {
            name: '销售账户',
            url: '/trouble/22'
          },
          {
            name: '销售日程安排',
            url: '/trouble/23'
          },
          {
            name: '统一分配日志',
            url: '/trouble/24'
          },
          ]
        },
        {
          name: '销售层级管理',
          children: [{
            name: '销售组织管理',
            url: '/trouble/25'
          },
          {
            name: '操作员管理',
            url: '/trouble/26'
          }
          ]
        },
        {
          name: '销售分析',
          children: [{
            name: '销售洞察',
            url: '/trouble/27'
          },
          {
            name: '销售仪表盘',
            url: '/trouble/28'
            
          }
          ]
        }
        ]
      },
      {
        name: '合同',
        children: [{
          name: '合同管理',
          children: [{
            name: '合同编辑',
            url: '/trouble/29'
          }]
        },
        {
          name: '模版管理',
          children: [{
            name: '协议条款模版',
            url: '/trouble/30'
          },
          {
            name: '协议模版',
            url: '/trouble/31'
          }
          ]
        },
        {
          name: '合同设置',
          children: [{
            name: '协议类型管理',
            url: '/trouble/32'
          },
          {
            name: '标签管理',
            url: '/trouble/33'
          },
          {
            name: '协议层级管理',
            url: '/trouble/34'
          }
          ]
        },
        {
          name: '合同跟踪',
          children: [{
            name: '监控规则配置',
            url: '/trouble/35'
          },
          {
            name: '监控结束',
            url: '/trouble/36'
          }
          ]
        }
        ]
      },
      {
        name: '知识库',
        children: [{
          name: 'Knowledge Homepage'
        },
        {
          name: 'Application for Approval'
        },
        {
          name: 'Article Management'
        },
        {
          name: 'My Article'
        },
        {
          name: 'Template Management'
        },
        {
          name: 'Business Type Management'
        },
        {
          name: 'Recommended Article Management'
        },
        {
          name: 'Recycle Bin'
        },
        {
          name: 'Public Favorites Management'
        },
        {
          name: 'Personal Favorites Management'
        },
        {
          name: 'Operation Log'
        },
        {
          name: 'Search Hot Article'
        },
        {
          name: 'Article Hits Statistics'
        },
        {
          name: 'Article Hits Details'
        },
        {
          name: 'Lexicon Management'
        },
        {
          name: 'Ticket Management'
        }
        ]
      },
      {
        name: '系统配置',
        children: [{
          name: 'Bulletin Management',
          url: '/trouble/37'
        },
        {
          name: 'Bulletin Catalog Management',
          url: '/trouble/38'
        }
        ]
      }
      ],
=======
      showMemo: false,
      menuList: [],
      memoList: []
>>>>>>> e5faa32ae71298a6d42e85d59364d727df68211e
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
    showCustom() {
      console.log(1);
    },
    historyMenuHandle() {
      //根据 state 中的值来显示历史菜单
      this.changeMenu({
        showHistoryMenu: !this.showHistoryMenu
      })

    },
    ...mapMutations({
      changeMenu: 'CHANGE_MENU'
    }),
    closeSystemMenu() {
      this.showSystemMenu = false;
    },
    toggleSysMenue() {
      this.showSystemMenu = !this.showSystemMenu;
    },
    toggleMemo() {
      this.showMemo = !this.showMemo;
      console.log('showMemo')
    }
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
    document.addEventListener('click', this.closeSystemMenu);
    stopEl.addEventListener('click', e => e.stopPropagation());
  },
  destroyed() {
    document.removeEventListener('click', this.closeSystemMenu);
  },
  components: {
    historyMenu,
    systemMenu,
    memo
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
<<<<<<< HEAD
    .btn-secondary,
    .form-input .form-control {
      border-radius: 0!important;
=======
    .memo {
      width: 300px;
      background: #fff;
      position: fixed;
      left: 79%;
      top: 67px;
      box-shadow: 0 5px 30px rgba(0,0,0,.15);
      transition: all 0.3s linear;
      transform: translate3d(0, 0, 0);
      &.slide-enter,&.slide-leave-to{
        opacity: 0;
        transform: translate3d(70%, 0, 0);
      } 
    }
    .input-group {
        .aid-magnify,
        .aid-menu {
            color: #333;
        }
>>>>>>> e5faa32ae71298a6d42e85d59364d727df68211e
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
      height: 50px!important;
      line-height: 50px!important;
      margin-left: -1px;
      background: #f5f5f5;
      border-radius: 0;
      z-index: 2;
    }
  }
}
</style>
