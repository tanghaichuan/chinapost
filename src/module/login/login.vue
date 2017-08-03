<template>
<div class="login-box">
  <div class="card">
    <img src="../../asset/image/login.png" alt="" class="img-responsive rounded-top">
    <div class="card-block pt-0 pb-4">
      <t-form ref="form" :model="formData" :rules="rules">
        <t-form-item prop="username">
          <t-input v-model="formData.username" :autofocus="true" icon="account-outline" placeholder="请输入用户名">
          </t-input>
        </t-form-item>
        <t-form-item prop="password">
          <t-input type="password" icon="lock-outline" v-model="formData.password" placeholder="请输入密码">
          </t-input>
        </t-form-item>
        <t-form-item prop="verify">
          <div class="d-flex">
            <div>
              <t-input v-model="formData.verify" placeholder="请输入验证码">
              </t-input>
            </div>
            <div class="ml-2">
              <img src="../../asset/image/code.png" style="height:40px" />
            </div>
          </div>
        </t-form-item>
        <t-form-item>
          <t-checkbox label="记住密码" v-model="formData.rememberMe"></t-checkbox>
        </t-form-item>
        <t-form-item class="mb-0">
          <t-button type="primary" @click="submit" block>登 录</t-button>
        </t-form-item>
      </t-form>
    </div>
  </div>
  <p class="d-flex text-center mt-3">
    <a href="#" class="mr-3">忘记密码</a>
  </p>
</div>
</template>
<script>
import {
  mapState,
  mapActions
} from 'vuex'

// const KEY_USER_NAME = 'osp-user-name'

export default {
  components: {},
  data() {
    return {
      formData: {
        username: '',
        password: '',
        verify: '',
        rememberMe: false
      },
      rules: {
        username: [{
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }],
        verify: [{
          required: true,
          message: '验证码不能为空',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    // ...mapState({
    //   logined: state => state.osp.logined,
    //   route: 'route'
    // })
  },
  methods: {
    // ...mapActions({
    //   doLogin: 'osp/doLogin'
    // }),
    submit() {
      // this.$refs.form.validate(passed => {
      //   if (passed) {
      //     this.doLogin(this.formData).then(() => {
      //       if (this.formData.rememberMe === true) {
      //         localStorage.setItem(KEY_USER_NAME, this.formData.username)
      //       } else {
      //         localStorage.removeItem(KEY_USER_NAME)
      //       }
      //       this.$router.push({
      //         path: '/osp/portal'
      //       })
      //     }).catch(err => {
      //       this.$Message.danger(err)
      //     })
      //   } else {
      //     this.$Message.danger('请输入正确的登录信息。')
      //   }
      // })
      this.$router.push({
        path: '/'
      })
    }
  },
  mounted() {
    let userName = localStorage.getItem(KEY_USER_NAME)
    if (userName !== null) {
      this.formData.username = userName
      this.formData.rememberMe = true
    }
    // 如果登录后在地址栏输入登录的url需要立即跳转到首页，那么启用下面的代码
    // if (this.logined) {
    //   this.$router.replace({name: '/osp/portal'})
    // }
  }
}
</script>
