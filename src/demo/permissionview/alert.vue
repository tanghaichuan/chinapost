<template>
  <div class="alert-container">
    <t-button type="primary" @click="modal = true">点击显示模态框</t-button>
      <t-modal
        v-model="modal"
        title="选择人员"
        @on-ok="ok"
        @on-cancel="cancel"
        class="modal-body"
        style="background:#fff;"
        >
          <div class="tags mb-3">
            <span class="text-sm mr-2">已选择:</span>
            <t-tag  v-for="(item,index) in name" :key="item" type="text" @on-close="handleClose($event,name,item,index)" >{{ item }}</t-tag>
            <!-- <t-button type="primary" size="sm" @click="tagAdd">添加标签</t-button> -->
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
              <div class="nameList" v-show="names.length">
                <t-checkbox v-model="single" class="pl-2">全选</t-checkbox>
                <ul class="list" v-show="showNames">
                  <li class="listItem" :class="{'item-active':showIcon[index]}" v-for="(item,index) in names" @click="tagAdd(index)"><span class="name" ref="nameVal">{{item}}</span><t-icon type="check" class="icon text-right" v-show="showIcon[index]"></t-icon></li>
                </ul>
              </div>
            </div>
          </div>
      </t-modal>
  </div>
 </template>
 <script>
    export default {
       data () {
         return {
            modal: false,
            name: [],
            // show: [],
            single: false,
            names: ['李四','王小丫','刘晓虎',"张三"],
            showNames: false,//显示选择人员中的名字
            namesObj: [],//mock人员数据
            showIcon: [false,false,false,false],
            data: [{
                label: '北京市',
                children: [{
                  label: '支撑中心',
                  children: [
                    {label: '市场组',nameList: []},
                    {label: '非市场组'},
                    {label: '总体组'}
                  ]
                },{
                  label: '网络部',
                  children: [
                    {label: '市场组'},
                    {label: '非市场组'},
                    {label: '总体组'}
                  ]
                }]
              }],
              defaultProps: {
                children: 'children',
                label: 'label'
              }
            }
         },
       props: {
        //  modal: {
        //    type: Boolean,
        //    default: false
        //  }
        namesObj: {
          type: Array,
          default: []
        }
       },
       methods: {
          ok () {
            this.$Message.info('点击了确定');
            console.log(this.namesObj.length)
          },
          cancel () {
            this.$Message.info('点击了取消');
          },
          handleClose (data,name,item,index) {
            console.log('删除标签',name)
            // console.log(data.target)
            this.name.splice(index,1)
            for (let i = 0;i<this.names.length;i++){
              if (this.names[i] === item ) {
                this.showIcon[i] = false
              }
            }
            console.log(this.name)
          },
          tagAdd (index) {
              // this.single = false
            // this.getArrayFromMock();
              let val = this.$refs.nameVal[index].innerHTML
              for(let i = 0;i<this.name.length;i++){
                if (val === this.name[i]) {
                  this.name.splice(i ,1)
                  this.showIcon[index] = !this.showIcon[index];
                  return
                }
              }
              this.name.push(val)//push进显示tag的数组
              // this.showIcon[index] = true;
              this.showIcon[index] = !this.showIcon[index];

          },
          handleNodeClick(data) {
            console.log(data);
            if (data.label === '市场组'){
              this.showNames = true;
            } else {
              this.showNames = false;
            }
          },
          getArrayFromMock() {
            console.log('执行')
            console.log(this.namesObj.length)
            for (let i = 0;i<this.namesObj.length;i++){
              this.names[i] = this.namesObj[i].name
              console.log(this.namesObj[i].name)
            }
          },
          selectAll() {
            console.log('click')
            for(let i = 0;i<this.showIcon.length;i++){
              this.showIcon[i] = !this.showIcon[i];

            }
          }
       },
       watch: {
         single() {
           for(let i = 0;i<this.showIcon.length;i++){
             this.showIcon[i] = !this.showIcon[i];
           }
           if(this.showIcon[0] === true){
             for(let i =0;i<this.names.length;i++){
               this.name[i] = this.names[i]
             }
           } else {
             this.name = []
           }
         }
       },
       created () {
        //  this.names = this.data
        this.$domains.cnpost.get(this.$services.GET_NAMES).then((res) => {
          this.namesObj = res.data.list;
        })
      }
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
                                    .listItem {
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
