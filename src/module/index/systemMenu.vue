<template>
<div class="system-menu">
  <ul class="menu-wrapper">
    <li class="menu-item item-active" @click="back" v-show="path.length">
      <t-icon type="chevron-left" size="24" v-show="path.length"></t-icon>
      <span>{{title}}</span>
    </li>
    <li :class="['menu-item',{'item-active':(path.length === 0  && item.name === menuList[0].name)}]" v-for="(item, index) in tempList" @click="next(index)">
      <span>{{item.name}}</span>
      <t-icon type="chevron-right" style="float:right;" size="24" v-show="item.children"></t-icon>
    </li>
  </ul>
</div>
</template>
<script>
import {
  mapMutations
} from 'vuex'
export default {
  name: 'systemMenu',
  data() {
    return {
      showItem: 0,
      tempList: [],
      path: [],
      show: true,
      title: ''
    }
  },
  props: {
    menuList: {
      type: Object
    }
  },
  computed: {

  },
  methods: {
    ...mapMutations({
      newTabs: 'NEW_TABS'
    }),
    traverse(arr) {
      let temp = arr;
      if (this.path.length === 0) {
        return arr;
      } else {
        for (let i = 0; i < this.path.length; i++) {
          temp = temp[this.path[i]].children;
        }
        return temp;
      }
    },
    next(index) {
      if (this.tempList[index].children) {
        this.path.push(index);
        this.tempList = this.tempList[index].children;
        this.title = this.menuList[index].name;
      } else {
        let send = {
          tabName: this.tempList[index].name,
          url: this.tempList[index].url
        }
        this.newTabs(send);
      }
    },
    back(index) {
      this.path.pop();
      this.tempList = this.traverse(this.menuList)
    }
  },
  watch: {
    menuList(val) {
      this.tempList = val;
    }
  }
}
</script>
<style scoped lang="less">
.aid {
    color: #a9a9a9;
}

.system-menu {
    position: absolute;
    left: 0;
    top: 58px;
    width: 270px;
    opacity: 1;
    pointer-events: auto;
    max-height: 500px;
    overflow: auto;
    backface-visibility: hidden;
    height: auto;
}

.menu-wrapper {
    padding: 0;
    margin-bottom: 0;
    list-style: none;
    border-radius: 3px;
    box-shadow: 0 5px 30px rgba(0, 0, 0, .15);
    background: #fff;
    pointer-events: auto;
    cursor: pointer;
    .menu-item {
        border-bottom: 1px solid #f2f2f2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #000;
        padding: 2px 20px;
        &:hover {
            background: #f5f5f5;
            color: #1a94dc;
        }
        &.item-active {
            background: #f5f5f5;
        }
    }
}
</style>
