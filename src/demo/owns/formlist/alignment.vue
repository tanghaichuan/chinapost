<style  lang="scss">
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    th, td {
        padding: 0;
    }
    .input, .select .dropdown-input{
        margin-right: 16px !important;
    }
    .alignment {
        padding: 16px;
    }

    .bor-table {
        height: 22px;
    }
    .dropdown__toggle{
        margin-left: 16px !important;
    }
    .name::before {
        content: "*";
        display: inline-block;
        margin-left: 4px;

        font-size: 12px;
        color: #FF5F5F;
    }
    .input, .select .dropdown-input{
        height: 28px;
    }
    .cancel{
        color:#009241;
        border-color: #009241;;
    }

</style>
<template>
    <t-form class=" alignment">
        <table>
            <tr>
                <td><span class="name">生效方式：</span></td>
                <td>
                    <t-input v-model="value" placeholder="" style="width: 200px"></t-input>
                </td>
                <td>
                    <t-date-picker style="width:200px;" v-model="singleDateTimeVal" type="dateTime"
                                   v-on:date-change="onChange" placeholder="输入时间" class=""></t-date-picker>
                </td>
            </tr>
            <tr class="bor-table">
                <td colspan="3"></td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">
                    <t-button type="primary">提交</t-button>
                    <t-button class="ml-2 cancel" @click="cancel" type="outline-primary">取消</t-button>
                </td>

            </tr>
        </table>

    </t-form>
</template>
<script>
    export default {
        data() {
            return {
                value: '',
                singleDateTimeVal: ''
            }
        },
        methods: {
            cancel() {
                this.value = '';
                this.singleDateTimeVal = ''
            }

        }
    }
</script>



