<template>
  <t-modal v-model="show" class="application-detail-modal">
    <div class="d-flex align-items-center w-100" slot="header">
      <i class="bg-primary text-white aid icon-bg--rectangle text-lg">
        {{details.name ? details.name.substr(0,1).toUpperCase() : ''}}
      </i>
      <div class="ml-2 mr-auto text-truncate">
        <small class="text-truncate">{{details.name}}</small>
        <p class="mb-0 text-truncate">
          <span class="text-sm mr-2">{{details.no}}</span>
        </p>
      </div>
      <t-dropdown class="mr-2">
        <a href="#" class="toolbar__trigger">
          <t-icon type="dots-vertical" size="20"></t-icon>
        </a>
        <t-dropdown-menu slot="list">
          <t-dropdown-item>{{$t('demo.osp.operation1')}}</t-dropdown-item>
          <t-dropdown-item>{{$t('demo.osp.operation2')}}</t-dropdown-item>
        </t-dropdown-menu>
      </t-dropdown>
    </div>
    <t-tabs>
      <t-tab-panel :label="this.$t('demo.osp.app_overview')" name="tab-1" class="app-overview">
        <t-collapse v-if="details.isOnline">
          <t-panel :name="item.name+item.no" v-for="item in details.capabilities" :key="item.no" v-if="details!==null">
            <div class="hexagon">
              <i class="text-white aid aid-account-network" style="font-size: 18px;"></i>
            </div>
            <div class="ml-2 mr-auto text-truncate">
              <p class="mb-0 text-truncate">
                {{item.name}}
              </p>
              <small class="text-truncate text-muted">{{item.no}}</small>
            </div>
            <t-icon type="plus" size="20" class="ml-auto mr-2"></t-icon>
            <t-icon type="chevron-right" size="20"></t-icon>
            <template slot="content">
              <div class="row row--border">
                <div class="col-7">图表一</div>
                <div class="col-5">图表二</div>
              </div>
              <div class="row row--border" slot="content">
                <div class="col-12">图表三</div>
              </div>
            </template>
          </t-panel>
        </t-collapse>
        <div class="card ml-auto mr-auto mt-5" style="width:300px;" v-if="!details.isOnline">
          <div class="card-block text-center">
            <h4 class="card-title text-primary">{{$t('demo.osp.offline_tip1')}}</h4>
            <p class="card-text">{{$t('demo.osp.offline_tip2')}}</p>
            <ul class="list-unstyled d-inline-block text-left">
              <li>
                <t-icon type="check-circle" class="text-primary mr-1"></t-icon>
                {{$t('demo.osp.offline_tip3')}}
              </li>
              <li>
                <t-icon type="timer-sand" class="text-primary mr-1"></t-icon>
                {{$t('demo.osp.offline_tip4')}} <span class="text-light">（{{$t('demo.osp.review')}}）</span>
              </li>
              <li>
                <t-icon type="checkbox-blank-circle" class="text-muted mr-1"></t-icon>
                {{$t('demo.osp.offline_tip5')}}
              </li>
            </ul>
            <p class="mb-0">
              <t-button type="primary" size="sm">{{$t('demo.osp.apply_online')}}</t-button>
            </p>
          </div>
        </div>
      </t-tab-panel>
      <t-tab-panel :label="this.$t('demo.osp.basic_info')" name="tab-2">
        <div class="card border-0 pl-3 pr-3">
          <div class="row row--border">
            <div class="col-8">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.code')}}</div>
                <div class="form-group__content">
                  {{details.no}}
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.c')}}</div>
                <div class="form-group__content">
                  <t-dropdown>
                    <a href="javascript:void(0)">
                      {{$t('demo.osp.integrated_office')}}
                      <t-icon type="arrow-down-drop"></t-icon>
                    </a>
                    <t-dropdown-menu slot="list">
                      <t-dropdown-item>{{$t('demo.osp.e_commerce')}}</t-dropdown-item>
                      <t-dropdown-item>{{$t('demo.osp.integrated_office')}}</t-dropdown-item>
                      <t-dropdown-item>{{$t('demo.osp.entertainment')}}</t-dropdown-item>
                    </t-dropdown-menu>
                  </t-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="row row--border">
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.platform')}}</div>
                <div class="form-group__content">
                  {{details.platform}}
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.status')}}</div>
                <div class="form-group__content">
                  {{details.statusName}}
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.create_time')}}</div>
                <div class="form-group__content">
                  {{details.createTime}}
                </div>
              </div>
            </div>
          </div>
          <div class="row row--border">
            <div class="col-12">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.app_introduction')}}</div>
                <div class="form-group__content">
                  {{details.introduction}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 pl-3 pr-3 mt-4">
          <div class="row row--border">
            <div class="col-12">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.callback_addr')}}</div>
                <div class="form-group__content">
                  {{details.callback_addr}}
                </div>
              </div>
            </div>
          </div>
          <div class="row row--border">
            <div class="col-12">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.response_addr')}}</div>
                <div class="form-group__content">
                  {{details.req_url}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 pl-3 pr-3 mt-4">
          <div class="row row--border">
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.signing_algorithms')}}</div>
                <div class="form-group__content">
                  {{details.signing_algorithms}}
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.encryption_type')}}</div>
                <div class="form-group__content">
                  {{details.encryption_type}}
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.encryption_algorithm')}}</div>
                <div class="form-group__content">
                  {{details.encryption_algorithm}}
                </div>
              </div>
            </div>
          </div>
          <div class="row row--border">
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.custom_public_key')}}</div>
                <div class="form-group__content">
                  {{details.custom_public_key ? $t('demo.osp.yes') : $t('demo.osp.no')}}
                </div>
              </div>
            </div>
            <div class="col-8 d-flex justify-content-between">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.publick_key')}}</div>
                <div class="form-group__content">
                  {{details.publick_key}}
                </div>
              </div>
              <a href="#">
                <t-icon type="reload" size="20" bg-shape="rectangle" class="bg-gray-lightest-10 text-muted p-2"></t-icon>
              </a>
            </div>
          </div>
          <div class="row row--border">
            <div class="col-4">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.custom_key')}}</div>
                <div class="form-group__content">
                  {{details.custom_key ? $t('demo.osp.yes') : $t('demo.osp.no')}}
                </div>
              </div>
            </div>
            <div class="col-8 d-flex justify-content-between">
              <div class="from-group">
                <div class="form-group__label">{{$t('demo.osp.key')}}</div>
                <div class="form-group__content">
                  {{details.key}}
                </div>
              </div>
              <a href="#">
                <t-icon type="reload" size="20"  bg-shape="rectangle"  class="bg-gray-lightest-10 text-muted p-2"></t-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="card border-0 pl-3 pr-3 mt-4">
          <div class="row row--border">
            <div class="col-12 d-flex justify-content-between">
              <t-icon type="certificate" size="20"  bg-shape="rectangle"  class="bg-gray-lightest-10"></t-icon>
              <div class="from-group ml-3">
                <div class="form-group__label">{{$t('demo.osp.root_certificates_info')}}</div>
                <div class="form-group__content">
                  {{details.root_certificates_info}}
                </div>
              </div>
              <a href="#" class="ml-auto">
                <t-icon type="reload" size="20"  bg-shape="rectangle"  class="bg-gray-lightest-10 text-muted p-2"></t-icon>
              </a>
            </div>
          </div>
        </div>
        <p class="text-right mt-3">
          <t-button size="sm" class="mr-2">{{$t('demo.osp.cancel_modify')}}</t-button>
          <t-button size="sm" type="primary">{{$t('demo.osp.commit')}}</t-button>
        </p>
      </t-tab-panel>
      <t-tab-panel :label="this.$t('demo.osp.capabilities')" name="tab-3">
        <ul class="list-group" v-for="ability in details.association_abilitys" :key="ability.no">
          <li class="list-group-item">
            <div class="d-flex align-items-center">
              <div class="hexagon hexagon--danger">
                <t-icon type="home-map-marker" size="18" class="text-white"></t-icon>
              </div>
              <div class="ml-2 mr-auto text-truncate">
                <p class="mb-0 text-truncate">
                  {{ability.name}}
                </p>
                <small class="text-truncate text-muted">{{ability.no}}</small>
              </div>
              <div class="ml-auto">
                <t-button size="sm" v-if="ability.status!=='0'">{{ability.statusName}}</t-button>
                <a href="#" class="toolbar__trigger">
                  <t-icon type="dots-vertical" size="20"></t-icon>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <p class="text-center mt-4">
          <t-button size="sm">{{$t('demo.osp.application_capability_call')}}</t-button>
        </p>
      </t-tab-panel>
      <t-tab-panel :label="this.$t('demo.osp.app_log')" name="tab-4">
        <div class="card">
          <div class="card-block">
            <t-timeline>
              <t-timeline-item v-for="(item, key) in items" :key="item.id" :time="item.time" :title="item.content.title" :detail="item.content.detail" :color="item.color">
              </t-timeline-item>
            </t-timeline>
          </div>
        </div>
      </t-tab-panel>
    </t-tabs>
    <template slot="footer">
    </template>
  </t-modal>
</template>
<script>
// 应用详情对话框业务组件实现
export default {
  data () {
    return {
      show: false,
      appNO: '',
      details: {}
    }
  },
  watch: {
    show: function (val, oldVal) {
      if (val === true) {
        this.reload()
      } else {
        this.reset()
      }
    }
  },
  methods: {
    reset () {
      this.appNO = ''
      this.details = {}
    },
    reload () {
      if (this.appNO !== '') {
        this.$domains.osp.get(this.$services.osp.APP_DETAILS, {
          'appNO': this.appNO
        }).then(ret => {
          if (ret.data.status === 'ok') {
            this.details = ret.data.data
          } else {
            this.$Message.danger('获取应用详情失败！')
          }
        }).catch(err => {
          this.$Message.danger('获取应用详情失败！')
        })
      }
    }
  },
  created () {

  }
}
</script>
