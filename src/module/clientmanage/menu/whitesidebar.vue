<template>
    <div :class="['layout-sidebar bg-gray-darker',{'layout-sidebar--folded': isOpen===false}]">
        <div href="#" class="layout-logo-left">
            <!-- logo  -->
            <t-tooltip content="主页" placement="bottom">
                <a href="/portal" class="layout-logo mr-4">
                    <img src="../../../asset/image/logo.png" width="130" alt="" v-if="isOpen">
                    <img src="../../../asset/image/logo2.png" width="130" alt="" v-if="!isOpen" style="width: 32px; position:relative;left:-3px;">
                </a>
            </t-tooltip>
        </div>
        <t-menu theme="dark" :open-position="openPosition" :class="[{'menu--folded': isOpen===false}]">
            <t-submenu :name="x" v-for="(item1, x) in menuList" :key="x" class="first">
                <template slot="title">
                    <i class="iconfont" v-html="item1.icon"></i>
                    <span ref="parMenu">{{item1.name}}</span>
                </template>
                <t-submenu v-if="item2.children" :name="`${x}-${y}`" v-for="(item2, y) in item1.children" :key="y" class="sec">
                    <template slot="title">
                        <span>{{item2.name}}</span>
                    </template>
                    <t-menu-item :name="`${x}-${y}-${z}`" v-for="(item3, z) in item2.children" :key="z" @click.native="getMenu(item3)">{{item3.name}}</t-menu-item>
                </t-submenu>
                <t-menu-item :name="`${x}-${y}`" v-if="!item2.children" v-for="(item2, y) in item1.children" :key="y" @click.native="getMenu(item2)">
                    {{item2.name}}
                </t-menu-item>
            </t-submenu>
        </t-menu>
    </div>
</template>
<script>
export default {
    name: "whiteSideBar",
    data() {
        return {

        }
    },
    props: {
        isOpen: {
            type: Boolean,
            default: true
        },
        openPosition: String,
        menuList: {
            type: Array,
            default: []
        }
    },
    methods: {
        getMenu(item) {
            this.$router.push({ path: `/portal${item.url}` });
            // this.currentMenu = item.name;
            this.$emit('changeCurrentMenu', item.name)
            //this.parMenu = e.target.parentNode.parentNode.querySelector("span").innerHTML
        },
    }
}
</script>
<style scoped lang="less">

</style>
