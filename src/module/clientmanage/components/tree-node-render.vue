<template>
    <span>
        <span class="float-right">
          <t-dropdown placement="bottom-end" trigger="click">
            <a href="javascript:void(0)">
              操作
              <t-icon type="arrow-down-drop"></t-icon>
            </a>
            <t-dropdown-menu slot="list" class="downbox">
              <t-dropdown-item>
                  <span @click="add">
                      <i class="iconfont float-left mr-3 top-3">&#xe61a;</i>
                      <span style="font-size: 12px"> 增加</span>
                  </span>
              </t-dropdown-item>
              <t-dropdown-item class="edit">
                  <span @click="edit">
                      <span style="font-size: 12px"> 编辑</span>
                      <i class="iconfont float-left mr-3 top-3">&#xe7a1;</i>
                  </span>
              </t-dropdown-item>
              <t-dropdown-item class="cut">
                  <span @click="cut">
                     <i class="iconfont float-left mr-3 top-3">&#xe626;</i>
                      <span style="font-size: 12px"> 删除</span>
                  </span>
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown>
        </span>
        <span class="text-truncate">
            <span>
              <span v-show="!show">  {{nodeName}} </span>
                <span v-show="show">
                    <t-input style="display: inline-block" v-model='value' placeholder="请输入..."></t-input>
                  <span @click="sure">  <t-icon type="check" gradient="primary" size="20" class="mt-1 mr-2"></t-icon></span>
                </span>
            </span>
        </span>
    </span>
</template>
<script>
    let id = 1000;
    export default {

        name: 'tree-node-render',
        props: {
            nodeName: String,
            newStore: null,
            newData: null,
        },
        data() {
            return {
                value: this.nodeName,
                show: false
            }
        },
        mounted() {
            var treeTitle = document.getElementsByClassName('tree__node-title')[0];
            var edit = treeTitle.getElementsByClassName('edit')[0];
            var cut = treeTitle.getElementsByClassName('cut')[0];
            edit.style.display='none';
            cut.style.display='none';

        },
        methods: {
            add() {
                //console.log(this.newStore.data[0].$treeNodeId)
                this.newStore.append({id: id++, label: '新增内容', children: []}, this.newData);
            },
            cut() {
                this.newStore.remove(this.newData);
            },
            edit() {
                this.show = true;
            },
            sure() {
                this.show = false;
                this.nodeName = this.value
                this.$nextTick(
                    function () {
                        this.nodeName = this.value
                    }
                )


            }

        }
    }
</script>
<style lang="less">
    .downbox {
        border: 1px solid #eaeaea;
        border-radius: 5px;
        margin-top: -5px;
    }
    .top-3{
        font-size: 12px;
        margin-top: 3px;
    }
    .dropdown__item{
        padding: 2px 8px;
    }
    .tree__node-title:hover , .downbox >li:hover{
        background: #ecfefc;
    }

</style>