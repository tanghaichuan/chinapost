<template>
    <div class="droptree">
        <t-dropdown trigger="custom" :visible="visible" style="margin-left: 20px" placement="bottom-start">
            <a href="javascript:void(0)" @click="handleOpen" class="clicked">
                <t-input v-model="value4" icon="arrow-down-drop" icon-placement="right" placeholder="占位符"
                         style="width: 248px"></t-input>
            </a>
            <t-dropdown-menu slot="list" class="dropdownTree">
                <div @mouseleave="handleClose">
                    <span><t-input placeholder="搜索" v-model="filterText" icon="magnify" icon-placement="right"
                                   @on-focus="onFocus" class="search"></t-input></span>
                    <span><t-tree class="filter-tree" :data="data2" :props="defaultProps" all-expandable
                                  :filter-node-method="filterNode" ref="tree2" is-select
                                  @on-select="handleNodeSelect"></t-tree></span>
                </div>
            </t-dropdown-menu>
        </t-dropdown>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value4: '',
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
            handleOpen() {
                this.visible = true
            },
            handleClose() {
                //this.visible = false

            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            handleNodeSelect(data) {
                console.log(data)
                this.value4 = data.label
            },
            onFocus() {
                this.value4 = ''
            }
        }
    }
</script>
<style lang="less">


        .dropdownTree {
            width: 248px;
            padding: 6px 7px !important;
            background: #FFFFFF;
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.20);
            border-radius: 4px;
            .search {
                width: 236px;
                background: #FFFFFF;
                height: 26px !important;


            }
            .input-wrapper > input{
                height: 26px !important;
            }
            .tree__node-content{
                padding-left: 9px;
            }
            .tree__node-content--checked {
                background: #eefff4;
                border-left: none;
                border-right: 0;
                font-family: MicrosoftYaHei;
                font-size: 12px;
                color: #000000;
            }

        }


    /*.dropInput .input-group{
        width: auto!important;
    }
    .dropdown__menu{
        margin-top: 6px;
        background: #FFFFFF;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.20);
        border-radius: 4px;
    }
    .dropdownTree {
        width: 248px !important;
        padding: 7px 6px;
        background: #FFFFFF;

    }
    .search {
        width: 236px;
        height: 26px !important;
    }
    .tree__node , .tree__node--open{
        padding-left: 6px!important;
    }*/


</style>
