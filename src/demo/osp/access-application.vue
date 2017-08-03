<template>
  <div>
    <t-form ref="formInline" :model="formInline" :rules="ruleInline" inline class="mb-3">
      <t-dropdown trigger="click" @on-click="_hdDropdownClick">
        <a href="javascript:void(0)" class="text-gray font-weight-bold text-lg">
          {{selectedLabel}}
          <t-icon type="arrow-down-drop"></t-icon>
        </a>
        <t-dropdown-menu slot="list">
          <t-dropdown-item name="offline">{{offlineLabel}}</t-dropdown-item>
          <t-dropdown-item name="online">{{onlineLabel}}</t-dropdown-item>
        </t-dropdown-menu>
      </t-dropdown>

      <t-button type="primary" size="sm" class="ml-4 mr-auto"  @click="showDialogAccessApp = true">新应用</t-button>

      <t-input :placeholder="this.$t('demo.osp.input_something')"  icon="magnify" size="sm"></t-input>

      <a href="javascript:void(0)" class="toolbar__trigger">
        <t-icon type="filter-variant" size="20"></t-icon>
      </a>

    </t-form>

    <t-table line :columns="table.columns" :data="table.data"></t-table>
    <div class="mt-3 text-center">
      <i class="aid-ani-loop aid aid-loading" v-show="loading"></i>
      <a href="javascript:void(0)" @click="_hdLoadMore" v-show="table.data.length <= 10">{{$t('demo.osp.more')}}...</a>
    </div>
    <t-modal v-model="showDialogAccessApp"
      :title="this.$t('demo.osp.apply_for_access')"
      width="560"
      class="application-app-access-modal"
      on->
      <template slot="header">
        <span class="modal-title">{{$t('demo.osp.apply_for_access')}}</span>
      </template>
      <t-form :model="formLeft" :rules="ruleFormLabel" label-position="left" :label-span="2" size="sm">
        <t-form-item :label="this.$t('demo.osp.access_platform')">
          <t-radio-group v-model="formItem.radio" type="button">
            <t-radio label="windows">
              <t-icon type="windows"></t-icon>
              <span>Windows</span>
            </t-radio>
            <t-radio label="ios">
              <t-icon type="apple"></t-icon>
              <span>ios</span>
            </t-radio>
            <t-radio label="android">
              <t-icon type="android"></t-icon>
              <span>Android</span>
            </t-radio>
            <t-radio label="Another">
            <t-icon type="web"></t-icon>
            <span>web</span>
          </t-radio>
          <t-radio label="web">
            <t-icon type="question-mark-circle"></t-icon>
            <span>{{$t('demo.osp.another')}}</span>
          </t-radio>
          </t-radio-group>
        </t-form-item>
        <t-form-item :label="this.$t('demo.osp.app_name')">
          <div class="row">
            <div class="col-8">
              <t-input v-model="formItem.input" :placeholder="this.$t('demo.osp.input_something')"></t-input>
            </div>
          </div>
        </t-form-item>
        <t-form-item :label="this.$t('demo.osp.app_catalog')">
          <div class="row">
            <div class="col-4">
              <t-select v-model="formItem.select" :placeholder="this.$t('demo.osp.input_something')">
                <t-option value="分类一">{{$t('demo.osp.c1')}}</t-option>
                <t-option value="分类二">{{$t('demo.osp.c2')}}</t-option>
                <t-option value="分类三">{{$t('demo.osp.c3')}}</t-option>
              </t-select>
            </div>
          </div>
        </t-form-item>
        <t-form-item :label="this.$t('demo.osp.app_introduction')">
          <t-input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" :placeholder="this.$t('demo.osp.input_something')"></t-input>
        </t-form-item>
      </t-form>
      <template slot="footer">
        <t-button class="btn-gray">{{$t('demo.osp.cancel')}}</t-button>
        <t-button type="primary">{{$t('demo.osp.ok')}}</t-button>
      </template>
    </t-modal>
    <t-dialog-app-detail ref="dlgAppDetail" app-no="12120212"></t-dialog-app-detail>
  </div>
