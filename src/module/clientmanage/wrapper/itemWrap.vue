<template>
    <div class="form-item-wrap">
        <div class="form-block--block" :class="['col-'+row]" v-for="(item, y) in formList" :key="y">
            <t-form-item 
            :label="item.DISP+':'" 
            :prop="path+ y +'.VALUE'" 
            :rules="{ required: item.REQUIRE, message: '请输入'+item.DISP, trigger: 'blur' }" 
            :label-span="userList.title.indexOf('基本信息')!==-1 ? 1 : 5">
                <t-select :disabled="isDisabled" v-model="item.VALUE" :title="item.VALUE" v-if="item.OPER_MODE === '02'">
                    <t-option v-for="(item1, z) in item.ENUM" :value="item1.value" :key="z">{{ item1.value }}</t-option>
                </t-select>
                <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '010'"></t-input>
                <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '013'" type="textarea"></t-input>
                <t-date-picker v-model="item.VALUE" v-if="item.OPER_MODE === '014'"></t-date-picker>
                <drop-tree v-if="item.OPER_MODE === '018'" v-model="item.VALUE"></drop-tree>
                <industry v-if="item.OPER_MODE === '017'" v-model="item.VALUE"></industry>
            </t-form-item>
        </div>
    </div>
</template>
<script>
const industry = () => import('./industry')
const dropTree = () => import('../components/droptree')
export default {
    name: "itemWrap",
    data() {
        return {

        }
    },
    props: {
        row: Number,
        formList: {
            type: Array,
            default: []
        },
        userList: {
            type: Array,
            default: []
        },
        path: String,
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    components: {
        industry,
        dropTree
    },
    watch: {
        
    },
    created() {
 
    }
}
</script>
<style scoped lang="less">
.form-item-wrap {
    padding-left: 25px;
    zoom: 1;
    &:after {
        content: '';
        display: table;
        clear: both;
        overflow: hidden;
    }
}

.form-block--block {
    float: left;
}
</style>
