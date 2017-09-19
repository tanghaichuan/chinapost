<template>
    <div class="droptree">
        <t-dropdown trigger="custom" :visible="visible" placement="bottom-start">
            <a href="javascript:void(0)" @click="handleOpen" class="choose">
                <t-input v-model="value4" icon="arrow-down-drop" icon-placement="right" placeholder="请选择"
                         class="m"></t-input>
            </a>
            <t-dropdown-menu slot="list" class="dropdownTree">
                <div @mouseleave="handleClose">
                    <span>
                        <t-input placeholder="搜索" v-model="filterText" icon="magnify" icon-placement="right"
                                 @on-focus="onFocus" class="search">
                        </t-input>
                    </span>
                    <span>
                        <t-tree
                                class="filter-tree"
                                :data="data2"
                                :props="defaultProps"
                                all-expandable="true"
                                :filter-node-method="filterNode"
                                ref="tree2"
                                is-select
                                @on-select="handleNodeSelect"
                                :render-content="renderContent">

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
                //this.visible = false
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
            renderContent(h, {node, data}) {
                return h('span', [
                    h('span', {
                        'class': {
                            'hidden': data.isEdit
                        },
                        style:{
                            'display':'inline-block',
                            'width': '200px',

                        }
                    }, [
                        h('span', {
                            style: {
                                'display': 'inline-block',
                                'width': '100px',
                                'overflow': 'hidden',
                                'text-overflow': 'ellipsis',
                                'white-space': 'nowrap'
                            }
                        }, data.label),
                        h('t-icon', {
                            props: {
                                type: 'lead-pencil',
                                size: 'sm',
                                gradient: 'primary',
                            },
                            style: {
                                'cursor': 'pointer',
                                'margin-left': '70px'
                            },
                            'class': {
                                'hidden': !data.isEdit
                            },
                            nativeOn: {
                                click: function () {
                                    data.isEdit = true
                                },
                            },

                        }),
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
                                'margin-right': '15px',
                                'margin-left': '5px'
                            },
                            on: {
                                input: function (value) {
                                    data.label = value
                                }
                            }

                        }),
                        h('t-icon', {
                            props: {
                                type: 'check',
                                gradient: 'primary',
                                size: 20,

                            },
                            style: {
                                'cursor': 'pointer',
                                'margin-top': '5px'
                            },
                            nativeOn: {
                                click: function () {
                                    data.isEdit = false
                                }
                            },


                        })
                    ])

                ])

            },
        }
    }
</script>
<style lang="less"> .choose {
    .input-group {
        width: 248px !important;
        margin-left: 6px;
    }
}

.dropdownTree {
    width: 252px;
    padding: 6px 7px !important;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.20);
    border-radius: 4px;
    .search {
        width: 236px;
        background: #FFFFFF;
        height: 26px !important;
    }
    .input-wrapper > input {
        height: 26px !important;
        font-size: 12px;
    }
    .tree__node-content {
        padding-left: 9px;
    }
    .tree__node-content--checked {
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
    .input, .select .dropdown-input {
        font-size: 12px !important;
    }

}

.hidden {
    display: none !important;
}

.tree__node-title:hover {
    background: #EEFEF3 !important;
    .aid-lead-pencil {
        display: inline-block !important;
    }
}

.input {
    font-size: 12px !important;
}
</style>
