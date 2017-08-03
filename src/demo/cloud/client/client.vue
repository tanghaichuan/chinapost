<template>
  <div class="box">
    <div class="row">
      <div class="col left-col">
      </div>
      <div class="col right-col">
        <t-button type="primary" @click="add">添加</t-button>
      </div>
    </div>
    <t-table border :columns="columns" :data="datas"></t-table>
    <t-modal
      v-model="visible"
      title="添加用户"
      @on-ok="ok">
      <t-form ref="formValidate" :model="formData" :rules="ruleValidate">
        <t-form-item label="姓名" prop="name">
          <t-input v-model="formData.name" placeholder="请输入姓名"></t-input>
        </t-form-item>
        <t-form-item label="年龄" prop="age">
          <t-input v-model="formData.age" placeholder="请输入年龄"></t-input>
        </t-form-item>
        <t-form-item label="地址" prop="address">
          <t-input v-model="formData.address" placeholder="请输入地址"></t-input>
        </t-form-item>
        <t-form-item label="性别" prop="gender">
          <t-radio-group v-model="formData.gender">
            <t-radio label="男">男</t-radio>
            <t-radio label="女">女</t-radio>
          </t-radio-group>
        </t-form-item>
      </t-form>
    </t-modal>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  import * as actions from './action'

  export default {
    components: {},
    data() {
      const validateAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        // 模拟异步验证效果
        if (!Number.isInteger(Number(value))) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }
      return {
        columns: [

          {
            title: '姓名',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('i', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.name)
              ])
            }
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '性别',
            key: 'gender'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('t-button', {
                  props: {
                    type: 'danger',
                    size: 'sm'
                  },
                  on: {
                    click: () => {
                      this.remove(params._index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        formData: {
          name: '',
          age: '',
          address: '',
          gender: ''
        },
        ruleValidate: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '地址不能为空', trigger: 'blur'}
          ],
          age: [
            {required: true, message: '年龄不能为空', trigger: 'blur'},
            {validator: validateAge, trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ]
        },
        visible: false
      }
    },
    computed: {
      ...mapState({
        datas: state => state.cloud.client.clients,
        route: 'route'
      })
    },
    methods: {
      ...mapActions(Object.keys(actions)),
      add() {
        this.visible = !this.visible
      },
      ok(){
        var _this = this
        this.$refs.formValidate.validate(
          (valid) => {
            if (valid) {
              _this.datas.unshift(_this.formData)
            }
          }
        )
      },
      remove(index){
        this.datas.splice(index, 1)
      }
    },
    mounted() {
      this.fetchClients()
    }
  }
</script>
<style lang="css">
  @import './client.css';
</style>