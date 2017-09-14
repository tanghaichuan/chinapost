<template>
    <nav class="navbar  navbar-expand-lg bg-white layout-nav--top">
        <a href="javascript:;" class="mr-auto">
            <i class="aid aid-menu text-xxl text-gray" @click="openOrClose"></i>
        </a>
        <form class="form-inline">
            <t-input icon="magnify" size="sm" placeholder="搜索..."></t-input>
        </form>
        <a class="nav-link" href="#">
            <i class="aid aid-help-circle-outline"></i>
            <span>帮助</span>
        </a>
        <t-dropdown trigger="click">
            <t-badge>
                <t-avatar dot-state="danger" text="HC" size="sm"></t-avatar>
            </t-badge>
            <t-dropdown-menu slot="list">
                <t-dropdown-item>Action</t-dropdown-item>
                <t-dropdown-item>Another action</t-dropdown-item>
                <t-dropdown-item>Something else here</t-dropdown-item>
            </t-dropdown-menu>
        </t-dropdown>
    </nav>
</template>
<script>
export default {
    name: "",
    data() {
        return {

        }
    },
    props: {
        isOpen: {
            type: Boolean,
            default: true
        },
        openPosition: String
    },
    methods: {
        openOrClose() {
            this.$emit('toggleSideBar', this.isOpen, this.openPosition)
        },
    }
}
</script>
<style scoped lang="less">

</style>
