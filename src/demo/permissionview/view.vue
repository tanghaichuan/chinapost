<style scoped lang="scss">
.modal-content .modal-footer .btn:last-child {
    width: auto!important;
}
.t-tab {
    width: 100%;
    height: 1000px;
    .nav-item {
        margin-left: 1rem;
    }
    .index {
        margin-top: 2rem;
        .my-tree {
            border: 1px solid darkblue;
        }
        .person {
            padding-left: 16px;
            .form-control {
                margin-left: 8px;
                width: 800px;
            }
        }
        .role-man {
            .form-group {
                padding-left: 16px;
            }
            .form-control {
                width: 800px;
            }
            .mybutton {
                margin-top: 16px;
                margin-left: 80px;
            }
        }

    }
    .view {
        display: flex;

        align-items: center;
        justify-content: center;
        .person {
            padding-left: 16px;
            .form-control {
                margin-left: 8px;
                width: 800px;
            }
        }
        .role-man {
            .form-group {
                padding-left: 16px;
            }
            .form-control {
                width: 800px;
            }
            .mybutton {
                margin-top: 16px;
                margin-left: 80px;
            }
        }
    }

}
</style>
<template>
<t-tabs class="t-tab">
  <t-tab-panel label="指标授权" name="tab-1">
    <div class="" class="index p-3 row">
      <div class="my-tree col-2">
        <t-tree :data="data" :props="defaultProps" is-select @on-select="handleNodeSelect" class=""></t-tree>
      </div>
      <div class="col  ">
        <div class="col ">
          <t-checkbox-group v-model="formItem.checkbox">
            <div class="row">
              <t-checkbox label="客户姓名" class="col"></t-checkbox>
              <t-checkbox label="性别" class="col"></t-checkbox>
              <t-checkbox label="出生年月" class="col"></t-checkbox>
              <t-checkbox label="证件类型" class="col"></t-checkbox>
            </div>
            <div class="row">
              <t-checkbox label="婚姻状况" class="col"></t-checkbox>
              <t-checkbox label="学历" class="col"></t-checkbox>
              <t-checkbox label="毕业院校" class="col"></t-checkbox>
              <t-checkbox label="证件号" class="col"></t-checkbox>
            </div>
            <div class="row">
              <t-checkbox label="是否有子女" class="col"></t-checkbox>
              <t-checkbox label="专业" class="col"></t-checkbox>
              <t-checkbox label="职业" class="col"></t-checkbox>
              <t-checkbox label="证件到期日" class="col"></t-checkbox>
            </div>
          </t-checkbox-group>
        </div>
        <div class="d-flex flex-column ifrom">
          <div class="mt-3" @click="modaltrue">
            <t-form inline class="t-form">
              <t-form-item label="选择人员:" class="person">
                <t-input v-model="nameStr" icon="account-multiple" icon-placement="right" placeholder=""></t-input>
              </t-form-item>
            </t-form>
          </div>
          <div class="mt-3 role-man">
            <t-form inline class="t-form">
              <t-form-item label="角色管理：">
                <t-select v-model="model12" filterable multiple class="t-form-item">
                  <t-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}
                  </t-option>
                </t-select>
              </t-form-item>
            </t-form>
            <div class="mybutton">
              <t-button type="primary">保存</t-button>
              <t-button class="ml-2">取消</t-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </t-tab-panel>
  <t-tab-panel label="视图授权" name="tab-2" class="">
    <div class=" view">
      <div class="d-flex flex-column ifrom">
        <div class="mt-3" @click="modaltrue">
          <t-form inline class="t-form">
            <t-form-item label="选择人员:" class="person">
              <t-input v-model="nameStr" icon="account-multiple" icon-placement="right" placeholder=""></t-input>
              </t-input>
            </t-form-item>
          </t-form>
        </div>
        <div class="mt-3 role-man">
          <t-form inline class="t-form">
            <t-form-item label="角色管理：">
              <t-select v-model="model12" filterable multiple class="t-form-item">
                <t-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}
                </t-option>
              </t-select>
            </t-form-item>
          </t-form>
          <div class="mybutton">
            <t-button type="primary">保存</t-button>
            <t-button class="ml-2">取消</t-button>
          </div>
        </div>
      </div>
    </div>
  </t-tab-panel>
  <div class="alert-container">
    <!-- <t-button type="primary" @click="modal = true">点击显示模态框</t-button> -->
    <t-modal v-model="modalShow" title="选择人员" @on-ok="ok" @on-cancel="cancel" class="modal-body" style="background:#fff;">
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
          <t-tree :data="treeData" :props="defaultProps" @on-click="handleNodeClick"></t-tree>
        </div>
        <div class="rightList float-right text-left" style="width:50%;border: solid 1px rgb(220, 220, 220);min-height:360px">
          <div class="bg-gray-lightest-18 text-center border-left-0" style="border: solid 1px rgb(220, 220, 220)">
            <h1 class="listTitle text-md p-1 mb-0">选择人员</h1>
          </div>
          <div class="nameList" v-show="showLists">
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
</t-tabs>
</template>
<style scoped lang="scss">
.dropdown__menu .dropdown__item--checked {
    background: url("../../../src/asset/image/hook.png");
    background-repeat: no-repeat;
    background-size: 1rem,1rem;
    background-position: 98%, 0;
    background-color: #f7f7f7;

}
.t-tab {
    width: 100%;
    height: 1000px;
    .nav-item {
        margin-left: 1rem;
    }
    .index {
        margin-top: 2rem;
        .my-tree {
            border: 1px solid #e9e9e9;
        }
        .person {
            padding-left: 16px;
            .form-control {
                margin-left: 8px;
                width: 800px;
            }
        }
        .role-man {

            .form-group {
                padding-left: 16px;
            }
            .form-control {
                width: 800px;
            }
            .mybutton {
                margin-top: 16px;
                margin-left: 80px;
            }
        }

    }
    .view {
        display: flex;

        align-items: center;
        justify-content: center;
        .person {
            padding-left: 16px;
            .form-control {
                margin-left: 8px;
                width: 800px;
            }
        }
        .role-man {
            .form-group {
                padding-left: 16px;
            }
            .form-control {
                width: 800px;
            }
            .mybutton {
                margin-top: 16px;
                margin-left: 80px;
            }
        }
    }

}
</style>

