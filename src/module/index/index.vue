<template>
<div class="index-container">
  <div class="post-tabs">
    <t-tabs mode="normal" :closeable="true" :threshold="10">
      <t-tab-panel :key="index" v-for="(item,index) in tabList" :label="item.tabName" :name="'tab-'+index">

      </t-tab-panel>
    </t-tabs>
  </div>
  <router-view></router-view>

</div>
</template>
<script>
import bus from '../../bus'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      tabList: []
    }
  },
  methods: {

  },
  computed: {
    ...mapState({
      stateTabList: state => state.index.tabList
    })
  },
  created() {
    this.tabList = this.stateTabList
  },
  components: {

  }
}
</script>
<style lang="less">
.btn-primary {
    &:hover {
        background: red!important;
    }
    &:active {
        background: green!important;
    }
}
.post-tabs {
    .tabs-list {
        background: #fff;
        li {
            .nav-link {

                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
}
</style>
