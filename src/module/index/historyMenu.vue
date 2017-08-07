<template>
<div class="history-menu">
  <ul class="dropdown_menu">
    <router-link v-for="(item,index) in list" key="index" :to="item.url" tag="li" @click.native="liclick(item)">
      <span class="icon"><i :class="['aid',item.icon]"></i></span>
      <p class="title">{{item.title}}</p>
      <p class="desc">{{item.describe}}</p>
    </router-link>
  </ul>
</div>
</template>
<script>
import {
  mapMutations,
  mapGetters
} from 'vuex'
export default {
  name: "historyMenu",
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'showHistoryMenu'
    ])
  },
  methods: {
    liclick(item) {
      this.newTabs({
        tabName: item.title,
        url: item.url
      })
      this.changeMenu({
        showHistoryMenu: !this.showHistoryMenu
      })

    },
    ...mapMutations({
      changeMenu: 'CHANGE_MENU',
      newTabs: 'NEW_TABS'
    })
  }
}
</script>
<style lang="less">
.history-menu {
    width: 270px;
    background: #fff;
    position: fixed;
    left: 194px;
    top: 67px;
    box-shadow: 0 5px 30px rgba(0,0,0,.15);
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li {
        line-height: 40px;
        height: 70px;
        padding: 15px 20px;
        border-bottom: 1px solid #f2f2f2;
        &:hover {
            background: #f5f5f5;
        }
        .icon {
            float: left;
            padding: 10px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            color: #fff;
            background: pink;
            line-height: 18px;
            text-align: center;
            margin-right: 10px;
            font-size: 18px;
        }
        p {
            float: left;
            overflow: hidden;
            width: 75%;
            margin-bottom: 0;
            line-height: 1;
            margin-bottom: 5px;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
</style>
