<template>
<div class="login-wrapper">
	<p class="img-login">
		<img src="../../asset/image/logins.png" />
	</p>
	<div class="wrapper">
		<p class="logo-title">
			<img src="../../asset/image/logo.png" />
			<span class="logo-txt">CRM系统</span>
		</p>
		<div class="login-box">
      <div class="layout">
        <div class="form-card">
          <div class="card-block pt-0">
            <div class="form-alert">
              <t-alert v-show="errMsg" type="danger" show-icon>{{errMsg}}</t-alert>
            </div>
            <t-form ref="loginForm" :show-message="false" :model="formData" :rules="rules">
              <t-form-item prop="username" :class="{'user-active':userActive}">
                <i class="iconfont">&#xe64b;</i>
                <t-input v-model="formData.username" placeholder="请输入登录账号" @on-focus="userFocus" @on-blur="userBlur"></t-input>
              </t-form-item>
              <t-form-item prop="password" :class="{'word-active':wordActive}">
                <i class="iconfont">&#xe649;</i>
                <t-input type="password" v-model="formData.password" placeholder="请填写密码" @on-focus="wordFocus" @on-blur="wordBlur">
                </t-input>
              </t-form-item>
              <t-form-item prop="verify" >
                <div class="verify-code" :class="{'code-active':codeActive}">
                  <i class="iconfont">&#xe64a;</i>
                  <t-input v-model="formData.verify" placeholder="请填写验证码" @on-focus="codeFocus" @on-blur="codeBlur">
                  </t-input>
                  <div class="code-img">
                    <img src="../../asset/image/code.png" />
                  </div>
                </div>
              </t-form-item>
              <t-form-item>
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
	</div>
</div>	
</template>
<script>
export default{
	data(){
		return{
			userActive:false,
			wordActive:false,
			codeActive:false,
			errMsg: "",
      formData: {
        username: '',
        password: '',
        verify: ''
      },
      rules: {
        username: [{
          required: true,
          trigger: 'change'
        }],
        password: [{
          required: true,
          trigger: 'change'
        }],
        verify: [{
          required: true,
          trigger: 'change'
        }]
      }
		}
	},
	methods:{
		userFocus(){
			this.userActive =true
		},
		userBlur(){
			this.userActive =false
		},
		wordFocus(){
			this.wordActive =true
		},
		wordBlur(){
			this.wordActive =false
		},
		codeFocus(){
			this.codeActive =true
		},
		codeBlur(){
			this.codeActive =false
		},
		submit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
        	this.errMsg = ''
          console.log(this.formData);
          this.$router.push({
            path: '/'
          })
        } else {
          if (!this.formData.username) {
            this.errMsg = "请输入用户名"
          }else if(!this.formData.password){
          	this.errMsg = "请输入密码"
          }
          else if (!this.formData.verify) {
            this.errMsg = "请输入验证码"
          }
        }
      })
    }
	}
}	
</script>
<style lang="less" scoped>
.login-wrapper{
	width:100%;
	background:#f1f1f1;
	p{
		margin:0;
		padding:0;
	}
	.img-login{
		width:100%;
		img{
			width:100%;
		}
	}
	.wrapper{
		padding:30px 35px 0;
		width:415px;
		height:462px;
		background:#fff;
		position:fixed;
		top:42px;
		left:50%;
		margin-left:-207px;
		box-shadow:5px 5px 20px rgba(0,0,0,0.2);
		.logo-title{
			&:after{
				content:"";
				height:0;
				clear:both;
				display:block;
			}
			img{
				width:188px;
				float:left;
			}
			.logo-txt{
				margin-top:10px;
				padding-left:25px;
				line-height:42px;
				color:#007a53;
				font-size:26px;
				float:right;
				border-left:1px solid #000;
			}
		}

		.login-box {
			padding-top:18px;
	    width: 100%;
	    .form-card {
	      .card-block{
	      	padding:0;
	      }
	      .form-group {
	        margin-bottom:24px;
	        .iconfont {
	          width: 36px;
	          height: 40px;
	          line-height: 40px;
	          text-align: center;
	          position: absolute;
	          top: 1px;
	          left: 9px;
	          color: #b4b4b4;
	          font-size: 22px;
	        }
	        .input {
	          padding-left: 43px;
	          color: #232323;
	          height: 40px;
	          line-height: 40px;
	          border: 1px solid #d9d9d9;
	          background: none;
	          font-size: 14px;
	          border-radius:0;
	          &:focus {
	            border-color: #009241!important;
	            box-shadow: none!important;
	          }
	          &::-webkit-input-placeholder {
	          	font-size: 14px;
	            color: #bababa;
	          }
	        }
	        .verify-code {
	          border: 1px solid #d9d9d9;
	          .input {
	          	width:240px;
	            border: 0;
	          }
	          .code-img{
	          	position:absolute;
	          	top:1px;
	          	right:1px;
	          	img{
	          		cursor:pointer;
	          		height:40px;
	          	}
	          }
	          &.code-active{
	          	border: 1px solid #009241;
	          	.iconfont{
	          		color:#009241;
	          	}
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
	        .iconfont{
	        	color:#FF5F5F;
	        }
	      }
	      .word-active{
	        .iconfont{
	        	color:#009241;
	        }
	      }
	      .user-active{
	      	.iconfont{
	        	color:#009241;
	        }
	      }
	      .forget-psd {
	      	height:22px;
	        a {
	        	position: absolute;
			      right: 0;
			      bottom:9px;
	        	font-size:14px;
	          color: #007a53;
	        }
	      }
	      .btn {
	        height: 42px;
	        span {
	          font-size: 16px;
	        }
	      }
	    }
	  }
	}
}	
.form-alert {
  padding-left: 5px;
  height: 36px;
  .alert {
    padding: 0 38px 0 43px;
    min-height: 24px;
    color:#4c4a4a;
    font-size:12px;
    .alert__icon, .alert__close-icon {
      top: 3px;
      left: 15px; 
      font-size:18px;
    }
    .alert__message{
    	line-height:24px;
    }
  }
}
</style>