<template>
  <div class="login-contariner">
    <section class="mainWidth">
      <div style="display: inline-flex; margin-top: 80px;">
        <div style="width: 730px;">
          <img src="/static/image/ad.png">
        </div>
        <div style="width:428px; margin-left: 40px;" class="right-item">
          <div class="login-title">
            用户登录
          </div>
          <div class="login-content">
            <div class="login-input">
              <img src="/static/image/login01.jpg">
              <input type="text" placeholder="会员名/邮箱/手机号">
            </div>
            <div class="login-input">
              <img src="/static/image/login02.png">
              <input type="password">
            </div>
            <button class="login-btn">
              登录
            </button>
          </div>
          <div class="login-footer">
            <div class="login-link">
              <a @click="goToWechartLogin()"><img src="/static/image/icon07.png">微信登录</a>
              <a @click="goToQQLogin()"><img src="/static/image/icon08.png">QQ登录</a>
            </div>
            <p><a>忘记密码</a><a>忘记会员名</a><a>免费注册</a></p>
          </div>
        </div>
      </div>
      <LoginTip />
    </section>
  </div>
</template>

<script>
import LoginTip from '../components/subssembly/LoginTip'
export default {
  name: 'Login',
  components: {
    LoginTip
  },
  data () {
    return {}
  },

  methods: {
    goToWechartLogin () {
      this.$router.push('/WechartLogin')
    },
    goToQQLogin () {
      this.$router.push('/qqLogin')
    }
  },

  monuted () {
  }
}
</script>

<style lang="scss" scoped>
.login-contariner {
  background: #eaf3fa;
  height: 100%;
}
.right-item {
  position: relative;
  background: #ffffff;
  .login-title {
    font-size: 18px;
    text-align: left;
    padding: 35px;
  }
  .login-content {
    width: 300px;
    margin: 20px auto;
    .login-input {
      height: 40px;
      position: relative;
      margin-bottom: 20px;
      input {
        position: absolute;
        border: 1px solid #dddddd;
        outline: none;
        height: 100%;
        width: 258px;
        padding-left: 10px;
        font-size: 16px;
        line-height: 40px;
      }
    }
    .login-btn {
      width: 100%;
      border-radius: 5px;
      background: #2e6aa9;
      height: 40px;
      border: none;
      outline: none;
      color: #ffffff;
      font-size: 18px;
      cursor: pointer;
    }
  }
  .login-footer {
    .login-link {
      width: 300px;
      margin: 0 auto;
      font-size: 16px;
      a {
        margin-left: 10px;
        color: #444444;
        img {
          position: relative;
          top: 7px;
          margin-right: 10px;
        }
      }
    }
    p {
      font-size: 16px;
      text-align: right;
      margin-top: 60px;
      a {
        margin-right: 20px;
        color: #444444;
      }
    }
  }
}
</style>
