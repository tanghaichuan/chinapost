<template>
    <div class="checkBoxTree">
        <div class="box-top">
            <h4>选择行业</h4>
            <i class="iconfont">&#xe60a;</i>
        </div>
        <div class="box-container">
            <t-input 
            placeholder="搜索"
            v-model="filterText" 
            icon="magnify" 
            icon-placement="right"></t-input>
            <t-tree 
            class="filter-tree" 
            :data="industryData" 
            :props="defaultProps" 
            all-expandable 
            :filter-node-method="filterNode" 
            is-check 
            ref="tree"></t-tree>
        </div>
    </div>
</template>
<script>
export default {
    name: 'checkBoxTree',
    data() {
        return {
            filterText: '',
            industryData: [{
                id: 1,
                label: '农、林、牧、渔业',
                children: [{
                    id: '',
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
    },
    computed: {

    },
    watch: {
        filterText(val) {
            console.log(val);
            this.$refs.tree.filter(val);
        }
    },

    methods: {
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        }
    },
    created() {
        // axios.get('/mock/tree').then(function (response) {
        //     console.log(response);
        // }).catch(function (error) {

        // });
    }
};
</script>
<style lang="less">
.checkBoxTree {
    padding-top: 0;
    margin: 0 auto;
    width: 400px;
    background: #fff;
    position: relative;
    z-index: 99999;
    h4 {
        display: inline-block;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb( 89, 89, 89);
        line-height: 50px;
    }
    .box-top {
        padding: 0 0 0 25px;
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #f1f1f1;
        i {
            position: absolute;
            right: 25px;
            display: inline-block;
            font-size: 8px;
            color: #999999;
            float: right;
        }
    }
    .box-container {
        padding: 25px;
    }
    .filter-tree {
        padding-top: 15px;
        .form-checkbox {
            margin-right: 5px;
        }
        .form-checkbox--checked+.tree__node-title--toggle+.tree__node-text {
            background-color: #ecfef3;
        }
        .tree__node-title--toggle:before {
            padding: 0;
            margin-left: -12px;
        }
    }
}
</style>





