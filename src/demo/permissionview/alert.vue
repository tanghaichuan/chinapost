<template>
<div class="alert-container">
  <t-button type="primary" @click="modal = true">点击显示模态框</t-button>
  <t-modal v-model="modal" title="选择人员" @on-ok="ok" @on-cancel="cancel" class="modal-body" style="background:#fff;">
    <div class="tags mb-3">
      <span class="text-sm mr-2">已选择:</span>
      <!-- @on-close="handleClose(item,index) -->
      <t-tag v-for="(item,index) in tags" @on-close="deleteTags(item)" :key="item" type="text">{{ item.name }}</t-tag>
      <!-- <t-button type="primary" size="sm" @click="selectPerson">添加标签</t-button> -->
    </div>
    <div class="contentList">
      <div class="leftList float-left" style="width:50%;border: solid 1px rgb(220, 220, 220);min-height:360px">
        <div class="bg-gray-lightest-18 text-center border-right-0" style="border: solid 1px rgb(220, 220, 220)">
          <h1 class="listTitle text-md p-1 mb-0">选择组织</h1>
        </div>
        <t-tree :data="data" :props="defaultProps" @on-click="handleNodeClick"></t-tree>
      </div>
      <div class="rightList float-right text-left" style="width:50%;border: solid 1px rgb(220, 220, 220);min-height:360px">
        <div class="bg-gray-lightest-18 text-center border-left-0" style="border: solid 1px rgb(220, 220, 220)">
          <h1 class="listTitle text-md p-1 mb-0">选择人员</h1>
        </div>
        <div class="nameList">
          <t-checkbox v-model="allSel" @on-change="selectAll" class="pl-2">全选</t-checkbox>
          <ul class="list">
            <li class="list-item" v-for="(item,index) in personList" @click="selectPerson(item)">
              <span class="name" ref="nameVal">{{item.name}}</span>
              <t-icon type="check" class="icon text-right" v-show="item.isSelect"></t-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </t-modal>
</div>
</template>
<script>
export default {
  data() {
    return {
      modal: false,
      tags: [],
      selItems: 0,
      single: false,
      personList: [{
          name: '张三',
          id: 1,
          isSelect: false
        },
        {
          name: '张4',
          id: 2,
          isSelect: false
        },
        {
          name: '张5',
          id: 3,
          isSelect: false
        },
        {
          name: '张6',
          id: 4,
          isSelect: false
        }
      ],
      showNames: false, //显示选择人员中的名字
      showIcon: [false, false, false, false],
      data: [{
        label: '北京市',
        children: [{
          label: '支撑中心',
          children: [{
              label: '市场组',
              nameList: []
            },
            {
              label: '非市场组'
            },
            {
              label: '总体组'
            }
          ]
        }, {
          label: '网络部',
          children: [{
              label: '市场组'
            },
            {
              label: '非市场组'
            },
            {
              label: '总体组'
            }
          ]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  props: {},
  methods: {
    ok() {
      // 点击弹窗确定按钮
      this.$Message.info('点击了确定');
    },
    cancel() {
      // 点击弹窗取消按钮
      this.$Message.info('点击了取消');
    },
    selectAll(selsectAll) {
      // 点击全选
      if (selsectAll) {
        this.tags = []
        this.selItems = this.personList.length
        for (let i = 0; i < this.personList.length; i++) {

          this.personList[i].isSelect = selsectAll
          this.tags.push(this.personList[i])
          console.log(this.tags);
        }
      } else {
        this.selItems = 0
        for (let i = 0; i < this.personList.length; i++) {
          this.personList[i].isSelect = selsectAll
          this.tags = []
          console.log(this.tags);
        }
      }
    },
    selectPerson({
      id,
      name,
      isSelect
    }) {
      // 如果当前项是选中状态
      if (isSelect) {
        this.selItems--
          //把 list 里面设置为 false
          for (let i = 0; i < this.personList.length; i++) {
            if (this.personList[i].id == id) {
              this.personList[i].isSelect = !isSelect
            }
          }
        for (let j = 0; j < this.tags.length; j++) {
          if (this.tags[j].id == id) {
            this.tags.splice(j, 1)
          }
        }
      } else {
        this.selItems++
          // 如果不是选中状态就添加选中状态
          for (let i = 0; i < this.personList.length; i++) {
            if (this.personList[i].id == id) {
              this.personList[i].isSelect = !isSelect
            }
          }

        this.tags.push({
          id,
          name,
          isSelect
        })
      }

    },
    deleteTags({
      id,
      name,
      isSelect
    }) {
      // 删除 tags
      this.selItems--;

      for (let i = 0; i < this.personList.length; i++) {
        if (this.personList[i].id == id) {
          this.personList[i].isSelect = false
        }
      }
      for (let j = 0; j < this.tags.length; j++) {
        if (this.tags[j].id == id) {
          this.tags.splice(j, 1)
        }
      }

    }
  },
  computed: {
    allSel() {
      let personLength = this.personList.length
      return this.selItems >= personLength ? true : false
      console.log(1);
    }
  },
  watch: {

  },
  created() {}
}
</script>
<style lang="less">
.modal-body {
    .modal {
        .modal-dialog {
            background-color: #fff;
            .modal-content {
                background-color: #fff;
                .modal-body {
                    background-color: #fff;
                    .contentList {
                        background-color: #fff;
                        &:after {
                            content: '';
                            width: 0;
                            height: 0;
                            display: block;
                            clear: both;
                            visibility: hidden;
                        }
                        .rightList {
                            .nameList {
                                .list {
                                    padding: 0;
                                    .list-item {
                                        list-style: none;
                                        padding: 5px 10px;
                                        &:after {
                                            content: '';
                                            display: block;
                                            width: 0;
                                            height: 0;
                                            visibility: hidden;
                                            clear: both;
                                        }
                                        .name {
                                            float: left;
                                        }
                                        .icon {
                                            float: right;
                                            color: green;
                                        }
                                    }
                                    .item-active {
                                        background-color: rgb(247, 247, 247);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
