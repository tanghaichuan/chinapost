<template>
  <div>
    <!-- table-toolbar start -->
    <t-form ref="formInline" :model="formInline" :rules="ruleInline" inline class="mb-3">
      <t-dropdown trigger="click">
        <a href="javascript:void(0)" class="text-gray font-weight-bold text-lg">
          已上线的应用(3)
          <t-icon type="arrow-down-drop"></t-icon>
        </a>
        <t-dropdown-menu slot="list">
          <t-dropdown-item>已上线的应用</t-dropdown-item>
          <t-dropdown-item>已上线的应用</t-dropdown-item>
        </t-dropdown-menu>
      </t-dropdown>
    
      <t-button type="primary" size="sm" class="ml-4 mr-auto" @click="modal1 = true">新应用</t-button>
    
      <t-input v-model="value" placeholder="请输入..."  icon="magnify" size="sm" :class="['search-input',{'search-input--spread': isSpread===true}]" @on-icon-click="SpreadSearchInput" @on-blur="SpreadSearchInput"></t-input>
      
      <t-dropdown trigger="click" placement="bottom-end">
        <a href="javascript:void(0)" class="toolbar__trigger">
          <t-icon type="view-column" size="20"></t-icon>
        </a>
        <t-dropdown-menu slot="list" style="width:300px">
          <div class="card">
            <div class="card-header border-bottom-0">
              <h6 class="mb-0 py-2">设置显示的列</h6>
            </div>
            <ul class="list-group list-group-flush border-bottom-0">
              <li class="list-group-item d-flex align-items-center justify-content-between border-top-0">
                <span>应用</span>
                <span class="text-sm text-muted">必须显示</span>
              </li>
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>平台</span>
                <span class="text-sm text-muted"><t-checkbox v-model="checkbox" label=""></t-checkbox></span>
              </li>
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>类型</span>
                <span class="text-sm text-muted"><t-checkbox v-model="checkbox" label=""></t-checkbox></span>
              </li>
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>状态</span>
                <span class="text-sm text-muted"><t-checkbox v-model="checkbox" label=""></t-checkbox></span>
              </li>
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>编辑时间</span>
                <span class="text-sm text-muted"><t-checkbox v-model="checkbox" label=""></t-checkbox></span>
              </li>
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>调用的能力</span>
                <span class="text-sm text-muted"><t-checkbox v-model="checkbox" label=""></t-checkbox></span>
              </li>
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>配额情况</span>
                <span class="text-sm text-muted"><t-checkbox v-model="checkbox" label=""></t-checkbox></span>
              </li>
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>所处环节</span>
                <span class="text-sm text-muted"><t-checkbox v-model="checkbox" label=""></t-checkbox></span>
              </li>
            </ul>
          </div>
        </t-dropdown-menu>
      </t-dropdown>
      
      <a href="javascript:void(0)" class="toolbar__trigger" @click="openOrSideWin">
        <t-icon type="filter-variant" size="20"></t-icon>
      </a>
  
    </t-form>
    <!-- table-toolbar end -->
    
    <!-- table start -->
    <t-table line :columns="table.columns" :data="table.data"></t-table>
    <!-- table end -->
    
    <!-- table-filter side-window start -->
    <div :class="['side-window',{'show': isOpen===false}]">
      <h5 class="side-window__title mb-0 d-flex align-items-center">
        <a href="javascript:void(0)" class="toolbar__trigger ml-0 mr-2" @click="openOrSideWin">
          <t-icon type="arrow-right" size="20"></t-icon>
        </a>
        筛选
      </h5>
      <div class="side-window__content">
        <t-collapse v-model="collapse.value" class="accordion-noborder">
          <t-panel name="1">
            <span class="font-weight-bold">平台（2）</span>
            <t-checkbox-group vertical slot="content" size="sm">
              <t-checkbox label="Window">
                <span>Window</span>
              </t-checkbox>
              <t-checkbox label="IOS">
                <span>IOS</span>
              </t-checkbox>
              <t-checkbox label="Android">
                <span>Android</span>
              </t-checkbox>
              <t-checkbox label="Web平台">
                <span>Web平台</span>
              </t-checkbox>
              <t-checkbox label="其他">
                <span>其他</span>
              </t-checkbox>
            </t-checkbox-group>
          </t-panel>
          <t-panel name="2">
            <span class="font-weight-bold">类型（1）</span>
            <t-checkbox-group vertical slot="content" size="sm">
              <t-checkbox label="电商">
                <span>电商</span>
              </t-checkbox>
              <t-checkbox label="综合办公">
                <span>综合办公</span>
              </t-checkbox>
              <t-checkbox label="社交通讯">
                <span>社交通讯</span>
              </t-checkbox>
              <t-checkbox label="游戏">
                <span>游戏</span>
              </t-checkbox>
            </t-checkbox-group>
          </t-panel>
          <t-panel name="3">
            <span class="font-weight-bold">状态</span>
            <t-checkbox-group vertical slot="content" size="sm">
              <t-checkbox label="草稿">
                <span>草稿</span>
              </t-checkbox>
              <t-checkbox label="应用审核中">
                <span>应用审核中</span>
              </t-checkbox>
              <t-checkbox label="应用审核驳回">
                <span>应用审核驳回</span>
              </t-checkbox>
              <t-checkbox label="上线审核中">
                <span>上线审核中</span>
              </t-checkbox>
              <t-checkbox label="上线审核驳回">
                <span>上线审核驳回</span>
              </t-checkbox>
              <t-checkbox label="上线">
                <span>上线</span>
              </t-checkbox>
              <t-checkbox label="暂停">
                <span>暂停</span>
              </t-checkbox>
              <t-checkbox label="下线">
                <span>下线</span>
              </t-checkbox>
            </t-checkbox-group>
          </t-panel>
          <t-panel name="4">
            <span class="font-weight-bold">创建时间</span>
            <t-date-picker slot="content" alignRight class="w-100" size="sm" v-model="rangeDateTimeVal" type="dateTimeRange" v-on:date-change="onChange"   placeholder="please select date"></t-date-picker>
          </t-panel>
        </t-collapse>
      </div>
      <div class="side-window__footer p-2 text-center">
        <t-button type="primary" size="sm">存为视图</t-button>
      </div>
    </div>
    <!-- table-filter side-window end -->
  
    <!-- new app modal start -->
    <t-modal v-model="modal1" class="new-add-modal" width="550">
      <div slot="header" class="w-100">
        <span class="modal-title">创建接入应用</span>
        <t-steps :current="1" size="small" class="mt-5 mb-4 ml-4">
          <t-step title="填写基本信息"></t-step>
          <t-step title="关联能力"></t-step>
          <t-step title="提交审核"></t-step>
        </t-steps>
      </div>
      <small class="text-light">接入平台</small>
      <div class="mt-2">
        <img src="../../asset/image/avastar.jpg" alt="" width="60" height="60" class="mr-2 rounded">
        <img src="../../asset/image/avastar.jpg" alt="" width="60" height="60" class="mr-2 rounded">
        <img src="../../asset/image/avastar.jpg" alt="" width="60" height="60" class="mr-2 rounded">
        <img src="../../asset/image/avastar.jpg" alt="" width="60" height="60" class="mr-2 rounded">
        <img src="../../asset/image/avastar.jpg" alt="" width="60" height="60" class="mr-2 rounded">
      </div>
      <template slot="footer">
        <a href="#" class="bg-gray-lightest-10 w-50 p-3 d-inline-block mr-0 text-muted text-center" >上一个应用</a>
        <a href="#" class="bg-gray-lightest-18 w-50 p-3 d-inline-block ml-0 text-gray text-center">下一个应用</a>
      </template>
    </t-modal>
    <!-- new app modal end -->
    
    <!-- table-item detail modal start -->
    <t-modal v-model="modal2" class="application-detail-modal">
      <div class="d-flex align-items-center w-100" slot="header">
        <i class="bg-info text-lg font-weight-bold text-white aid icon-bg--rectangle">
          划
        </i>
        <div class="ml-2 mr-auto text-truncate">
          <p class="mb-0 text-truncate text font-weight-bold">划得来</p>
          <small class="text-truncate">
            <span class="text-muted text-sm">AppKey</span>
            <span class="text-sm ml-2">24549571</span>
          </small>
        </div>
        <t-dropdown class="mr-2">
          <a href="#" class="toolbar__trigger">
            <t-icon type="dots-vertical" size="20"></t-icon>
          </a>
          <t-dropdown-menu slot="list">
            <t-dropdown-item>操作一</t-dropdown-item>
            <t-dropdown-item>操作二</t-dropdown-item>
          </t-dropdown-menu>
        </t-dropdown>
      </div>
      <t-tabs class="mt-2" size="sm">
        <t-tab-panel label="应用总览" name="tab-1" class="app-overview">
          <t-collapse v-model="value">
            <t-panel name="1">
              <div class="hexagon">
                <i class="text-white aid aid-account-network" style="font-size: 18px;"></i>
              </div>
              <div class="ml-2 mr-auto text-truncate">
                <p class="mb-0 text-truncate">
                  短信/语音验证码
                </p>
                <small class="text-truncate text-muted">ABILITY_10000602</small>
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
            <t-panel name="2">
              <div class="hexagon hexagon--danger">
                <i class="text-white aid aid-home-map-marker" style="font-size: 18px;"></i>
              </div>
              <div class="ml-2 mr-auto text-truncate">
                <p class="mb-0 text-truncate">
                  物联网能力
                </p>
                <small class="text-truncate text-muted">ABILITY_10000602</small>
              </div>
              <t-icon type="plus" size="20" class="ml-auto mr-2"></t-icon>
              <t-icon type="chevron-right" size="20"></t-icon>
              <div slot="content">
                2
              </div>
            </t-panel>
            <t-panel name="3">
              <div class="hexagon hexagon--info">
                <i class="text-white aid aid-currency-usd" style="font-size: 18px;"></i>
              </div>
              <div class="ml-2 mr-auto text-truncate">
                <p class="mb-0 text-truncate">
                  手机充值
                </p>
                <small class="text-truncate text-muted">ABILITY_10000602</small>
              </div>
              <t-icon type="plus" size="20" class="ml-auto mr-2"></t-icon>
              <t-icon type="chevron-right" size="20"></t-icon>
              <div slot="content">
                3
              </div>
            </t-panel>
          </t-collapse>
          <!-- application not inline start-->
          <div class="card ml-auto mr-auto mt-5" style="width:300px;">
            <div class="card-block text-center py-5">
              <h4 class="card-title text-info font-weight-bold text-lg mb-2">您的应用还未上线</h4>
              <p class="card-text text-sm">确保以下信息都填写完整，您的应用才可提交上线申请。</p>
              <ul class="list-unstyled d-inline-block text-left mb-5">
                <li class="mb-1">
                  <t-icon type="check-circle" class="text-primary mr-1"></t-icon>
                  <span class="font-weight-bold">完善基本信息</span>
                </li>
                <li class="mb-1">
                  <t-icon type="timer-sand" class="text-primary mr-1"></t-icon>
                  <span class="font-weight-bold">申请要调用的能力</span> <span class="text-light text-sm">（审核中）</span>
                </li>
                <li>
                  <t-icon type="checkbox-blank-circle" class="text-muted mr-1"></t-icon>
                  <span class="font-weight-bold">接口沙箱调试</span>
                </li>
              </ul>
              <p class="mb-0">
                <t-button class="btn-gray" size="sm" disabled>申请上线</t-button>
              </p>
            </div>
          </div>
          <!-- application not inline en-->
        </t-tab-panel>
        <t-tab-panel label="基本信息" name="tab-2">
          <div class="card border-0 pl-3 pr-3">
            <div class="row row--border">
              <div class="col-8">
                <div class="from-group">
                  <div class="form-group__label">编码</div>
                  <div class="form-group__content">
                    501111
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">分类</div>
                  <div class="form-group__content">
                    <t-dropdown>
                      <a href="javascript:void(0)">
                        综合办公
                        <t-icon type="arrow-down-drop"></t-icon>
                      </a>
                      <t-dropdown-menu slot="list">
                        <t-dropdown-item>电商</t-dropdown-item>
                        <t-dropdown-item>综合办公</t-dropdown-item>
                        <t-dropdown-item>游戏娱乐</t-dropdown-item>
                      </t-dropdown-menu>
                    </t-dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row--border">
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">平台</div>
                  <div class="form-group__content">
                    IOS
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">状态</div>
                  <div class="form-group__content">
                    创建审核
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">创建时间</div>
                  <div class="form-group__content">
                    2017-07-13
                  </div>
                </div>
              </div>
            </div>
            <div class="row row--border">
              <div class="col-12">
                <div class="from-group">
                  <div class="form-group__label">应用简介</div>
                  <div class="form-group__content">
                    一段应用的内容简介
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0 pl-3 pr-3 mt-4">
            <div class="row row--border">
              <div class="col-12">
                <div class="from-group">
                  <div class="form-group__label">回调地址</div>
                  <div class="form-group__content">
                    http://smartApp.com
                  </div>
                </div>
              </div>
            </div>
            <div class="row row--border">
              <div class="col-12">
                <div class="from-group">
                  <div class="form-group__label">调用返回URL</div>
                  <div class="form-group__content">
                    http://smartApp.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0 pl-3 pr-3 mt-4">
            <div class="row row--border">
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">签名算法</div>
                  <div class="form-group__content">
                    SHA
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">加密类型</div>
                  <div class="form-group__content">
                    单数据加密
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">加密算法</div>
                  <div class="form-group__content">
                    RSA
                  </div>
                </div>
              </div>
            </div>
            <div class="row row--border">
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">自定义公钥</div>
                  <div class="form-group__content">
                    否
                  </div>
                </div>
              </div>
              <div class="col-8 d-flex justify-content-between align-items-center">
                <div class="from-group">
                  <div class="form-group__label">公钥</div>
                  <div class="form-group__content">
                    463f3ce7b1073acf244ce7
                  </div>
                </div>
                <a href="#">
                  <t-icon type="reload" size="20"  bg-shape="rectangle"  class="bg-gray-lightest-10 text-muted icon-bg--sm"></t-icon>
                </a>
              </div>
            </div>
            <div class="row row--border">
              <div class="col-4">
                <div class="from-group">
                  <div class="form-group__label">自定义密钥</div>
                  <div class="form-group__content">
                    否
                  </div>
                </div>
              </div>
              <div class="col-8 d-flex justify-content-between align-items-center">
                <div class="from-group">
                  <div class="form-group__label">密钥</div>
                  <div class="form-group__content">
                    463f3ce7b1073acf244ce7
                  </div>
                </div>
                <a href="#">
                  <t-icon type="reload" size="20"  bg-shape="rectangle"  class="bg-gray-lightest-10 text-muted icon-bg--sm"></t-icon>
                </a>
              </div>
            </div>
          </div>
          <div class="card border-0 pl-3 pr-3 mt-4">
            <div class="row row--border">
              <div class="col-12 d-flex justify-content-between align-items-center">
                <t-icon type="certificate" size="20"  bg-shape="rectangle"  class="bg-gray-lightest-10"></t-icon>
                <div class="from-group ml-3">
                  <div class="form-group__label">应用根证书地址信息</div>
                  <div class="form-group__content">
                    应用根证书备注
                  </div>
                </div>
                <a href="#" class="ml-auto">
                  <t-icon type="reload" size="20"  bg-shape="rectangle"  class="bg-gray-lightest-10 text-muted icon-bg--sm"></t-icon>
                </a>
              </div>
            </div>
          </div>
          <p class="text-right mt-3">
            <t-button size="sm" class="mr-2">取消修改</t-button>
            <t-button size="sm" type="primary">提交修改申请</t-button>
          </p>
        </t-tab-panel>
        <t-tab-panel label="关联的能力" name="tab-3">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="hexagon">
                  <t-icon type="account-network" size="18" class="text-white"></t-icon>
                </div>
                <div class="ml-2 mr-auto text-truncate">
                  <p class="mb-0 text-truncate">
                    短信/语音验证码
                  </p>
                  <small class="text-truncate text-muted">ABILITY_10000602</small>
                </div>
                <div class="ml-auto">
                  <a href="#" class="toolbar__trigger">
                    <t-icon type="dots-vertical" size="20"></t-icon>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="hexagon hexagon--danger">
                  <t-icon type="home-map-marker" size="18" class="text-white"></t-icon>
                </div>
                <div class="ml-2 mr-auto text-truncate">
                  <p class="mb-0 text-truncate">
                    物联网能力
                  </p>
                  <small class="text-truncate text-muted">ABILITY_10000602</small>
                </div>
                <div class="ml-auto">
                  <t-button size="sm" class="btn-gray">即将下线</t-button>
                  <a href="#" class="toolbar__trigger">
                    <t-icon type="dots-vertical" size="20"></t-icon>
                  </a>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="hexagon hexagon--gray">
                  <t-icon type="currency-usd" size="18" class="text-white"></t-icon>
                </div>
                <div class="ml-2 mr-auto text-truncate">
                  <p class="mb-0 text-truncate">
                    手机充值
                  </p>
                  <small class="text-truncate text-muted">申请中...</small>
                </div>
                <div class="ml-auto">
                  <t-button type="warning" size="sm">申请中</t-button>
                  <a href="#" class="toolbar__trigger">
                    <t-icon type="dots-vertical" size="20"></t-icon>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <p class="text-center mt-4">
            <t-button size="sm" @click="modal3 = true">申请能力调用</t-button>
          </p>
        </t-tab-panel>
        <t-tab-panel label="应用日志" name="tab-4">
          <div class="card">
            <div class="card-block">
              <t-timeline class="timeline--sm">
                <t-timeline-item v-for="item in items" :key="item.id" :time="item.time" :title="item.content.title" :detail="item.content.detail" :color="item.color">
                </t-timeline-item>
              </t-timeline>
            </div>
          </div>
        </t-tab-panel>
      </t-tabs>
      <template slot="footer">
      </template>
      
    </t-modal>
    <!-- table-item detail modal end -->
    
    <!-- application ability modal start -->
    <t-modal v-model="modal3" width="580" class="application-ability-modal">
      <template slot="header">
        <span class="modal-title">申请能力</span>
      </template>
      <div class="row no-gutters">
        <div class="col-4 p-4">
          <div class="list-group">
            <a href="#person-info" class="list-group-item list-group-item-action active">
              <i class="aid aid-account-box mr-1 text"></i>
              个人信息
            </a>
            <a href="#company-info" class="list-group-item list-group-item-action">
              <i class="aid aid-certificate mr-1 text"></i>
              认证信息
            </a>
            <a href="#account-info" class="list-group-item list-group-item-action">
              <i class="aid aid-wallet mr-1 text"></i>
              账户
            </a>
          </div>
        </div>
        <div class="col-8 border-left">
          <t-form ref="formInline" :model="formInline" :rules="ruleInline" inline size="sm" class="pb-3 pl-4 pr-4 pt-4 border-bottom">
            <t-input v-model="formItem.input" icon="magnify" placeholder="请输入用户名..." class="mr-auto"></t-input>
            <t-select v-model="formItem.select" placeholder="能力类型">
              <t-option value="">类型一</t-option>
              <t-option value="">类型二</t-option>
              <t-option value="">类型三</t-option>
            </t-select>
          </t-form>
          <ul class="list-group mt-3 ml-4 mr-4 mb-4">
            <li class="list-group-item d-flex align-items-center">
              <t-icon type="star" size="22" class="text-warning mr-1"></t-icon>
              <div class="hexagon hexagon--sm">
                <t-icon type="account-network" size="14" class="text-white"></t-icon>
              </div>
              <p class="mb-0 ml-2 text-truncate">
                短信/语音验证码
              </p>
              <t-icon type="help-circle" class="text-muted ml-4 mr-auto"></t-icon>
              <t-switch v-model="switch1"></t-switch>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <t-icon type="star" size="22" class="text-warning mr-1"></t-icon>
              <div class="hexagon hexagon--sm hexagon--danger">
                <t-icon type="home-map-marker" size="14" class="text-white"></t-icon>
              </div>
              <p class="mb-0 ml-2 text-truncate">
                物联网能力
              </p>
              <t-icon type="help-circle" class="text-muted ml-4 mr-auto"></t-icon>
              <t-switch v-model="switch1"></t-switch>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <t-icon type="star" size="22" class="text-warning mr-1"></t-icon>
              <div class="hexagon hexagon--sm hexagon--info">
                <t-icon type="currency-usd" size="14" class="text-white"></t-icon>
              </div>
              <p class="mb-0 ml-2 text-truncate">
                手机充值
              </p>
              <t-icon type="help-circle" class="text-muted ml-4 mr-auto"></t-icon>
              <t-switch v-model="switch1"></t-switch>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <t-icon type="star" size="22" class="text-warning mr-1"></t-icon>
              <div class="hexagon hexagon--sm">
                <t-icon type="account-network" size="14" class="text-white"></t-icon>
              </div>
              <p class="mb-0 ml-2 text-truncate">
                短信/语音验证码
              </p>
              <t-icon type="help-circle" class="text-muted ml-4 mr-auto"></t-icon>
              <t-switch v-model="switch1"></t-switch>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <t-icon type="star" size="22" class="text-warning mr-1"></t-icon>
              <div class="hexagon hexagon--sm hexagon--danger">
                <t-icon type="home-map-marker" size="14" class="text-white"></t-icon>
              </div>
              <p class="mb-0 ml-2 text-truncate">
                物联网能力
              </p>
              <t-icon type="help-circle" class="text-muted ml-4 mr-auto"></t-icon>
              <t-switch v-model="switch1"></t-switch>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <t-icon type="star" size="22" class="text-warning mr-1"></t-icon>
              <div class="hexagon hexagon--sm hexagon--info">
                <t-icon type="currency-usd" size="14" class="text-white"></t-icon>
              </div>
              <p class="mb-0 ml-2 text-truncate">
                手机充值
              </p>
              <t-icon type="help-circle" class="text-muted ml-4 mr-auto"></t-icon>
              <t-switch v-model="switch1"></t-switch>
            </li>
          </ul>
        </div>
      </div>
      <template slot="footer">
        <t-button type="primary">确定</t-button>
      </template>
    </t-modal>
    <!-- application ability modal end -->
  </div>
  
</template>
<script>
  export default {
    data () {  // store data
      return {
        isOpen: true,
        accordion: true,
        isSpread: true,
        modal1: false,
        modal2: true,
        modal3: false,
        openPosition: 'down',
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
        },
        items:[
          {
            color:'success',
            time: '2016.12.03',
            content: {
              title: '提交能力关联审核',
              detail: '关联能力 【短信验证】'
            }

          },
          {
            color:'danger',
            time: '2016.12.03',
            content: {
              title: '审核被打回',
              detail: '【语音验证】不可被个人应用关联'
            }
          },
          {
            color:'primary',
            time: '2016.12.03',
            content: {
              title: '提交能力关联审核',
              detail: '关联能力【短信验证】【语音验证】'
            }

          },
          {
            color:'warning',
            time: '2016.05.01',
            content: {
              title: '接入应用',
              detail: '应用【划得来】创建'
            }
          }
        ],
        formItem: {
          input: '',
          select: '',
          radio: '',
          checkbox: [],
          switch: true,
          rangeDate: [],
          singleYearVal: '',
          slider: [20, 50],
          textarea: '',
        },
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
      },
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
