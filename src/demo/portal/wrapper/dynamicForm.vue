<template>
    <div class="dynamic-form">
        <!-- 二级表单域 -->
        <div class="form-custom" v-for="(item, index) in userList" :key="index">
            <h6>{{item.name}}</h6>
            <item-form :getValidatePath="getValidatePath+'.'+index+'.formItem'" :isDisabled="isDisabled" :userList.sync="item.formItem"></item-form>
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
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        getValidatePath: String
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
    h6 {
        margin: 0;
        margin-top: -1px;
        padding-left: 18px;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: rgb( 51, 51, 51);
        line-height: 2.571;
        background: #f6f8f8;
        border: 1px solid #dfe5e7;
        border-bottom: transparent;
    }
}
</style>
