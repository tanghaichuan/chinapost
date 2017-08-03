<template>
  <div class="w-75 ml-auto mr-auto message-wrapper">
    <t-tabs>
      <t-tab-panel label="消息" name="tab-1">
        <div class="message-wrapper">
          <t-collapse v-model="value">
            <t-panel name="1">
              <t-icon type="close" size="16" bg-shape="rectangle" class="bg-danger text-white icon-bg--sm"></t-icon>
              <p class="text-muted mb-0 ml-3">
                便利宝 未通过上线审核。
              </p>
              <time class="text-muted ml-auto mr-4">2017-09-07</time>
              <t-icon type="delete" class="text-muted text-xl"></t-icon>
              <div slot="content">便利宝宝</div>
            </t-panel>
            <t-panel name="2">
              <t-icon size="16" type="check-all" bg-shape="rectangle" class="bg-primary text-white icon-bg--sm"></t-icon>
              <p class="text-muted mb-0 ml-3">
                便利宝 未通过上线审核。
              </p>
              <time class="text-muted ml-auto mr-4">2017-09-07</time>
              <t-icon type="delete" class="text-muted text-xl"></t-icon>
              <div slot="content">
                <article>
                  <h5>"班车宝" IOS上线/修改流程 审核通过</h5>
                  <time class="text-muted">2017年07月18日 16:55</time>
                  <p class="mt-4">
                    2017尊敬的开发者：<br>
                    您好！<br>
                    您提交的 "班车宝" IOS上线/修改流程，已经通过审核。<br>
                    请到 <a href="#" class="text-primary">接入应用</a> 页查看。
                  </p>
                  <p>能力开放平台</p>
                </article>
              </div>
            </t-panel>
            <t-panel name="3">
              <t-icon type="bullhorn" size="16" bg-shape="rectangle" class="bg-info text-white icon-bg--sm"></t-icon>
              <p class="text-muted mb-0 ml-3">
                新能力，新视野。
              </p>
              <time class="text-muted ml-auto mr-4">2017-09-07</time>
              <t-icon type="delete" class="text-muted text-xl"></t-icon>
              <div slot="content">新能力，新视野。</div>
            </t-panel>
            <t-panel name="4">
              <t-icon type="information-outline" size="16" bg-shape="rectangle" class="bg-warning text-white icon-bg--sm"></t-icon>
              <p class="text-muted mb-0 ml-3">
                您的配额即将耗尽，请尽快补充。
              </p>
              <time class="text-muted ml-auto mr-4">2017-09-07</time>
              <t-icon type="delete" class="text-muted text-xl"></t-icon>
              <div slot="content">您的配额即将耗尽，请尽快补充。</div>
            </t-panel>
          </t-collapse>
        </div>
      </t-tab-panel>
      <t-tab-panel label="公告" name="tab-2">标签二内容</t-tab-panel>
    </t-tabs>
    
  </div>
</template>
<script>
  export default {
    data () {  // store data
      return {
        isOpen: true,
        accordion: true,
        openPosition: 'down',
        modal: false,
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          rangeDate: [],
          singleYearVal: '',
          slider: [20, 50],
          textarea: ''
        }
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
