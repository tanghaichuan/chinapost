<template>
    <div class="form-item-wrap">
        <div class="form-block--block" :class="['col-'+row]" v-for="(item, y) in formList" :key="y">
            <t-form-item 
            :label="item.DISP+':'" 
            :label-span="userList.title === '基本信息' ? 1 : 5">
                <span :disabled="isDisabled">{{item.VALUE}}</span>
            </t-form-item>
        </div>
    </div>
</template>
<script>
export default {
    name: "itemWrap",
    data() {
        return {

        }
    },
    props: {
        row: Number,
        formList: {
            type: Array,
            default: []
        },
        userList: {
            type: Array,
            default: []
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    created(){
    
    }
}
</script>
<style scoped lang="less">
.form-item-wrap {
    padding-left: 25px;
    zoom: 1;
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
}

.form-block--block {
    float: left;
}
.form-group {
    margin: 0;
}
</style>
