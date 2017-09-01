<template>
    <t-form-item :label="user.DISP" prop="NAME">
        
        <t-select v-if="user.OPER_MODE === '02'">
            <t-option v-for="item in user.ENUM" :value="item.key" :key="item">{{ item.value }}</t-option>
        </t-select>

        <t-input v-if="user.OPER_MODE === '010'"></t-input>

        <t-input v-if="user.OPER_MODE === '013'" type="textarea"></t-input>

        <t-date-picker v-if="user.OPER_MODE === '014'"  placeholder="please select date"></t-date-picker>
    </t-form-item>
</template>
<script>
// 说明：
// 1.  特征值数据类型目前定义如下：
// 01--文本
// 02--数字
// 03--日期

// 2. 操作方式目前定义如下：
// 010--手工录入单行：
// 012--手工录入密码：当用户输入密码时，以特殊字符替代密码字符进行展示；
// 013--手工录入多行：需要多行录入的文本
// 014--手工录入日期：录入日期
// 015--手工录入纯数字：
// 016--手工录入逻辑值：录入只有真假两种选择的值（即check box）
// 02--枚举值选择：录入枚举值

// 3. CODE希望能作为界面控件的id或name，以便作为选择器定位控件的凭据。因为前台针对这些控件还是有些代码要写的
// 4. ENUM_NAME的用处是，将来可能重复的枚举值就重新送了，以节约网络流量。
// const INPUT = '010',
//     PASSWORD = '012',
//     TEXTAREA = '013',
//     SELECT = '02',
//     TIME = '014',
//     CHECKBOX = '016';
export default {
    name: 'renderForm',
    data() {
        return {
            tagList: []
        }
    },
    props: {
        user: Object
    },
    methods: {

    },
    created() {
       
    },
    mounted() {

    }
    
}
</script>
<style scoped lang="less">

</style>
