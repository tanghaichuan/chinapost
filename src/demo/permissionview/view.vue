<template>
    <t-tabs class="t-tab">
        <t-tab-panel label="指标授权" name="tab-1">
            <div class="" class="index p-3 row">
                <div class="my-tree col-2">
                    <t-tree :data="data" :props="defaultProps" is-select @on-select="handleNodeSelect"
                            class=""></t-tree>
                </div>
                <div class="col  ">

                    <div class="col ">
                        <t-checkbox-group v-model="formItem.checkbox">
                            <div class="row">
                                <t-checkbox label="客户姓名" class="col"></t-checkbox>
                                <t-checkbox label="性别" class="col"></t-checkbox>
                                <t-checkbox label="出生年月" class="col"></t-checkbox>
                                <t-checkbox label="证件类型" class="col"></t-checkbox>
                            </div>
                            <div class="row">
                                <t-checkbox label="婚姻状况" class="col"></t-checkbox>
                                <t-checkbox label="学历" class="col"></t-checkbox>
                                <t-checkbox label="毕业院校" class="col"></t-checkbox>
                                <t-checkbox label="证件号" class="col"></t-checkbox>
                            </div>
                            <div class="row">
                                <t-checkbox label="是否有子女" class="col"></t-checkbox>
                                <t-checkbox label="专业" class="col"></t-checkbox>
                                <t-checkbox label="职业" class="col"></t-checkbox>
                                <t-checkbox label="证件到期日" class="col"></t-checkbox>
                            </div>


                        </t-checkbox-group>
                    </div>

                    <div class="d-flex flex-column ifrom">
                        <div class="mt-3">
                            <t-form inline class="t-form">
                                <t-form-item label="选择人员:" class="person">
                                    <t-input v-model="value4" icon="account-multiple" icon-placement="right"
                                             placeholder=""></t-input>
                                </t-form-item>
                            </t-form>
                        </div>
                        <div class="mt-3  role-man">
                            <t-form inline class="t-form">
                                <t-form-item label="角色管理：">
                                    <t-select v-model="model12" filterable multiple class="t-form-item">
                                        <t-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label
                                            }}
                                        </t-option>
                                    </t-select>
                                </t-form-item>
                            </t-form>
                            <div class="mybutton">
                                <t-button type="primary">保存</t-button>
                                <t-button class="ml-2">取消</t-button>

                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </t-tab-panel>
        <t-tab-panel label="视图授权" name="tab-2" class="">
            <div class=" view">
                <div class="d-flex flex-column ifrom">
                    <div class="mt-3">
                        <t-form inline class="t-form">
                            <t-form-item label="选择人员:" class="person">
                                <t-input v-model="value4" icon="account-multiple" icon-placement="right"
                                         placeholder=""></t-input>
                            </t-form-item>
                        </t-form>
                    </div>
                    <div class="mt-3 role-man">
                        <t-form inline class="t-form">
                            <t-form-item label="角色管理：">
                                <t-select v-model="model12" filterable multiple class="t-form-item">
                                    <t-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label
                                        }}
                                    </t-option>
                                </t-select>
                            </t-form-item>
                        </t-form>
                        <div class="mybutton">
                            <t-button type="primary">保存</t-button>
                            <t-button class="ml-2">取消</t-button>

                        </div>


                    </div>
                </div>
            </div>
        </t-tab-panel>
    </t-tabs>
</template>
<style scoped lang="scss">
    .dropdown__menu .dropdown__item--checked{
        background: url("../../../src/asset/image/hook.png");
        background-repeat: no-repeat;
        background-size: 1rem,1rem;
        background-position: 98%, 0%;
        background-color: #f7f7f7;


    }
    .t-tab {
        width: 100%;
        height: 1000px;
        .nav-item {
            margin-left: 1rem;
        }
        .index {
            margin-top: 2rem;
            .my-tree {
                border: 1px solid #e9e9e9;
            }
            .person {
                padding-left: 16px;
                .form-control {
                    margin-left: 8px;
                    width: 800px;
                }
            }
            .role-man {


                .form-group {
                    padding-left: 16px;
                }
                .form-control {
                    width: 800px;
                }
                .mybutton{
                    margin-top: 16px;
                    margin-left: 80px;
                }
            }

        }
        .view{
            display: flex;

            align-items: center;
            justify-content: center;
            .person {
                padding-left: 16px;
                .form-control {
                    margin-left: 8px;
                    width: 800px;
                }
            }
            .role-man {
                .form-group {
                    padding-left: 16px;
                }
                .form-control {
                    width: 800px;
                }
                .mybutton{
                    margin-top: 16px;
                    margin-left: 80px;
                }
            }
        }

    }

</style>

<script>
    export default {
        data() {
            return {
                data: [{
                    label: '客户基本视图',
                    children: [{
                        label: '客户基本信息',
                        children: [
                            {
                                label: '一般基本信息',
                            },
                            {
                                label: '企业法定代表人信息',
                            },
                            {
                                label: '实际控制人信息',
                            },
                            {
                                label: '证件信息',
                            }
                        ]
                    }]
                },
                    {
                        label: '客户关系视图',
                        children: [{
                            label: '获客来源',
                        }, {
                            label: '客户拜访记录',
                        }]
                    },],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    rangeDate: [],
                    singleYearVal: '',
                    slider: [20, 50],
                    textarea: ''
                },
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model12: [],
                formItem: {
                    input: '',

                }
            };
        },
        methods: {
            handleNodeSelect(data) {
                console.log(data);
            }
        }
    };
</script>