</template>
<script>
  import TDialogAppDetail from './dialogs/app-detail/app-detail.vue'
  export default {
    components: {
      TDialogAppDetail
    },
    data () {
      return {
        loading: false,
        isOnlineApps: false,
        offlineAppsCount: 0,
        onlineAppsCount: 0,
        table: {
          columns: [
            {
              title: '应用',
              key: 'name',
              render: (h, params) => {
                return h('div', {
                  class: 'd-flex align-items-center w-100 mt-3 mb-3'
                }, [
                  h('i', {
                    class: {
                      'bg-info': (params.row.type === 0),
                      'bg-success': (params.row.type === 1),
                      'bg-warning': (params.row.type === 2),
                      'text-white aid icon-bg--rectangle text-lg': true
                    }
                  }, params.row.name.substr(0,1).toUpperCase()),
                  h('div', {
                    class: 'ml-2 mr-auto text-truncate'
                  },[
                    h('a', {
                      class: 'text-truncate text-primary',
                      attrs: {
                        href: 'javascript:void(0)',
                        'data-no': params.row.no
                      },
                      on: {
                        click: this._hdNameClick
                      }
                    }, params.row.name),
                    h('p', {
                      class: 'mb-0 text-truncate'
                    }, [
                      h('span', {
                        class: 'text-muted text-sm'
                      }, params.row.no)
                    ])
                  ])
                ])
              }
            },
            {
              title: '平台',
              key: 'platform',
            },
            {
              title: '类型',
              key: 'typeName'
            },
            {
              title: '状态',
              key: 'statusName'
            },
            {
              title: '更新时间',
              key: 'updateTime'
            }
          ],
          data: []
        },
        showDialogAccessApp: false,
        formItem: {
          input: '',
          select: '分类一',
          radio: 'windows',
          checkbox: [],
          switch: true,
          rangeDate: [],
          singleYearVal: '',
          slider: [20, 50],
          textarea: ''
        },
      }
    },
    props: {
    },
    computed: {
      offlineLabel: {
        get: function () {
          if (this.onlineAppsCount > 0) {
            return this.$t('demo.osp.offline_apps') + '(' + this.offlineAppsCount + ')'
          } else {
            return this.$t('demo.osp.offline_apps')
          }
        }
      },
      onlineLabel: {
        get: function () {
          if (this.offlineAppsCount > 0) {
            return this.$t('demo.osp.online_apps') + '(' + this.onlineAppsCount + ')'
          } else {
            return this.$t('demo.osp.online_apps')
          }
        }
      },
      selectedLabel: {
        get: function() {
          if (this.isOnlineApps === true) {
            return this.onlineLabel
          } else {
            return this.offlineLabel
          }
        }
      }
    },
    methods: {
      _hdNameClick (event) {
        let appNO = event.target.getAttribute('data-no')
        if (appNO !== null) {
          this.$refs.dlgAppDetail.appNO = appNO
          this.$refs.dlgAppDetail.show = true
        }
      },
      _hdDropdownClick (menuName) {
        if (menuName === 'online') {
          if (this.isOnlineApps === false) {
            this.isOnlineApps = true
          }
        } else {
          if (this.isOnlineApps === true) {
            this.isOnlineApps = false
          }
        }
      },
      _hdLoadMore () {
        this._getAppList()
      },
      _getAppList (num = 5) {
        this.loading = true
        this.$domains.osp.get(this.$services.osp.APP_LIST, {
          num // 每次拉取的记录数
        }).then(ret => {
          this.loading = false
          if (ret.data.status === 'ok') {
            this.table.data = this.table.data.concat(ret.data.data)
          }
        }).catch(err => {
          this.loading = false
          this.$Message.danger('获取应用列表失败！')
        })
      }
    },
    mounted () {
      this._getAppList()
    }
  }
</script>
