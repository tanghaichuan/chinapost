<style scoped lang="scss">
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    th, td {
        padding: 0;
    }

    .alignment {
        border: 1px dashed #DDDAD6;
        padding: 1rem;
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


</style>
<template>
    <div class="alignment">
        <t-form :model="formItem" class="form">
            <table>
                <tr class="tr">
                    <td>
                        <div class="name">名字较长的标签:</div>
                    </td>
                    <td>
                        <t-input placeholder=""></t-input>
                    </td>
                    <td>
                        <div class="name">名字较长的标签:</div>
                    </td>

                    <td>
                        <t-input placeholder=""></t-input>
                    </td>
                    <td>
                        <div class="name">名字较长的标签:</div>
                    </td>

                    <td>
                        <t-input placeholder=""></t-input>
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
                        <t-input placeholder=""></t-input>
                    </td>
                    <td>
                        <div class="name">标签:</div>
                    </td>

                    <td>
                        <t-input placeholder=""></t-input>
                    </td>
                    <td>
                        <div class="name">标签:</div>
                    </td>

                    <td>
                        <t-input placeholder=""></t-input>
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
                        <t-input placeholder=""></t-input>
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
                            <t-button type="info" class="">搜索</t-button>
                            <t-button class="ml-2">清空</t-button>
                            <a href="javascript:void(0);" class="ml-2 text-info">简易搜索</a>
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
                }
            }
        }
    }
</script>
