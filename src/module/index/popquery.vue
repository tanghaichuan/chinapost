<template>
    <div class="pop-query" @input="getInput">
        <t-tabs>
            <t-tab-panel label="个人客户" name="tab-1">
                <t-form :model="formPersonal" label-position="left" :rules="rulePersonal" ref="formPersonal" :label-span="4">
                    <t-form-item label="证件类型" prop="type" class="ext-width">
                        <t-select v-model="formPersonal.type" placeholder="身份证">
                            <t-option value="身份证">身份证</t-option>
                            <t-option value="护照">护照</t-option>
                            <t-option value="军官证">军官证</t-option>
                        </t-select>
                    </t-form-item>
                    <t-form-item :label="formPersonal.type" prop="id" class="ext-width">
                        <t-input v-model="formPersonal.id"></t-input>
                    </t-form-item>
                    <t-form-item label="姓名" prop="name" class="ext-width">
                        <t-input v-model="formPersonal.name"></t-input>
                    </t-form-item>
                </t-form>
            </t-tab-panel>
            <t-tab-panel label="机构客户" name="tab-2">
                <t-form 
                :model="formOrganize" 
                label-position="left" 
                :rules="ruleOrganize" 
                ref="formOrganize" 
                :label-span="4">
                    <t-form-item label="同一社会信用代码" prop="credit" class="ext-width">
                        <t-input v-model="formOrganize.credit"></t-input>
                    </t-form-item>
                    <t-form-item label="机构名称" prop="name" class="ext-width">
                        <t-input v-model="formOrganize.name"></t-input>
                    </t-form-item>
                </t-form>
            </t-tab-panel>
            <t-tab-panel label="业务属性" name="tab-3">
                <t-form :model="formBusiness" label-position="left" :rules="ruleBusiness" ref="formBusiness" :label-span="4">
                    <t-form-item label="业务属性" prop="attribute" class="ext-width">
                        <t-input v-model="formBusiness.attribute"></t-input>
                    </t-form-item>
                </t-form>
            </t-tab-panel>
            <t-tab-panel label="模糊查找" name="tab-4">
                <t-form :model="formEnquiry" label-position="left" :rules="ruleEnquiry" ref="formEnquiry" :label-span="4">
                    <t-form-item label="客户简称" prop="abbreviation" class="ext-width">
                        <t-input v-model="formEnquiry.abbreviation"></t-input>
                    </t-form-item>
                    <t-form-item label="客户标签标识" prop="type">
                        <t-select v-model="formEnquiry.tag">
                            <t-option value="标签">标签</t-option>
                            <t-option value="标识码">标识码</t-option>
                            <t-option value="邮务码">邮务码</t-option>
                        </t-select>
                    </t-form-item>
                </t-form>
            </t-tab-panel>
        </t-tabs>
        <div class="query-btn-group">
            <t-button @click="handleReset">重置</t-button>
            <t-button type="primary" @click="handleSubmit">查询</t-button>
        </div>
    </div>
</template>
<script>
const STATELIST = ['formPersonal', 'formOrganize', 'formBusiness', 'formEnquiry'];
export default {
    name: 'popQuery',
    data() {
        return {
            formPersonal: {
                type: '身份证',
                id: '',
                name: ''
            },
            rulePersonal: {
                type: [{
                    required: true,
                    message: '请选择证件类型',
                    trigger: 'change'
                }],
                id: [{
                    required: true,
                    message: '身份证不能为空',
                    trigger: 'blur'
                }],
                name: [{
                    required: true,
                    message: '姓名不能为空',
                    trigger: 'blur'
                }]
            },
            formOrganize: {
                credit: '',
                name: ''
            },
            ruleOrganize: {
                credit: [{
                    required: true,
                    message: '社会信用代码不能为空',
                    trigger: 'blur'
                }],
                name: [{
                    required: true,
                    message: '机构名称不能为空',
                    trigger: 'blur'
                }]
            },
            formBusiness: {
                attribute: ''
            },
            ruleBusiness: {
                attribute: [{
                    required: true,
                    message: '业务属性不能为空',
                    trigger: 'blur'
                }]
            },
            formEnquiry: {
                abbreviation: '',
                tag: '标签'
            },
            ruleEnquiry: {
                abbreviation: [{
                    required: true,
                    message: '客户简称不能为空',
                    trigger: 'blur'
                }],
                tag: [{
                    required: true,
                    message: '请选择标签类型',
                    trigger: 'change'
                }]
            },
            state: 'formPersonal'
        }
    },
    methods: {
        handleReset() {
            this.$refs[this.state].resetFields();
        },
        handleSubmit() {
            this.$refs[this.state].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.danger('表单验证失败!');
                }
            })
        },
        getInput(val) {
            this.state = STATELIST[val];
        }
    }
}
</script>
<style scoped lang="less">
.pop-query {
    padding-top: 20px;
    position: absolute;
    top: 75px;
    left: 438px;
    z-index: 3;
    display: inline-block;
    background: #fff;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
    padding-bottom: 20px;
    .tab-content {
        padding: 30px 60px 0px 30px;
        .tab-pane {
            height: 170px;
        }
    }
}

.form-group {
    margin-bottom: 0.7rem;
}

.ext-width {
    .col-4 {
        text-align: right !important;
    }
}

.query-btn-group {
    padding: 0 30px;
    display: flex;
    justify-content: space-around;
}

.btn-secondary {
    height: 28px !important;
    line-height: 28px !important;
}
</style>