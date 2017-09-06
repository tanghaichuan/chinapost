<template>
    <div class="dynamic-form">
        <h5>{{title}}</h5>
        <div class="form-custom" v-for="(item, index) in userList" :key="index">
            <item-form 
            :id="id ? id : item.id"
            :isExtend="item.isExtend" 
            :isCollapse="item.isCollapse" 
            :title="item.name" 
            :getValidatePath="getValidatePath+'.'+index+'.formItem'" 
            :isDisabled="isDisabled" 
            :userList.sync="item.formItem"></item-form>
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
        isExtend: {
            type: Boolean,
            default: false
        },
        isCollapse: {
            type: Boolean,
            default: false
        },
        id: String,     // 表单标识
        title: String,
        getValidatePath: String
    },
    components: {
        itemForm
    },
    computed: {

    },
    methods:{
        addFormList(){}
    },
    created() {

    }
}
</script>
<style scoped lang="less">
.dynamic-form {
    h5 {
        font-size: 16px;
        margin-bottom: 15px;
    }
}
.form-top {
    width: 100%;
    height: 47px;
    display: flex;
    align-items: center;
}
.form-custom {
    h6 {
        margin: 0;
        margin-top: -1px;
        padding-left: 18px;
        font-size: 14px !important;
        font-family: "NotoSansSC-Regular";
        font-weight: 400;
        color: inherit;
        background: #f6f8f8;
        border: 1px solid #dfe5e7;
        border-bottom: transparent;
    }
}
</style>
