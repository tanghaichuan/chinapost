<template>
    <div class="table-edit">
        <t-table border :columns="editColumn" :data="editData"></t-table>
    </div>
</template>
<script>
export default {
    name: 'tableEdit',
    data() {
        return {
            
        }
    },
    props: {
        editData: {
            type: Array,
            default: []
        },
        editColumn: {
            type: Array,
            default: []
        }
    }
}
</script>
<style scoped lang="less">
.table-edit {
    .table__header {
        tr {
            background: #f7f7f7;
            th {
                color: #212121;
            }
        }
    }
    .table-tbody {
        tr {
            td {
                height: 60px;
                cursor: pointer;
                color: #595959;
            }
            &:hover {
                background: #edfdf3;
            }
        }
    }
    .hidden {
        display: none;
    }
}
</style>
