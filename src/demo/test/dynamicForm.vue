<template>
    <t-form ref="formDynamic" :model="formDynamic" :label-width="80">
        <t-form-item 
        v-for="(item, index) in formDynamic.items" 
        :key="item" :label="'表单项' + (index + 1)" 
        :prop="'items.' + index + '.value'" 
        :required="true"
        :rules="{type: 'number', message: '类型不对', trigger: 'change'}">
            <div class="row">
                <div class="col-10">
                    <input type="number" v-model.number="item.value" name="points"  min="1" max="10" />
                    
                </div>
                <div>
                    <t-button type="outline-danger" @click="handleRemove(index)">删除</t-button>
                </div>
            </div>
        </t-form-item>
        <t-form-item>
            <div class="row">
                <div class="col-12">
                    <t-button type="outline-info" block @click="handleAdd" icon="plus-round">新增</t-button>
                </div>
            </div>
        </t-form-item>
        <t-form-item>
            <t-button type="primary" @click="handleSubmit('formDynamic')">提交</t-button>
            <t-button @click="handleReset('formDynamic')" class="ml-2">重置</t-button>
        </t-form-item>
    </t-form>
</template>
<script>
export default {
    data() {
        return {
            formDynamic: {
                items: [
                    {
                        value: ''
                    }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    console.log(typeof(this.formDynamic.items[0].value));
                    this.$Message.success('提交成功!');
                } else {
                    console.log(typeof(this.formDynamic.items[0].value));
                    this.$Message.danger('表单验证失败!');
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        handleAdd() {
            this.formDynamic.items.push({
                value: ''
            });
        },
        handleRemove(index) {
            this.formDynamic.items.splice(index, 1);
        }
    },
    watch: {
        
    },
    updated() {
        
    }
}
</script>