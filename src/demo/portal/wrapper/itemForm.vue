<template>
    <div class="item-form">
        <div class="form-block--info col-3"  v-for="(item, index) in userList" :key="index">
            <render-form :user="item"></render-form>
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
.item-form{
    padding-left: 25px;
    background: #fff;
    padding-top: 25px;
}
.form-block--info{
    float: left;
}
.item-form{
    zoom: 1;
    &:after {
        display: table;
        overflow: hidden;
        content: '';
        clear: both;
    }
}
</style>
