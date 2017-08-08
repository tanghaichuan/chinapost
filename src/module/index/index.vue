<template>
<div class="index-container">
  <div class="post-tabs">
    <t-tabs mode="normal" :closeable="true" :threshold="10" @input="tabClick" :value="tabIndex" v-on:!click="closeTab">
      <t-tab-panel :key="index" v-for="(item,index) in tabList" :label="item.tabName+'2'" :name="'tab-'+index" :myurl="item.url" ref="tabSelect">
      </t-tab-panel>
    </t-tabs>
  </div>
  <router-view></router-view>

</div>
</template>
<script>
import home from './home.vue'
import {
  attr
} from '../../common/js/dom'

import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      tabList: [],
      tabIndex: "tab-0"
    }
  },
  methods: {
    closeTab() {
      console.log(111);
    },
    tabClick(index) {
      let oIndex = index.toString()
      let el = this.$refs.tabSelect[index].$attrs.myurl
      this.tabIndex = `tab-${oIndex}`
      this.$router.push(el)
    }
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
    home
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
