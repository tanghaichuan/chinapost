<template>
    <div class="form-item-wrap">
        <div class="form-block--block" :class="['col-'+row]" v-for="(item, y) in userList.formItem[0].formList" :key="y">
            <t-form-item :label="item.DISP+':'" :prop="getValidatePath+'formItem.0.formList.'+ y +'.VALUE'" :rules="{ type: 'number', message: '不合法', trigger: 'change' }" :label-span="userList.title === '基本信息' ? 1 : 5">
                <t-select :disabled="isDisabled" v-model="item.VALUE" :title="item.VALUE" v-if="item.OPER_MODE === '02'">
                    <t-option v-for="(item1, z) in item.ENUM" :value="item1.value" :key="z">{{ item1.value }}</t-option>
                </t-select>
                <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '010'"></t-input>
                <t-input :disabled="isDisabled" v-model="item.VALUE" v-if="item.OPER_MODE === '013'" type="textarea"></t-input>
                <t-date-picker v-model="item.VALUE" v-if="item.OPER_MODE === '014'"></t-date-picker>
                <drop-tree v-if="item.OPER_MODE === '018'"></drop-tree>
            </t-form-item>
        </div>
    </div>
</template>
<script>
export default {
    name: "itemWrap",
    data() {
        return {

        }
    },
    props: {
        userList: {
            type: Array,
            default: []
        },
        path: String
    }

}
</script>
<style scoped lang="less">

</style>
