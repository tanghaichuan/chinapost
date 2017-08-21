<style scoped lang="scss">
    .alignment {
        padding: 16px;
    }

    .bor-table {
        height: 24px;
    }

    .name::before {
        content: "*";
        display: inline-block;
        margin-left: 4px;

        font-size: 12px;
        color: #FF5F5F;
    }

</style>
<template>
    <t-form class=" alignment">
        <table>
            <tr>
                <td><span class="name">生效方式：</span></td>
                <td>
                    <t-input v-model="value" placeholder="" style="width: 300px"></t-input>
                </td>
                <td>
                    <t-date-picker style="width:250px" v-model="singleDateTimeVal" type="dateTime"
                                   v-on:date-change="onChange" placeholder="输入时间"></t-date-picker>
                </td>
            </tr>
            <tr class="bor-table">
                <td colspan="3"></td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">
                    <t-button type="info">提交</t-button>
                    <t-button class="ml-2" @click="cancel">取消</t-button>
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
