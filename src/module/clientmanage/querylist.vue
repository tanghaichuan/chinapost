<template>
    <div class="customer">
        <!--表单区域-->
        <img :src="imgUrl1" height="822" width="1180" alt="" v-on:click="changeImg" v-show="showImg">

        <a :href="link" v-on:click="changePage">
            <img :src="imgUrl2" height="822" width="1180" alt="" v-on:click="changeImg">
        </a>
    </div>
</template>
<script>

export default {
    name: "customer",
    data() {
        return {
            imgUrl1: require('../../asset/image/query1.png'),
            imgUrl2: require('../../asset/image/query2.png'),
            link:'',
            showImg: true
        }
    },
    methods:{
        changeImg(){
            this.showImg = false
        },
        changePage(){
            this.link = '/client/customer'
        }
    }
}
</script>
<style scoped lang="less">
a{
    display: block;
}
</style>
