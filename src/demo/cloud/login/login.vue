<template>
  <div class="form-wrap">
    <t-form ref="form" :model="form" :rules="rules">
      <t-form-item prop="username">
        <t-input v-model="form.username" placeholder="请输入用户名">
          <t-icon type="account-outline" slot="prepend"></t-icon>
        </t-input>
      </t-form-item>
      <t-form-item prop="password">
        <t-input type="password" v-model="form.password" placeholder="请输入密码">
          <t-icon type="lock-outline" slot="prepend"></t-icon>
        </t-input>
      </t-form-item>
      <t-form-item prop="verify">
        <t-input v-model="form.verify" placeholder="请输入验证码">
          <span slot="append">1234</span>
        </t-input>
      </t-form-item>
      <t-form-item>
        <t-checkbox label="记住我" v-model="form.rememberMe"></t-checkbox>
        <a href="#">忘记密码?</a>
      </t-form-item>
      <t-form-item>
        <t-button type="primary" @click="submit" block>登录</t-button>
      </t-form-item>
    </t-form>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import * as actions from '../store/action'

  export default {
    components: {},
    data() {
      return {
        form: {
          username: '',
          password: '',
          verify: '',
          rememberMe: false
        },
        rules: {
          username: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          verify: [
            {required: true, message: '验证码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      ...mapState({
        logined: state => state.cloud.logined,
        route: 'route'
      })
    },
    methods: {
      ...mapActions(Object.keys(actions)),
      submit() {
        this.$refs[ 'form' ].validate(passed => {
          if (passed) {
            this.doLogin(this.form)
          } else {
            this.$Message.danger('表单校验失败')
          }
        })
      }
    },
    watch: {
      logined : function (newVal, oldVal) {
        if (newVal) {
          this.$router.push({path: '/cloud/portal'})
        }
      }
    },
    mounted() {
      if (this.logined) {
        this.$router.replace({name: '/cloud/portal'})
      }
    }
  }
</script>
<style lang="less">
  .form-wrap {
    width: 30%;
    margin: 20px auto;
  }
</style>