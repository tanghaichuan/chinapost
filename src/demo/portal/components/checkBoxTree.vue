<template>
    <div class="checkBoxTree">
        <t-input placeholder="输入关键字进行过滤" v-model="filterText" icon="magnify" icon-placement="right"></t-input>
        <t-tree
            class="filter-tree"
            :data="data2"
            :props="defaultProps"
            all-expandable
            :filter-node-method="filterNode"
            is-check
            ref="tree2"></t-tree>
    </div>
</template>
<script>
    export default {
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },

        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        created(){
            axios.get('/mock/tree').then(function (response) {
                console.log(response);
            }).catch(function (error) {

            });
        },

        data() {
            return {
                filterText: '',
                data2: [{
                    id: 1,
                    label: '农、林、牧、渔业',
                    children: [{
                        id: 4,
                        label: '农业',
                        children: [{
                            id: 9,
                            label: '谷物种植',
                            children: [{
                                id: 11,
                                label: '稻谷种植'
                            }, {
                                id: 12,
                                label: '小麦种植'
                            }, {
                                id: 13,
                                label: '玉米种植'
                            }]
                        }, {
                            id: 14,
                            label: '豆类，油料和薯类种植'
                        }, {
                            id: 15,
                            label: '棉、麻、油、烟草种植'
                        }, {
                            id: 16,
                            label: '蔬菜、食用菌及园艺作物种植'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '林业',
                }, {
                    id: 3,
                    label: '畜牧业',
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }
    };
</script>
<style lang="less">
    .checkBoxTree {
        width: 400px;
        margin:100px;
        .filter-tree {
            padding-top:15px;
            .form-checkbox {
                margin-right: 5px;
            }
            .form-checkbox--checked+.tree__node-title--toggle+.tree__node-text {
                background-color: #ecfef3;
            }           
            .tree__node-title--toggle:before {
                padding: 0;
                margin-left:-12px;
            }
        }  
    }

</style>





