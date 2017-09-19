<template>
    <div class="industry">
        <t-select :title="item.VALUE" @click.native="toggle = true">
        </t-select>
        <div class="industry-container" v-if="toggle" @click="toggle = false">
            <img src="../../../asset/image/extra.png" alt="" @click.stop="toggle = false">
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
    }
}
</script>
<style scoped lang="less">
.industry-container {
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
