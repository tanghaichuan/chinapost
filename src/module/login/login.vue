<template>
  <div class="login-wrap">
    <div class="login-header">
      <div class="layout">
        <h1 class="logo">
          <a href="javascript:;" title="中国邮政"><img src="../../asset/image/logo.png" /></a>
        </h1>
        <div class="logo-space"></div>
        <strong class="seller-name">CRM系统</strong>
      </div>
    </div>
    <div class="login-box">
      <div class="layout">
        <div class="form-card">
          <div class="form-logo">
            <i class="iconfont">&#xe77d;</i>
            <span>集团</span>
          </div>
          <div class="card-block pt-0 pb-4">
            <div class="form-alert">
              <t-alert v-show="errMsg" type="danger" show-icon>{{errMsg}}</t-alert>
            </div>
            <t-form ref="loginForm" :show-message="false" :model="formData" :rules="rules">
              <t-form-item prop="username">
                <i class="iconfont">&#xe64b;</i>
                <t-input v-model="formData.username" :autofocus="true" placeholder="请填写用户名"></t-input>
              </t-form-item>
              <t-form-item prop="password">
                <i class="iconfont">&#xe649;</i>
                <t-input type="password" v-model="formData.password" placeholder="请填写密码">
                </t-input>
              </t-form-item>
              <t-form-item prop="verify">
                <div class="verify-code d-flex">
                  <i class="iconfont">&#xe64a;</i>
                  <t-input v-model="formData.verify" placeholder="请填写验证码">
                  </t-input>
                  <div class="mr-1 mt-1">
                    <img src="../../asset/image/code.png" style="height:32px" />
                  </div>
                </div>
              </t-form-item>
              <t-form-item class="mb-3" style="height:5px">
                <div class="forget-psd">
                  <a href="javascript:;">忘记密码?</a>
                </div>
              </t-form-item>
              <t-form-item class="mb-0">
                <t-button type="primary" @click="submit" block>登 录</t-button>
              </t-form-item>
            </t-form>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">Copyright &copy; 中国邮政 版权所有</div>
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
      errMsg: "",
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
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$router.push({
            path: '/'
          })
        } else {
          if (!this.formData.username || !this.formData.password) {
            this.errMsg = "请输入用户名或密码"
          }
          else if (!this.formData.verify) {
            this.errMsg = "请输入验证码"
          }
        }
      })
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
    }
  },
  mounted() {
    // let userName = localStorage.getItem(KEY_USER_NAME)
    // if (userName !== null) {
    //   this.formData.username = userName
    //   this.formData.rememberMe = true
    // }
    // 如果登录后在地址栏输入登录的url需要立即跳转到首页，那么启用下面的代码
    // if (this.logined) {
    //   this.$router.replace({name: '/osp/portal'})
    // }
  }
}
</script>
<style scoped lang="less">
.layout {
  width: 1200px;
  margin: 0 auto;
  &:after {
    height: 0;
    content: " ";
    display: block;
    clear: both;
  }
}

.login-wrap {
  width: 100%;
  .login-header {
    width: 100%;
    position: relative;
    z-index: 100;
    height: 76px;
    background: #fff;
    .logo {
      padding: 8px 0 0;
      width: 165px;
      float: left;
      a {
        width: 165px;
        display: block;
        overflow: hidden;
        img {
          width: 165px;
        }
      }
    }
    .logo-space {
      margin: 22px 10px 0;
      width: 2px;
      height: 32px;
      background: #000;
      float: left;
      overflow: hidden;
    }
    .seller-name {
      line-height: 75px;
      color: #000;
      font-size: 20px;
      font-weight: normal;
      float: left;
    }
  }
  .login-box {
    width: 100%;
    background: url(../../asset/image/company-banner.png) no-repeat top center;
    height: 480px;
    .form-card {
      float: right;
      margin: 32px 80px 0 0;
      width: 315px;
      background: rgba(5, 72, 99, 0.6);
      .form-logo {
        height: 79px;
        line-height: 100px;
        text-align: center;
        color: #fff;
        .iconfont {
          font-size: 32px;
        }
        span {
          font-size: 22px;
          font-weight: bold;
          margin-left: 15px;
        }
      }
      .form-group {
        margin-bottom: 28px;
        .iconfont {
          width: 36px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          position: absolute;
          top: 1px;
          left: 0;
          color: #fff;
          font-size: 22px;
        }
        .input {
          padding-left: 35px;
          color: #fff;
          height: 40px;
          line-height: 40px;
          border: 1px solid rgba(255, 255, 255, 1);
          background: none;
          &:focus {
            border-color: #fff!important;
            box-shadow: none!important;
          }
          &::-webkit-input-placeholder {
            color: #fff;
          }
        }
        .verify-code {
          border: 1px solid #fff;
          border-radius: 4px;
          .input {
            border: 0;
          }
        }
        .input-group-icon {
          line-height: 42px;
          i {
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
      .has-danger {
        .input {
          border-color: #FF5F5F;
        }
        .verify-code {
          border-color: #FF5F5F;
        }
      }
      .forget-psd {
        position: absolute;
        right: 0;
        bottom: 0;
        a {
          color: #fff;
        }
      }
      .btn {
        height: 42px;
        margin-bottom: 20px;
        span {
          font-size: 16px;
        }
      }
    }
  }
  .login-footer {
    width: 100%;
    min-width: 1190px;
    line-height: 60px;
    background: #f7f7f7;
    text-align: center;
    color: #666;
    font-size: 14px;
  }
}

.form-alert {
  height: 37px;
  .alert--danger {
    margin-left: 5px;
    width: 270px;
    padding: 0px 40px;
    min-height: 24px;
    line-height: 24px;
    background: #fff0ef;
  }
  .alert__icon,
  .alert__close-icon {
    position: absolute;
    top: 3px;
  }
}

.alert {
  min-height: 22px;
  font-size: 12px;
  margin-bottom: 8px;
  border-radius: 3px;
}
</style>
