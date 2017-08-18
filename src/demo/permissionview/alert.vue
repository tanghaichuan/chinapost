<template>
<div class="alert-container">
  <t-button type="primary" @click="modal = true">点击显示模态框</t-button>
  <t-modal v-model="modal" title="选择人员" @on-ok="ok" @on-cancel="cancel" class="modal-body" style="background:#fff;">
    <div class="tags mb-3">
      <span class="text-sm mr-2">已选择:</span>
      <!-- @on-close="handleClose(item,index) -->
      <t-tag v-for="(item,index) in tags" :key="item" type="text">{{ item.name }}</t-tag>
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
          <t-checkbox v-model="single" @on-change="selectAll" class="pl-2">全选</t-checkbox>
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
        for (let i = 0; i < this.personList.length; i++) {
          console.log(i);
          // this.personList[i].isSelect = selsectAll
          // this.tags.push(this.personList[i])
        }
      } else {
        for (let i = 0; i < this.personList.length; i++) {
          // this.personList[i].isSelect = selsectAll
          // this.tags = []
        }
      }
    },
    selectPerson(item) {
      if (item.isSelect) {
        item.isSelect = !item.isSelect
        for (var j = 0; j < this.tags.length; j++) {
          console.log(j);
          // if(this.tags[i].id == item.id){
          //   this.tags.splice(i,1)
          // }
        }
      } else {
        this.tags.push(item)
      }
    }
  },
  watch: {
    //  single() {
    //    for(let i = 0;i<this.showIcon.length;i++){
    //      this.showIcon[i] = !this.showIcon[i];
    //    }
    //    if(this.showIcon[0] === true){
    //      for(let i =0;i<this.names.length;i++){
    //        this.name[i] = this.names[i]
    //      }
    //    } else {
    //      this.name = []
    //    }
    //  }
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
