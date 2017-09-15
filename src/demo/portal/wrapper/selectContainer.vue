<template>
    <div class="select-container">
        <t-select :title="item.VALUE" @click.native="toggle = true">
        </t-select>
        <div class="mask" v-if="toggle" @click="toggle = false">
            <img src="../../../asset/image/extra.png" alt="" @click.stop="toggle = false">
        </div>
    </div>
</template>
<script>
export default {
    name: 'selectContainer',
    data() {
        return {
            toggle: false
        }
    },
    props: {
        item: Object
    },
    methods: {
        open() {
            toggle = true
        },
        close() {
            
        }
    }
}
</script>
<style scoped lang="less">
.mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.6);
    img {
        position: relative;
        left: 30%;
    }
}
</style>
