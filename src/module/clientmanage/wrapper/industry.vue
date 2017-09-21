<template>
    <div class="industry">
        <t-select :title="item.VALUE" @click.native="openBox">
        </t-select>
        <div class="mask" v-if="toggle" @click="closeBox"></div>
        <div class="industry-container" v-if="toggle">
            <!-- <img src="../../../asset/image/extra.png" alt=""> -->
            <check-box-tree></check-box-tree>
        </div>
    </div>
</template>
<script>
import checkBoxTree from 'module/clientmanage/components/checkBoxTree'
export default {
    name: "Industry",
    data() {
        return {
            toggle: false
        }
    },
    props: {
        item: Object
    },
    components: {
        checkBoxTree
    },
    methods: {
        openBox() {
            this.toggle = true
        },
        closeBox() {
            this.toggle = false
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
.industry-container{
    position: fixed;
    top: 10%;
    left: 33%;
    z-index: 9999;
}
</style>
