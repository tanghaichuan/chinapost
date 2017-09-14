<template>
  <div class="droptree">
      <t-dropdown trigger="custom" :visible="visible" style="margin-left: 20px" placement="bottom-start">
          <a href="javascript:void(0)" @click="handleOpen">
              <t-input v-model="value4" icon="arrow-down-drop"icon-placement="right" placeholder="占位符" style="width: 200px" ></t-input>
          </a>
          <t-dropdown-menu slot="list">
              <div style="width: 300px" @mouseleave="handleClose">
                  <span><t-input placeholder="输入关键字进行过滤" v-model="filterText" icon="magnify" icon-placement="left" @on-focus="onFocus"></t-input></span>
                  <span><t-tree class="filter-tree" :data="data2" :props="defaultProps" all-expandable :filter-node-method="filterNode" ref="tree2"  is-select @on-select="handleNodeSelect"></t-tree></span>
              </div>
          </t-dropdown-menu>
      </t-dropdown>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                value4:'',
                visible: false,
                filterText: '',
                data2: [{
                    id: 1,
                    label: '一级 ',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },

        methods: {
            handleOpen () {
                this.visible = true
            },
            handleClose () {
                this.visible = false

            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            handleNodeSelect(data){
                 console.log(data)
                this.value4=data.label
            },
            onFocus(){
                this.value4=''
            }
        }
    }
</script>
<style scoped lang="less">

</style>
