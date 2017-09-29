<template>
    <div class="customer">
        <!--表单区域-->
        <wrapper icon="&#xe78b;" title="创建个人客户信息" :row="4" :formData="formData"></wrapper>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import wrapper from './wrapper/wrapper'
import bus from './bus'
export default {
    name: "customer",
    data() {
        return {
            formData: {
            },
            data: [
                {   // 基本信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "IND_CUST_BASE_CHA",
                        "queryPurpose": "forUpdate"  //查询用于更新(forUpdate)或只是用于展示详情(forBrowse),目前只有这两种选择。
                    }
                },
                {   // 识别信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "CUST_IDEN_BASE_CHA",
                        "queryPurpose": "forUpdate"  //查询用于更新(forUpdate)或只是用于展示详情(forBrowse),目前只有这两种选择。
                    }
                },
                {   // 地址信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "CUST_ADDR_BASE_CHA",
                        "queryPurpose": "forUpdate"
                    }
                },
                {   // 联系媒介信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "CUST_CONT_MEDIUM_CHA",
                        "queryPurpose": "forUpdate"
                    }
                },
                {   // 客户关系人信息
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "-1",  //客户ID
                        "specCode": "CUST_REL_PERSON_CHA",
                        "queryPurpose": "forUpdate"
                    }
                }
            ]
        }
    },
    components: {
        wrapper
    },
    computed: {
        ...mapGetters('clientManage', {
            getCusFormRenderModel: 'getCusFormRenderModel'
        }),
        ...mapState('clientManage', {
            cusFormList: state => state.cusFormList
        })
    },
    methods: {
        ...mapActions('clientManage', {
            loadFormItem: 'loadFormItem'
        })
    },
    async created() {
        try {
            await this.loadFormItem(this.data)
            // 由store原型得到本地渲染模型
            this.formData = this.getCusFormRenderModel()
        } catch (error) {
            console.error(error);
        }
    }

}
</script>
<style scoped lang="less">

</style>
