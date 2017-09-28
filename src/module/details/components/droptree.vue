<template>
<t-tree 
    class="filter-tree" 
    :data="data2"
    node-key="id" 
    :props="defaultProps" 
    :default-checked-keys="[4]" 
    is-select  
    all-expandable='true'>
</t-tree>
</template>
<script>
export default {
    name: 'dropTree',
    data() {
        return {
            data2: [{
                id: 1,
                label: '北京市',
                children: [{
                    id: 3,
                    label: '支撑中心',
                    children: [{
                        id: 7,
                        label: '市场组'
                    }, {
                        id: 8,
                        label: '非市场组'
                    }, {
                        id: 9,
                        label: '总体组'
                    }]
                }]
            }, {
                id: 2,
                label: '网络部',
                children: [{
                    id: 4,
                    label: '市场组'
                }, {
                    id: 5,
                    label: '非市场组'
                }, {
                    id: 6,
                    label: '总体组'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
       
    }
}
</script>
<style lang="less" scoped>

</style>
