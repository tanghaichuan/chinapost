<template>
    <div>
        <div>
            <div class="d-flex justify-content-start mar">
                <div class="d-flex justify-content-start ">
                    <div class="title text-right">我是较长标题:</div>
                    <t-select
                            v-model="model13"
                            filterable
                            remote
                            :remote-method="remoteMethod1"
                            :loading="loading1" class="ml-8">
                        <t-option v-for="option in options1" :value="option.value" :key="new Date()">{{option.label}}</t-option>
                    </t-select>

                </div>
                <div class="d-flex justify-content-start ">
                    <div class=" text-right net-d">我是较长标题:</div>
                    <t-select
                            v-model="model14"
                            filterable
                            remote
                            :remote-method="remoteMethod1"
                            :loading="loading1" class="ml-8" >
                        <t-option v-for="option in options1" :value="option.value" :key="new Date()">{{option.label}}</t-option>
                    </t-select>

                </div>

            </div>
            <div class="d-flex justify-content-start mar">
                <div class="title text-right">我是较长标题:</div>
                <t-select
                        v-model="model15"
                        filterable
                        remote
                        :remote-method="remoteMethod1"
                        :loading="loading1" class="ml-8"  style="width: 500px">
                    <t-option v-for="option in options1" :value="option.value" :key="new Date()">{{option.label}}</t-option>
                </t-select>
            </div>
            <div>
                <div class="d-flex justify-content-start mar">
                    <div class="title text-right">我是较长标题:</div>
                    <t-numberstepper class="ml-8" max="10000000"></t-numberstepper>
                    <p class="p-t ml-8">台机器</p>
                    <t-checkbox class="p-t ml-8"> <p class="left">我是较长的内容</p></t-checkbox>
                </div>
            </div>
            <div class="d-flex justify-content-start mar ml-16">
                <div class="title text-right">我是标题:</div>
                <p class="ml-8 p-t">唧唧复唧唧木兰</p>
                <a href="javascript:;" class="ml-8 p-t text-info">文字链接</a>
            </div>
            <div class="clearfix mar b-mar ">
                <div class="title text-right float-left" >我是标题:</div>
                <t-switch rounded class="mt-1 ml-8">
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                </t-switch>
            </div>
            <div class="clearfix mar b-mar ">
                <div class="title text-right float-left">我是标题:</div>
                <div style="width: 600px" class="float-left ml-8"><div>
                    <t-slider  v-model="value9" :step="25" show-stops range data-unit=""></t-slider></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                single: false,
                value9: [25, 50],
                model13: '',
                model14: '',
                model15: '',
                loading1: false,
                options1: [],
                model14: [],
                loading2: false,
                options2: [],
                list: [
                    'Alabama',
                    'Alaska',
                    'Arizona',
                    'Arkansas',
                    'California',
                    'Colorado',
                    'Connecticut',
                    'Delaware',
                    'Florida',
                    'Georgia',
                    'Hawaii',
                    'Idaho',
                    'Illinois',
                    'Indiana',
                    'Iowa',
                    'Kansas',
                    'Kentucky',
                    'Louisiana',
                    'Maine',
                    'Maryland',
                    'Massachusetts',
                    'Michigan',
                    'Minnesota',
                    'Mississippi',
                    'Missouri',
                    'Montana',
                    'Nebraska',
                    'Nevada',
                    'New hampshire',
                    'New jersey',
                    'New mexico',
                    'New york',
                    'North carolina',
                    'North dakota',
                    'Ohio',
                    'Oklahoma',
                    'Oregon',
                    'Pennsylvania',
                    'Rhode island',
                    'South carolina',
                    'South dakota',
                    'Tennessee',
                    'Texas',
                    'Utah',
                    'Vermont',
                    'Virginia',
                    'Washington',
                    'West virginia',
                    'Wisconsin',
                    'Wyoming'
                ]


            }
        },
        methods: {
            remoteMethod1 (query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        const list = this.list.map((item,index) => {
                            return {
                                value: index + '_' + item,
                                label: index + '_' + item
                            };
                        });
                        this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options1 = [];
                }
            }

        }
    }
</script>
<style   lang="less">

    .title{
        width: 232px;
        padding-top: 10px;
    }
    .p-t{
        padding-top: 10px;
    }
    .ml-8{
        margin-left: 8px;
    }
    .net-d{
        margin-left: 16px;
        padding-top: 10px;
    }
    .title::before{
        content: "*";
        display: inline-block;
        margin-left: 4px;

        font-size: 12px;
        color: #FF5F5F;
    }
    .mar{
        margin-top: 24px;
    }
    .b-mar{
        margin-bottom: 24px;
    }
    .switch--checked, .switch[checked]{
        background: #6AD367;
    }
    .form-control, .select .dropdown-input{
        height: 100% ;
    }
    .slider__handle-button{
        background-color: #b0e9fe !important;
    }
    .slider .slider__track{
        background-color: #b0e9fe;
        background-image: none;
    }




</style>
