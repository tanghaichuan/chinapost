<template>
  <div class="dropTree">
    <div @click="modal = true" class="s-tutton">
      <t-input v-model="valuedata"
               class="a-input"
               icon="chevron-down"
               icon-placement="right">
      </t-input>
    </div>

    <t-modal
      class="t-modal"
      v-model="modal"
      title="机构选择"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="actionableTree">
        <t-input placeholder="搜索" v-model="filterText" icon="magnify" icon-placement="right"
                 class="magnify"></t-input>
        <t-tree
          :data="dataList"
          :props="defaultProps"
          node-key="id"
          class="filter-tree mt-2"
          :filter-node-method="filterNode"
          ref="tree"
          all-expandable
          is-select
          :expand-on-click-node="false"
          style="width: 440px"
          @on-select="onselect"
          :render-content="renderContent">
        </t-tree>
      </div>
    </t-modal>
  </div>
</template>
<script>
  import treeNodeRender from './tree-node-render.vue'

  export default {
    name: 'actionableTree',
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    data() {
      return {
        modal: false,
        filterText: '',
        dataList:
          [
            {
              id: 1,
              label: '中国邮政集团',
              children: [{
                id: 4,
                label: '北京市分公司',
                children: [{
                  id: 5,
                  label: '支撑中心',
                  children: [
                    {
                      id: 6,
                      label: '市场组'
                    }, {
                      id: 7,
                      label: '非市场组'
                    }, {
                      id: 8,
                      label: '总体组'
                    }]
                }]
              }, {
                id: 9,
                label: '上海市分公司',
              },
                {
                  id: 10,
                  label: '广州市分公司',
                },
                {
                  id: 11,
                  label: '深圳市分公司',
                }]
            }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      renderContent(h, {node, data, store}) {
        return h(treeNodeRender, {
          props: {
            nodeName: node.label,
            newStore: store,
            newData: data,

          }
        })
      },
      onselect(data) {
        this.valuedata = data.label
      }
    }
  };
</script>
<style scoped lang="less">
  .dropTree {
    width: 100%;
  }

  .magnify {
    width: 440px;
  }

  .actionableTree {
    padding-right: 15px;
    width: 500px;
  }

  /*.modal-footer {
    padding: 10px 10px;
    border-top: 1px solid #eaeaea;
  }
  .modal-header {
    background: #000 !important;
    border-bottom: 1px solid #eaeaea;
  }*/

  .input-wrapper {
    width: 100% !important;
  }

  .a-input {
    width: 100%;
    display: inline-block;
    padding: 0px !important;
    .input {
      width: 214px;
      padding: 0 !important;
      margin-left: -16px;

      font-size: 12px;
      padding-left: 10px !important;
    }

  }

  .s-tutton {
    display: inline-block;
    width: 100% !important;
    margin-left: 15px;

  }

  .s-tutton > span i:before {
    margin-right: 35px !important;
  }

  .t-modal {
    .modal-title {
      color: #455a74 !important;
      font-size: 14px;

    }
    .close>span{
      color: #455a74 !important;
    }
    .modal-content {
      width: 480px;
    }

    .modal-body {
      overflow-x: hidden !important;
    }
  }
  .filter-tree{
    .tree__node-content--checked {
      border-left: none !important;
    }
  }


</style>



