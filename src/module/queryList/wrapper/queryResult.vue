<template>
    <div class="query-result">
        <t-table class="query-table" :columns="column" :data="data"></t-table>
    </div>
</template>
<script>
export default {
    name: 'queryResult',
    data() {
        return {

        }
    },
    props: {
        column: {
            type: Array,
            default: []
        },
        data: {
            type: Array,
            default: []
        }
    }
}   
</script>
<style scoped lang="less">
.query-result {
    margin-bottom: 20px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    .table--border th {
        border-left: 0;
    }
    .table th {
        width: 16.666666%;
        font-size: 12px;
        font-weight: 400;
        color: #000;
        text-align: left;
        text-indent: 7px;
    }
    thead {
        line-height: 40px;
        background: #f7f7f7
    }
    tbody tr {
        line-height: 60px;
        border-bottom: 1px solid #e9e9e9;
    }
    .table__body {
        .table__cell--text {
            padding-left: 14px;
            opacity: 0.8;
            font-size: 12px;
            color: #000;
        }
    }
    .table-body-iden_cell--text {
        margin: 0;
        line-height: 30px;
        font-size: 12px;
        color: #000;
        text-indent: 14px;
        opacity: 0.8;
    }
    .table-body-name_cell--text {
        color: #1f90e6;
        font-size: 12px;
        cursor: pointer;
        opacity: 0.8;
        &:hover {
            text-decoration: underline;
        }
    }
    .iconClient {
        font-size: 20px;
        vertical-align: top;
        margin-right: 4px;
        color: #007f3b;
    }
}

.query-table .table th {
    width: 16.666666%;
    font-size: 12px;
    color: #000;
    text-align: left;
    text-indent: 25px;
}
</style>
