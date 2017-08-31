<template>
    <div class="item-form">
        <render-form v-for="(item, index) in userInfo" :key="index" :user="item"></render-form>
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
        userInfo: Array
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
    zoom: 1;
    &:after{
        display: table;
        overflow: hidden;
        content:'';
        clear: both;
    }
}
</style>
