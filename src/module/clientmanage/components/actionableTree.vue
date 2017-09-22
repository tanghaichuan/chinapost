
<template>
    <div>
        <t-button type="primary" @click="modal = true">点击显示模态框</t-button>
        <t-modal
                v-model="modal"
                title="机构选择"
                @on-ok="ok"
                @on-cancel="cancel">
            <div style="width: 500px;" class="actionableTree">
                <t-input placeholder="输入关键字进行过滤" v-model="filterText"></t-input>
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
            }
        }
    };
</script>
<style lang="less">
    .actionableTree{
        padding-right: 15px;
    }
    .modal-footer{
        padding: 10px 10px;
        border-top: 1px solid #eaeaea;
    }
    .tree__node-content--checked{
        border-left: none;
    }


</style>


