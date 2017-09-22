<template>
    <div class="customer">
        <!--表单区域-->
        <img :src="imgUrl1" height="822" width="1180" alt="" v-on:click="changeImg" v-show="!showImg">

        <a :href="link" v-on:click="changePage">
            <img v-show="showImg" :src="imgUrl2" height="822" width="1180" alt="" v-on:click="changeImg">
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
            link: '',
            showImg: false
        }
    },
    methods: {
        changeImg() {
            this.showImg = !this.showImg
        },
        changePage() {
            this.$router.push('/client/customer');
            // this.link = '/client/customer'
        }
    }
}
</script>
<style scoped lang="less">
.customer {
    a {
        display: block;
    }
    img {
        width: 100%;
    }
}
</style>
