<template>
    <div class="dynamic-form">
        <div class="form-custom" v-for="(item, index) in userList" :key="index">
            <h6>{{item.key}}</h6>
            <item-form :userList="item.formItem"></item-form>
        </div>
    </div>
</template>
<script>
import itemForm from './itemForm'
export default {
    name: 'dynamicForm',
    data() {
        return {
            form: []
        }
    },
    props: {
        userList: {
            type: Array,
            default: []
        }
    },
    components: {
        itemForm
    },
    computed: {

    },
    created() {

    }
}
</script>
<style scoped lang="less">
.form-custom {
    border: 1px solid #dfe5e7;
    h6 {
        margin: 0;
        padding-left: 18px;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb( 51, 51, 51);
        line-height: 2.571;
        background: #f6f8f8;
        border-bottom: 1px solid #dfe5e7;
    }
    &:not(:last-child) {
        margin-bottom: 20px;
    }
}
</style>