<script>
import alert from './alert'
export default {
  data() {
    return {
      showLists: false,
      data: [{
          label: '客户基本视图',
          children: [{
            label: '客户基本信息',
            children: [{
                label: '一般基本信息',
              },
              {
                label: '企业法定代表人信息',
              },
              {
                label: '实际控制人信息',
              },
              {
                label: '证件信息',
              }
            ]
          }]
        },
        {
          label: '客户关系视图',
          children: [{
            label: '获客来源',
          }, {
            label: '客户拜访记录',
          }]
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        rangeDate: [],
        singleYearVal: '',
        slider: [20, 50],
        textarea: ''
      },
      cityList: [{
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ],
      model12: [],
      formItem: {
        input: '',

      },
      modal: false,
      modalShow: false,
      tags: [],
      nameStr: '',
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
      treeData: [{
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
    };
  },
  methods: {
    handleNodeSelect(data) {
      console.log(data);
    },
    modaltrue() {
      this.modalShow = !this.modalShow
    },
    ok() {
      // 点击弹窗确定按钮
      this.$Message.info('点击了确定');
      this.tagsName()
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

    },
    handleNodeClick(data) {
      console.log(data);
      if (data.label === '市场组') {
        this.showLists = true;
      } else {
        this.showLists = false;
      }
    },
    tagsName() {
      let nameStr = ''
      let length = this.tags.length
      for (let i = 0; i < length; i++) {
        nameStr += this.tags[i].name + ','
      }
      this.nameStr = nameStr.substr(0, nameStr.length - 1)
    }
  },
  computed: {
    // tagsName() {
    //   let nameStr = ''
    //   let length = this.tags.length
    //   for (let i = 0; i < length; i++) {
    //     nameStr += this.tags[i].name + ','
    //   }
    //   return nameStr.substr(0, nameStr.length - 1)
    // }
  },
  components: {
    alert
  }
};
</script>
