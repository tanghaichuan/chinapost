<template>
    <div class="popupEdit" >
        <div class="task"><p class="ml-2">任务列表</p></div>
        <ul class="list">
            <li v-for="(i,index) in data ">
                <t-checkbox class="ml-2"><span>{{i.name}}</span></t-checkbox>

                <t-poptip trigger="click" placement="top" v-model=data[index].visible>
                    <div slot="title" class="title"><p class="innerTask" style="font-size: 14px;font-weight:600 ">任务</p>
                    </div>
                    <div slot="content" class="content clearfix">
                        <t-input v-model=data[index].value placeholder="请输入" style="width: 200px"></t-input>
                        <div class="mt-2 float-right">
                            <t-button @click="close" type="outline-primary">取消</t-button>
                            <t-button @click="saveData" type="primary">保存</t-button>
                        </div>
                    </div>
                    <t-icon type="pencil" class="ml-2"></t-icon>
                </t-poptip>
            </li>

        </ul>
    </div>
</template>
<script>


    export default {
        data() {
            return {
                data: [
                    {
                        name: '跑步500m',
                        visible: false,
                        value: '跑步500m'
                    },
                    {
                        name: '俯卧撑100个',
                        visible: false,
                        value: '俯卧撑100个'
                    },
                    {
                        name: '俯卧撑100个',
                        visible: false,
                        value: '俯卧撑100个'
                    },
                    {
                        name: '俯卧撑100个',
                        visible: false,
                        value: '俯卧撑100个'
                    },
                ]

            }
        },
        methods: {
            close() {
                for (var i = 0; i < this.data.length; i++) {
                    this.data[i].visible = false
                }

            },
            saveData() {
                for (var i = 0; i < this.data.length; i++) {
                    this.data[i].name = this.data[i].value
                    this.data[i].visible = false
                }
            }
        }
    }
</script>
<style scoped lang="less">

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;

    }

    .popupEdit {
        width: 302px;
        border: 1px solid #2D3E53;
        .task {
            width: 300px;

            background: #E9E9E9;
            p {
                font-weight: 600;
                height: 30px;
                line-height: 30px;
                margin-bottom: 0;

            }
        }
        .list {
            width: 300px;

            li {
                margin-top: 5px;
            }
        }

    }

</style>
