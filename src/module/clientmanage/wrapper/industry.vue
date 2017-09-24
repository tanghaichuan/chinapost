<template>
    <div class="industry">
        <drop-select :values.sync="item.VALUE" @openToggle="openBox"></drop-select>
        <div class="mask" v-if="toggle"></div>
        <div class="industry-container" v-if="toggle">
            <!-- <img src="../../../asset/image/extra.png" alt=""> -->
            <check-box-tree :toggle.sync="toggle"></check-box-tree>
        </div>
    </div>
</template>
<script>
import dropSelect from 'module/clientmanage/components/dropSelect'
import checkBoxTree from 'module/clientmanage/components/checkBoxTree'
export default {
    name: "Industry",
    data() {
        return {
            toggle: false
        }
    },
    props: {
        item: Array
    },
    components: {
        checkBoxTree,
        dropSelect
    },
    methods: {
        openBox() {
            this.toggle = true
        }
    },
    created() {
 
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

.industry-container {
    position: fixed;
    top: 10%;
    left: 33%;
    z-index: 9999;
}
</style>
