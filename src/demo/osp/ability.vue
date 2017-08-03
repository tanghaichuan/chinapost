<template>
  <div>
    <t-form ref="formInline" :model="formInline" :rules="ruleInline" inline class="mb-3">
      <t-dropdown trigger="click" class="mr-2">
        <a href="javascript:void(0)" class="text-gray text-gray font-weight-bold text-lg">
          我收藏的能力(3)
          <t-icon type="arrow-down-drop"></t-icon>
        </a>
        <t-dropdown-menu slot="list">
          <t-dropdown-item>未上线的应用</t-dropdown-item>
          <t-dropdown-item>未上线的应用</t-dropdown-item>
        </t-dropdown-menu>
      </t-dropdown>
      <span class="text-muted mr-3 pl-2 border-left">选中(1)项</span>
      <t-button size="sm" class="mr-2">取消收藏</t-button>
      <t-button size="sm" class="mr-auto">申请使用</t-button>
  
      <t-input v-model="value" placeholder="请输入..."  icon="magnify" size="sm" :class="['search-input',{'search-input--spread': isSpread===true}]" @on-click="SpreadSearchInput" @on-blur="SpreadSearchInput"></t-input>
  
      <a href="javascript:void(0)" class="toolbar__trigger" @click="openOrSideWin">
        <t-icon type="filter-variant" size="20"></t-icon>
      </a>
  
    </t-form>
    
    <t-table line :columns="table.columns" :data="table.data"></t-table>
  
    <!-- table-filter side-window start -->
    <div :class="['side-window','ability-filter-side-window',{'show': isOpen===false}]">
      <h5 class="side-window__title mb-0 d-flex align-items-center">
        <a href="javascript:void(0)" class="toolbar__trigger ml-0 mr-2" @click="openOrSideWin">
          <t-icon type="arrow-right" size="20"></t-icon>
        </a>
        <div class="hexagon">
          <i class="text-white aid aid-account-network" style="font-size: 18px;"></i>
        </div>
        <div class="ml-2 mr-auto text-truncate">
          <p class="mb-0 text-truncate text-md">
            短信/语音验证码
          </p>
          <small class="text-truncate text-muted text-sm">ABILITY_10000602</small>
        </div>
        <t-dropdown>
        <a href="#" class="text-gray toolbar__trigger mr-2"><t-icon type="dots-vertical" size="20"></t-icon></a>
          <t-dropdown-menu slot="list">
            <t-dropdown-item>操作一</t-dropdown-item>
            <t-dropdown-item>操作二</t-dropdown-item>
          </t-dropdown-menu>
        </t-dropdown>
        <a href="#" class="text-gray"><t-icon type="close" size="20"></t-icon></a>
      </h5>
      <div class="side-window__content bg-gray-lightest-5">
        <t-tabs size="sm">
          <t-tab-panel label="能力总览" name="tab-1">
            <div class="p-3">
              <t-alert type="danger" closable>该能力即将下线，请提前选择替换能力。</t-alert>
            </div>
            
          </t-tab-panel>
          <t-tab-panel label="基本信息" name="tab-2">标签二内容</t-tab-panel>
          <t-tab-panel label="API" name="tab-3">标签三内容</t-tab-panel>
        </t-tabs>
      </div>
      <div class="side-window__footer p-2 text-center">
        <t-button type="primary" size="sm">存为视图</t-button>
      </div>
    </div>
    <!-- table-filter side-window end -->
  </div>
  
</template>
<script>
  export default {
    data () {  // store data
      return {
        isOpen: true,
        accordion: true,
        isSpread: true,
        table: {
          columns: [
            {
              title: '姓名',
              key: 'name'
            },
            {
              title: '年龄',
              key: 'age'
            },
            {
              title: '地址',
              key: 'address'
            }
          ],
          data: [
            {
              name: '王小明',
              age: 18,
              address: '北京市朝阳区芍药居'
            },
            {
              name: '张小刚',
              age: 25,
              address: '北京市海淀区西二旗'
            },
            {
              name: '李小红',
              age: 30,
              address: '上海市浦东新区世纪大道'
            },
            {
              name: '周小伟',
              age: 26,
              address: '深圳市南山区深南大道'
            }
          ],
        },
        collapse: {
          value: '1'
        }
      }
    },
    props: { // props data
    },
    computed: {
    },
    methods: { // methods
      openOrSideWin(){
        this.isOpen = !this.isOpen;
      },
      SpreadSearchInput () {
        this.isSpread = !this.isSpread;
      }
    },
    created () { // init entry
    }
  }
</script>
