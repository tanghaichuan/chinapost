<template>
    <div class="item-form">
        <!-- 三级表单元素 -->
        <div class="form-block--info col-3" v-for="(item, index) in userList" :key="index">
            <render-form :isDisabled="isDisabled" :user.sync="item"></render-form>
        </div>
    </div>
</template>
<script>
import renderForm from './renderForm'
export default {
    name: 'itemForm',
    data() {
        return {

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
        }
    },
    components: {
        renderForm
    },
    created() {

    }
}
</script>
<style scoped lang="less">
.item-form {
    padding-left: 25px;
    background: #fff;
    padding-top: 25px;
    border: 1px solid #dfe5e7;
}

.form-block--info {
    float: left;
}

.item-form {
    transition: all .2s ease-in-out;
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
}
</style>
