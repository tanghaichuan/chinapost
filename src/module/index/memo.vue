<template>
<div class="memo">
  <div class="memo-container p-3">
    <h1 class="text-xl text-justify">便签</h1>
    <t-input class="pb-2" v-model="titleVal" placeholder="未命名" size="sm"></t-input>
    <t-input class="pb-2" v-model="contentVal" type="textarea" placeholder="请输入内容"></t-input>
    <t-tabs class="tab" :threshold="2">
        <t-tab-panel label="未完成" name="tab-l" class="unfinish text-lg">
          <ul class="memoList">
            <li v-for="item in list" v-show="type(item.status,unfinish)" class="memo-item text-md">  <span class="content">{{item.title}}</span>
              <span class="edit">
                <t-icon type="border-color" size="10px">
                </t-icon>
              </span>
              <span class="delete">
                <t-icon type="delete" size="10px"></t-icon>
              </span>
            </li>
          </ul>
        </t-tab-panel>
        <t-tab-panel label="已完成" name="tab-2" class="finished text">
          <ul class="memoList">
            <li v-for="item in list" v-show="type(item.status,finished)" class="memo-item text-md">  <span class="content">{{item.title}}</span>
              <span class="edit">
                <t-icon type="border-color" size="10px">
                </t-icon>
              </span>
              <span class="delete">
                <t-icon type="delete" size="10px"></t-icon>
              </span>
            </li>
          </ul>
        </t-tab-panel>
        <span class="addMemo"><t-icon type="plus" class="add"></t-icon></span>
    </t-tabs>
  </div>
</div>
</template>
<script>
export default {
  name: "memo",
  data() {
    return {
      titleVal: '',
      contentVal: '',
      finished: 'finished',
      unfinish: 'unfinish'
    }
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  methods: {
    type(status,tip) {//分别显示已完成和未完成 tip用于标记
      return tip === status
    }
  }
}
</script>
<style lang="less">
  .memo {
    // width: 300px;
    // background: #fff;
    // position: fixed;
    // left: 70%;
    // top: 67px;
    // box-shadow: 0 5px 30px rgba(0,0,0,.15);
      .memo-container {
        .tab {
          font-size: 16px;
          .unfinish {
            
          }
          .memoList {
            padding-left: 10px;
            padding-right: 10px;
            .memo-item {
              line-height: 24px;
              list-style: none;
              .content{
              }
              .edit {
                float: right;
                color: rgba(7, 17, 27, 0.4);
              }
              .delete {
                float: right;
                color: rgba(7, 17, 27, 0.4);
                margin-right:4px;
              }
            }
          }
          .addMemo {
            display: inline-block;
            width: 100%;
            height: 20px;
            text-align: center;
            .add {
              padding: 6px;
            }
          }
        }
      }
  }  
</style>
