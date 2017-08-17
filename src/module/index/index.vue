<template>
<div class="index-container">
  <div class="post-tabs">
    <t-tabs mode="normal" :closeable="true" :threshold="10" @input="changeTab" :value="tabIndex" @remove="removeItem">
      <t-tab-panel :key="index" v-for="(item,index) in tabList" :label="item.tabName" :sb="'tab-'+index" :name="'tab-'+index" :myurl="item.url" ref="tabSelect">
      </t-tab-panel>
    </t-tabs>
  </div>
  <router-view></router-view>

</div>
</template>
<script>
import home from 'components/home.vue'

import {
  mapState,
  mapGetters
} from 'vuex'
export default {
  data() {
    return {
      tabList: [],
      tabIndex: "tab-0"
    }
  },
  watch: {
    tabLength(newVal, oldVal) {
      if (newVal > oldVal) {
        setTimeout(() => {
          let url = this.$refs.tabSelect[oldVal].$attrs.myurl
          this.tabIndex = `tab-${oldVal}`
          this.$router.push(url)
        }, 300)

      }
    }
  },
  methods: {
    removeItem(i) {
      console.log(i)
    },
    changeTab(index) {
      let url = this.$refs.tabSelect[index].$attrs.myurl
      this.tabIndex = `tab-${index}`
      this.$router.push(url)
    }
  },
  computed: {
    ...mapState({
      stateTabList: state => state.index.tabList
    }),
    ...mapGetters({
      tabLength: 'tabListLength'
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
    border-bottom: 1px solid #eee;
    .tabs-list {
        background: #f9f9f9;
        li {
            .nav-link {

                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
}
</style>
