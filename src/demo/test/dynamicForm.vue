<template>
    <div class="dynamic-form">
        <t-form :model="userList" :rules="listRule" label-position="left" :label-span="3">
            <item-form v-for="(item, index) in userList" :key="index" :userInfo="item"></item-form>
        </t-form>
    </div>
</template>
<script>


import itemForm from './itemForm'
export default {
    name: 'dynamicForm',
    data() {
        return {
            userList: [],
            listRule: {
                NAME: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ]
            },
            userInfo: {
                "CHA": [
                    {
                        "CODE": "NAME",
                        "VALUE": "1",
                        "DISP": '客户编码',
                        "OPER_MODE": "010"
                    },
                    {
                        "CODE": "NAME",
                        "VALUE": "爱因斯坦",
                        "DISP": '客户名称',
                        "OPER_MODE": "010"
                    },
                    {
                        "CODE": "SEX",
                        "VALUE": "M",
                        "DISP": "性别",
                        "OPER_MODE": "02",
                        "ENUM": [
                            {
                                "key": "M",
                                "value": "男"
                            },
                            {
                                "key": "F",
                                "value": "女"
                            },
                            {
                                "key": "U",
                                "value": "其他"
                            }
                        ]
                    },
                    // {
                    //     "CODE": "BIRTH_DATE",
                    //     "VALUE": "1975-09-20",
                    //     "DISP": 3,
                    //     "OPER_MODE": "014"
                    // },
                    // {
                    //     "CODE": "IS_CONTRACT_USER",
                    //     "VALUE": "T",
                    //     "DISP": 1,
                    //     "OPER_MODE": "016"
                    // },
                    {
                        "CODE": "REMARKS",//唯一 id
                        "VALUE": "需要特殊照顾。\n非常重要！",// 值
                        "DISP": '客户编码',
                        "OPER_MODE": "013" //控件类型
                    },
                    // {
                    //     "CODE": "联系地址",
                    //     "VALUE": "北京中关村南路125号",
                    //     "DISP": 2,
                    //     "OPER_MODE": "015"
                    // }
                ]
            },
            form: [

            ]
        }
    },
    components: {
        itemForm
    },
    computed: {

    },
    created() {
        Object.keys(this.userInfo).forEach(item => {
            this.userList.push(this.userInfo[item]);
        })
        console.log(this.userList);
    }
}
</script>
<style scoped lang="less">

</style>
