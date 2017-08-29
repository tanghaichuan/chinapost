<style scoped lang="less">
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    th, td {
        padding: 0;
    }

    .highquery {

        .name {
            text-align: right;
        }

        .name::before {
            content: "*";
            display: inline-block;
            margin-left: 4px;

            font-size: 12px;
            color: #FF5F5F;
        }
    }
    .bor-table{
        height: 16px;
    }
    .name{
        margin-right: 8px;
        margin-left: 16px;
    }
    .form{
        border: 1px dashed #DDDAD6;
        padding: 1rem;
    }


</style>
<template>
    <div class="highquery">
        <div class="clearfix" v-show="hide">
            <t-input v-model="value4" icon="aid-account-search" icon-placement="right" placeholder="请输入用户名..." style="width: 200px" class="float-left"></t-input>
            <p class="float-left text-primary" @click="showAll" >高级查询</p>
        </div>

        <t-form :model="formItem" class="form" v-show="show">
            <table>
                <tr class="tr">
                    <td>
                        <div class="name" >名字较长的标签:</div>
                    </td>
                    <td>
                        <t-input placeholder=""v-model="data"></t-input>
                    </td>
                    <td>
                        <div class="name">名字较长的标签:</div>
                    </td>

                    <td>
                        <t-input placeholder=""v-model="data"></t-input>
                    </td>
                    <td>
                        <div class="name">名字较长的标签:</div>
                    </td>

                    <td>
                        <t-input placeholder="" v-model="data"></t-input>
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="bor-table"></td>
                </tr>
                <tr>
                    <td>
                        <div class="name">标签:</div>
                    </td>

                    <td>
                        <t-input placeholder=""v-model="data"></t-input>
                    </td>
                    <td>
                        <div class="name">标签:</div>
                    </td>

                    <td>
                        <t-input placeholder=""v-model="data"></t-input>
                    </td>
                    <td>
                        <div class="name">标签:</div>
                    </td>

                    <td>
                        <t-input placeholder="" v-model="data"></t-input>
                    </td>
                </tr>
                <tr>
                    <td colspan="6" class="bor-table"></td>
                </tr>
                <tr>
                    <td>
                        <div class="name">标签:</div>
                    </td>
                    <td colspan="3">
                        <t-input placeholder="" v-model="data"></t-input>
                    </td>

                </tr>
                <tr>
                    <td colspan="6" class="bor-table"></td>
                </tr>
                <tr>
                    <td colspan="4">

                    </td>
                    <td colspan="2" class="clearfix">
                        <div class="float-right">
                            <t-button type="primary" class="">搜索</t-button>
                            <t-button class="ml-2"type="outline-primary" @click="empty">清空</t-button>
                            <a href="javascript:void(0);" class="ml-2 text-primary" @click="simpleQuery">简易搜索</a>
                        </div>

                    </td>
                </tr>
            </table>


        </t-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formItem: {
                    input: ''
                },
                data:'',
                show:true,
                hide:true
            }
        },
        methods:{
            empty(){
                this.data=''
            },
            showAll(){
                this.show=true
                this.hide=false
            },
            simpleQuery(){
                this.show=false
                this.hide=true
            }
        }
    }
</script>
