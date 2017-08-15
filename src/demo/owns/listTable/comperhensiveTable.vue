<template >
<div class="comperhensive-table">
  <div class="table-container">
    <div class="head">
      <span class="left">
           <t-dropdown trigger="click" style="margin-left: 20px;">
            <a href="javascript:void(0)" class="dropdown-title">
              我的联系人(个数)
              <t-icon type="arrow-down-drop"></t-icon>
            </a>
            <t-dropdown-menu slot="list">
              <t-dropdown-item>我的联系人(个数)</t-dropdown-item>
              <t-dropdown-item>我的黑名单(个数)</t-dropdown-item>
              <t-dropdown-item>我的群(个数)</t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown>
          <t-button type="primary">
            <t-icon type="plus-circle-outline" class="btn-icon"></t-icon>
            <span class="ml-2 btn-name">新建联系人</span>
      </t-button>
      </span>
      <t-button icon="view-column" class="select-btn align-middle"></t-button>
      <t-button icon="filter-variant" class="filter-btn align-middle"></t-button>
      <span class="right">
          <t-input v-model="searchVal" icon="magnify" placeholder="搜索..." style="width: 200px;"></t-input>
        </span>
    </div>
    <div class="table">
      <t-table line :columns="MultiSelectcolumns" :data="data">
      </t-table>
    </div>
    <div class="pageNum">
      <t-pager :total="100"></t-pager>
    </div>
  </div>
</div>
</template>

 <script>
 export default {
   data (){
     return {
       searchVal: '',
       MultiSelectcolumns: [
       {
         type: 'selection',
         width: 60,
         align: 'center'
       },
       {
         title: '姓名',
         key: 'name'
       },
       {
         title: '年龄',
         key: 'age'
       },
       {
         title: '地址',
         key: 'address'
       },
       {
         title: '操作',
         key: 'operation',
         width: 150,
         align: 'center',
         render: (h, params) => {
          return h('div',[
                  h('a', {
                    props: {
                      src: 'javascript:;',
                      size: 'sm'
                    },
                    style: {
                      marginRight:'40px'
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                      }
                    }
                  }, '编辑'),
                  h('a', {
                    props: {
                      src: 'javascript:;',
                      size: 'sm',
                    },
                    on: {
                      click: () => {
                        this.remove(params.index)
                      }
                    }
                  }, '删除')
                ])
         }
       }
     ],
     data: [
       {
         name: '王小明',
         age: 18,
         address: '北京市朝阳区芍药居',
         operation: '删除'
       },
       {
         name: '张小刚',
         age: 25,
         address: '北京市海淀区西二旗'
       },
       {
         name: '李小红',
         age: 30,
         address: '上海市浦东新区世纪大道'
       },
       {
         name: '周小伟',
         age: 26,
         address: '深圳市南山区深南大道'
       }
      ]
     }
   },
   methods: {
     edit(index) {
       console.log('编辑')
     },
     remove(index) {
      this.data.splice(index, 1)
     }
   }
 }
 </script>

 <style lang="less">
 .comperhensive-table {
   width: 80%;
   margin: 0 auto;
   padding: 20px;
   background-color: #F2FFFB;
   position: relative;
    .table-container {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding: 20px 20px 0;
      background-color: #fff;
      .head {
        width: 100%;
        margin-bottom: 20px;
        &:after {
          display: block;
          content: '';
          width: 0;
          height: 0;
          visibility: hidden;
          clear: both;
        }
        .left {
          float: left;
          .popover-wrap {
            border-right: solid 1px rgba(7, 17, 27, 0.2);
            .dropdown-title {
              color: #455A74;
              font-weight: 700;
              margin-right: 10px;
            }
          }
          .btn {
            margin-left: 10px;
            .btn-icon {
              line-height: 28px;
            }
            .btn-name {
              line-height: 28px;
            }
          }
        }
        .right {
          float: right;
          white-space: nowrap;
          margin-right: 15px;
        }
        .select-btn,.filter-btn{
          float: right;
          line-height: 28px;
          padding: 0 5px;
        }
        .filter-btn {
          margin-right: 10px;
        }
      }
      .table {
        margin-bottom: 10px;
      }
      .pageNum {
        width: 100%;
        text-align: right;
        .pagination {
          text-align: right;
          margin-right: -20px;
        }
      }
    }
 }
 </style>
e>
