<template>
  <div class="dashboard">
    <div class="row no-gutters">
      <div class="col-8">
        <div class="row no-gutters border-bottom">
          <div class="col-8 pl-3 pt-3 pb-3">
            <h6 class="mb-2">应用</h6>
            <div class="card">
              <div class="row no-gutters text-center row--border">
                <div class="col-4">
                  <strong class="text-36 text-info">4</strong>
                  <p class="mb-0 text-muted">已上线应用</p>
                </div>
                <div class="col-4">
                  <strong class="text-36">1</strong>
                  <p class="mb-0 text-muted">未上线应用</p>
                </div>
                <div class="col-4">
                  <strong class="text-36 text-muted">1</strong>
                  <p class="mb-0 text-muted">草稿应用</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 p-3">
            <h6 class="mb-2">申请</h6>
            <div class="card">
              <div class="row no-gutters text-center row--border">
                <div class="col-6">
                  <strong class="text-36 text-success">3</strong>
                  <p class="mb-0 text-muted">审核通过</p>
                </div>
                <div class="col-6">
                  <strong class="text-36 text-danger">1</strong>
                  <p class="mb-0 text-muted">审核驳回</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-12 px-3 pt-3">
            <h6 class="mb-0">
              上线应用（4）
              <t-tag type="status" state='info'>状态文字</t-tag>
              <t-tag type="status" state='danger'>状态文字</t-tag>
              <t-tag type="status" state='success'>状态文字</t-tag>
            </h6>
          </div>
          <div class="col-4 pl-3 pt-3">
            <div class="card">
              <div class="card-header px-3">
                <i class="bg-gray-darker text-white aid icon-bg--rectangle font-weight-bold icon-bg--sm">
                  原
                </i>
                <div class="ml-2 mr-auto text-truncate">
                  <p class="mb-0 text-truncate text-primary">
                    原谅她
                  </p>
                  <small class="text-truncate text-muted d-block">ABILITY_10000602</small>
                </div>
                <div class="text-nowrap ml-2">
                  <t-tag state='warning'>告急</t-tag>
                  <a href="#" class="toolbar__trigger ml-0">
                    <t-icon type="chevron-right" size="20"></t-icon>
                  </a>
                </div>
              </div>
              <div class="card-block">
                图表
              </div>
            </div>
          </div>
          <div class="col-4 pl-3 pt-3">
            <div class="card">
              <div class="card-header px-3">
                <i class="bg-gray-darker text-white aid icon-bg--rectangle font-weight-bold icon-bg--sm">
                  原
                </i>
                <div class="ml-2 mr-auto text-truncate">
                  <p class="mb-0 text-truncate text-primary">
                    原谅她
                  </p>
                  <small class="text-truncate text-muted d-block">ABILITY_10000602</small>
                </div>
                <div>
                  <a href="#" class="toolbar__trigger">
                    <t-icon type="chevron-right" size="20"></t-icon>
                  </a>
                </div>
              </div>
              <div class="card-block">
                图表
              </div>
            </div>
          </div>
          <div class="col-4 px-3 pt-3">
            <div class="card">
              <div class="card-header px-3">
                <i class="bg-gray-darker text-white aid icon-bg--rectangle font-weight-bold icon-bg--sm">
                  原
                </i>
                <div class="ml-2 mr-auto text-truncate">
                  <p class="mb-0 text-truncate text-primary">
                    原谅她
                  </p>
                  <small class="text-truncate text-muted d-block">ABILITY_10000602</small>
                </div>
                <div>
                  <a href="#" class="toolbar__trigger">
                    <t-icon type="chevron-right" size="20"></t-icon>
                  </a>
                </div>
              </div>
              <div class="card-block">
                图表
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="col-4 border-left">
        <div class="p-3 border-bottom">
          <h6 class="mb-0">最新公告</h6>
          <div class="card mt-2">
            <div class="card-block d-flex align-items-center p-3 ">
              <t-icon type="bullhorn" size="20" bg-shape="rectangle"  class="bg-info text-white"></t-icon>
              <div class="ml-2 mr-auto text-truncate">
                <small class="text-truncate text-muted d-block">新能力发布</small>
                <p class="mb-0 text-truncate">
                  "BSS支撑能力"即将发布，届时中小
                </p>
              </div>
              <a href="#" class="align-self-start">
                <t-icon type="close" size="20" class="text-muted"></t-icon>
              </a>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-block d-flex align-items-center">
              <t-icon type="bullhorn" size="20" bg-shape="rectangle"  class="bg-info text-white"></t-icon>
              <div class="ml-2 mr-auto text-truncate">
                <small class="text-truncate text-muted d-block">新能力发布</small>
                <p class="mb-0 text-truncate">
                  "BSS支撑能力"即将发布，届时中小
                </p>
              </div>
              <a href="#" class="align-self-start">
                <t-icon type="close" size="20" class="text-muted"></t-icon>
              </a>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-block d-flex align-items-center">
              <t-icon type="bullhorn" size="20" bg-shape="rectangle"  class="bg-info text-white"></t-icon>
              <div class="ml-2 mr-auto text-truncate">
                <small class="text-truncate text-muted d-block">新能力发布</small>
                <p class="mb-0 text-truncate">
                  "BSS支撑能力"即将发布，届时中小
                </p>
              </div>
              <a href="#" class="align-self-start">
                <t-icon type="close" size="20" class="text-muted"></t-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="p-3 border-bottom">
          <h6 class="mb-0">推荐套餐</h6>
          <div class="card mt-2">
            <div class="card-block d-flex align-items-center">
              <div class="burst-8">
                <t-icon type="ticket-percent" size="20" class="text-white"></t-icon>
              </div>
              <div class="ml-2 mr-auto text-truncate">
                <p class="mb-0 text-truncate">
                  语音验证+定位服务包月100元
                </p>
                <small class="text-truncate text-muted d-block">根据您调用的能力”定位服务”用量推荐</small>
              </div>
              <a href="#">
                <t-icon type="chevron-right" size="20" class="text-muted"></t-icon>
              </a>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-block d-flex align-items-center">
              <div class="burst-8">
                <t-icon type="ticket-percent" size="20" class="text-white"></t-icon>
              </div>
              <div class="ml-2 mr-auto text-truncate">
                <p class="mb-0 text-truncate">
                  语音验证+定位服务包月100元
                </p>
                <small class="text-truncate text-muted d-block">根据您调用的能力”定位服务”用量推荐</small>
              </div>
              <a href="#">
                <t-icon type="chevron-right" size="20" class="text-muted"></t-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="p-3">
          <h6 class="mb-0">推荐能力</h6>
          <div class="card mt-2 mb-2">
            <div class="card-block d-flex align-items-center">
              <div class="hexagon">
                <t-icon type="account-network" size="20" class="text-white"></t-icon>
              </div>
              <div class="ml-2 mr-auto text-truncate">
                <p class="mb-0 text-truncate">
                  短信/语音验证码
                </p>
                <small class="text-truncate text-muted d-block">根据您用过的能力”短信验证”推荐</small>
              </div>
              <a href="#">
                <t-icon type="chevron-right" size="20" class="text-muted"></t-icon>
              </a>
            </div>
          </div>
        </div>
        </div>
        
    </div>
  </div>
</template>
<script>
  export default {
    data () {  // store data
      return {
      }
    },
    props: { // props data
    },
    computed: {
    },
    methods: { // methods
    },
    created () { // init entry
    }
  }
</script>
