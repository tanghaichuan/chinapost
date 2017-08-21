<template>
<div class="slide" ref="slidetab">
  <div class="container">
    <h1 class="title text-lg">筛选</h1>
    <div class="content">
      <t-form ref="formValidate" :model="formItem">
        <t-form-item label="年龄段">
          <t-select v-model="formItem.selectAge" placeholder="请选择">
            <t-option value="beijing">18-25</t-option>
            <t-option value="shanghai">26-33</t-option>
            <t-option value="shenzhen">33-40</t-option>
          </t-select>
        </t-form-item>
        <t-form-item label="地区">
          <t-select v-model="formItem.selectCity" placeholder="请选择">
            <t-option value="beijing">北京市</t-option>
            <t-option value="shanghai">上海市</t-option>
            <t-option value="shenzhen">重庆市</t-option>
          </t-select>
        </t-form-item>
        <t-form-item label="添加时间" class="select-date">
          <t-date-picker style="width:47%" v-model="startDateVal" v-on:date-change="onChange" placeholder="date"></t-date-picker>
          <span class="line"></span>
          <t-date-picker style="width:47%" v-model="endDateVal" v-on:date-change="onChange" placeholder="date"></t-date-picker>
        </t-form-item>
        <t-form-item class="button">
          <t-button type="primary" @click="handleSubmit('formValidate')">提交</t-button>
          <t-button @click="handleCancel('formValidate')" class="ml-2">取消</t-button>
        </t-form-item>
      </t-form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      startDateVal: '',
      endDateVal: '',
      formItem: {
        selectCity: '',
        selectAge: ''
      }
    }
  },
  methods: {
    onChange(value) {
      console.log('date change:' + value)
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');
        } else {
          this.$Message.danger('表单验证失败!');
        }
      })
    },
    handleCancel(name) {
      this.$refs[name].resetFields();
    }
  },
  mounted() {
    this.$refs.slidetab.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  }
}
</script>

<style lang="less">
.slide {
    position: absolute;
    top: 0;
    right: 0;
    width: 312px;
    // height: 90%;
    background: #fff;
    box-shadow: 0 5px 30px rgba(0,0,0,.15);
    .container {
        padding: 0;
        .title {
            color: #fff;
            padding: 15px 20px;
            background-color: #009241;
        }
        .content {
            padding: 20px;
            .select-date {
                margin-bottom: 15px;
                .line {
                    display: inline-block;
                    padding-right: 2.8%;
                    border: solid 1px rgba(7 ,17, 27, 0.4);
                }
            }
            .form {
                .form-group {
                    .form-group__content {
                        .dropdown {
                            width: 100%;
                        }
                    }
                }
            }
            .button {
                text-align: right;
            }
        }
    }
}
</style>
