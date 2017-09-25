<!--
<template>
    <div class="droptree">
        <t-dropdown trigger="custom" :visible="visible" placement="bottom-start">
            <a href="javascript:void(0)" @click="handleOpen" class="choose">
                <t-input v-model="value4" icon="arrow-down-drop" icon-placement="right" placeholder="请选择" class="m"></t-input>
            </a>
            <t-dropdown-menu slot="list" class="dropdownTree">
                <div @mouseleave="handleClose">
                    <span>
                        <t-input placeholder="搜索" v-model="filterText" icon="magnify" icon-placement="right" @on-focus="onFocus" class="search">
                        </t-input>
                    </span>
                    <span>
                        <t-tree class="filter-tree" :data="data2" :props="defaultProps" all-expandable="true" :filter-node-method="filterNode" ref="tree2" is-select @on-select="handleNodeSelect" :render-content="renderContent">

                        </t-tree>
                    </span>
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
                label: '北京市',
                isEdit: false,
                children: [{
                    id: 2,
                    label: '支撑中心',
                    isEdit: false,
                    children: [{
                        id: 4,
                        isEdit: false,
                        label: '市场组'
                    }, {
                        id: 5,
                        isEdit: false,
                        label: '非市场组'
                    }, {
                        id: 6,
                        isEdit: false,
                        label: '总体组'
                    }]
                }]
            }, {
                id: 3,
                label: '网络部',
                isEdit: false,
                children: [{
                    id: 7,
                    isEdit: false,
                    label: '市场组'
                }, {
                    id: 8,
                    isEdit: false,
                    label: '非市场组'
                }, {
                    id: 9,
                    isEdit: false,
                    label: '总体组'
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
            this.visible = false
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        handleNodeSelect(data) {
            this.value4 = data.label
        },
        onFocus() {
            this.value4 = ''
        },
        renderContent(h, { node, data }) {
            return h('span', [
                h('span', {
                    'class': {
                        'hidden': data.isEdit
                    },
                    style: {
                        'display': 'inline-block',
                        'width': '200px',
                    }
                }, [
                        h('span', {
                            style: {
                                'display': 'inline-block',
                                'width': '160px',
                                'overflow': 'hidden',
                                'text-overflow': 'ellipsis',
                                'white-space': 'nowrap'
                            }
                        }, data.label),
                        h('t-tooltip', {
                            props: {
                                content: '点击编辑文字内容',
                                placement: "top-start"
                            },
                            style: {
                                'margin-left': '10px'
                            }
                        }, [h('t-icon', {
                            props: {
                                type: 'lead-pencil',

                                gradient: 'primary',
                            },
                            style: {
                                'cursor': 'pointer',
                                'margin-top': '-4px'
                            },
                            'class': {
                                'hidden': !data.isEdit
                            },
                            nativeOn: {
                                click: function() {
                                    data.isEdit = true
                                },
                            },

                        }),]),

                    ]),
                h('span', {
                    'class': {
                        'hidden': !data.isEdit
                    }
                }, [
                        h('t-input', {
                            props: {
                                placeholder: '请输入..',
                                value: data.label
                            },
                            style: {
                                width: '150px',
                                display: 'inline-block',
                                'margin-left': '5px'
                            },
                            on: {
                                input: function(value) {
                                    data.label = value
                                }
                            }

                        }),
                        h('t-tooltip', {
                            props: {
                                content: '点击保存已编辑内容',
                                placement: "top-start"
                            },
                            style: {
                                'margin-left': '10px'
                            }
                        }, [h('t-icon', {
                            props: {
                                type: 'check',
                                gradient: 'primary',
                                size: 20,

                            },
                            style: {
                                'cursor': 'pointer',
                                'margin-top': '0px'
                            },
                            nativeOn: {
                                click: function() {
                                    data.isEdit = false
                                }
                            },


                        })]),

                    ])

            ])

        },
    }
}
</script>
<style lang="less">
 .dropdownTree {
     padding: 6px 7px !important;
     background: #fff;
     box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.20);
     border-radius: 4px;
     .search {
         width: 236px;
         background: #FFFFFF;
         height: 26px !important;
     }
     .input-wrapper>input {
         height: 26px !important;
         font-size: 12px;
     }
     .tree__node-content {
         padding-left: 9px;
     }
     .tree__node-content&#45;&#45;checked {
         background: #EEFEF3;
         border-left: none;
         border-right: 0;
         font-family: MicrosoftYaHei;
         font-size: 12px;
         color: #000000;
     }
     .tree li {
         padding: 3px 0;
     }
     .input,
     .select .dropdown-input {
         font-size: 12px !important;
     }
 }

 .hidden {
     display: none !important;
 }

 .tree__node-content:hover {
     background: #EEFEF3 !important;
     .aid-lead-pencil {
         display: inline-block !important;
     }
 }

 .input {
     font-size: 12px !important;
 }

 .dropdown__menu {
     box-shadow: none !important;
 }

 .input-group-icon.input-group-icon&#45;&#45;right+.input-wrapper .input,
 {
     padding-left: 0;
 }
</style>
-->


<template>
    <div>
        <t-button @click="modal = true" class="ss" style="display: inline-block;width: 217.8px">
            <t-input v-model="valuedata"
                     style="width: 217.8px;display: inline-block;"
                     class="a-input"
                     icon="chevron-down"
                     icon-placement="right">

            </t-input>
        </t-button>
        <t-modal
                v-model="modal"
                title="机构选择"
                @on-ok="ok"
                style="width: 480px"
                @on-cancel="cancel">
            <div style="width: 500px;" class="actionableTree">
                <t-input placeholder="搜索" v-model="filterText" icon="magnify" icon-placement="right"
                         style="width: 440px"></t-input>
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
            onselect(data){
                this.valuedata=data.label
            }
        }
    };
</script>
<style lang="less">
    .actionableTree {
        padding-right: 15px;
    }

    .modal-footer {
        padding: 10px 10px;
        border-top: 1px solid #eaeaea;
    }

    .tree__node-content--checked {
        border-left: none !important;
    }

    .modal-header {
        background: #FFFFFF !important;
        border-bottom: 1px solid #eaeaea;
    }

    .modal-title {
        font-size: 14px;
    }

    .modal-title, .close > span {
        color: #455a74;
    }

    .modal-content {
        width: 480px;
    }

    .modal-body {
        overflow-x: hidden !important;
    }

    .a-input {
        padding: 0px !important;
        input {
            width: 217.8px;
            padding: 0 !important;
            margin-left: -16px;
            margin-top: -1px;
            font-size: 12px;
            padding-left: 10px !important;
        }

    }

    .ss >span   i:before {
        margin-right: 35px !important;
    }


</style>


