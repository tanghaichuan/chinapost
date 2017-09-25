<template>
    <div class="create-rel-person">
        <div v-show="flod" class="rel-person-container">

        </div>
        <div class="load-more">
            <a href="javascript:;" class="more" @click="loadMore">
                <span v-text="flod ? '收起' : '更多'"></span>
                <t-icon :type="flod ? 'chevron-up' : 'chevron-down'" style="margin-left: -5px;margin-top: 2px;" size="18"></t-icon>
            </a>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
    name: "createRelPer",
    data() {
        return {
            flod: false,
            userList: [],
            cusData: [
                {
                    "systemParams": {
                    },
                    "businessParams": {
                        "customerId": "123",  //客户ID
                        "specCode": "CUST_CONT_MEDIUM_CHA",
                        "queryPurpose": "forUpdate"  //查询用于更新(forUpdate)或只是用于展示详情(forBrowse),目前只有这两种选择。
                    }
                }
            ],
            comData: [

            ]
        }
    },
    mixins: [],
    props: {

    },
    computed: {
        ...mapState({
            cusFormList: state => state.clientManage.cusFormList,
        })
    },
    methods: {
        ...mapActions({
            loadFormItem: 'clientManage/loadFormItem'
        }),
        // 创建个人客户联系人
        loadIndCha() {

        },
        // 创建机构客户联系人
        loadComCha() {

        }
    }
}
</script>
<style scoped lang="less">
.rel-person-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.load-more {
    text-align: right;
    a {
        &:hover {
            span,
            i {
                color: #3DAC6E;
            }
        }
        &:active {
            span,
            i {
                color: #007f3b;
            }
        }
    }
}

.more {
    margin-right: 24px;
    padding-bottom: 14px;
    display: inline-block;
    line-height: 15px;
    text-align: right;
    span {
        padding-right: 5px;
        font-size: 12px;
        font-family: "Microsoft YaHei";
        color: rgb( 0, 146, 65);
    }
}
</style>
