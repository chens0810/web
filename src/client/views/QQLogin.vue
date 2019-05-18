<template>
  <div class="login-contariner">
    <section class="mainWidth">
      <div style="display: inline-flex; margin-top: 80px;">
        <div style="width: 730px;">
          <img src="/static/image/ad.png">
        </div>
        <div v-if="loginFlag==='code'" style="width:428px; margin-left: 40px;" class="right-item">
          <img src="/static/image/login-icon.png" class="login-icon" @click="passwordLogin()">
          <div class="login-title">
            手机QQ扫码，安全登录
          </div>
          <div class="login-content">
            <img src="/static/image/ecode.png" class="code-img">
          </div>
          <div class="login-footer">
            <img src="/static/image/icon06.png">
            打开手机 扫一扫登录
            <p><a @click="goToLogin()">密码登录</a><a>免费注册</a></p>
          </div>
        </div>
        <div v-if="loginFlag==='password'" style="width:428px; margin-left: 40px;" class="right-item password-item">
          <img src="/static/image/login-02.png" class="login-icon" @click="codeLogin()">
          <div class="login-title">
            密码登录
          </div>
          <div class="login-content">
            <div class="login-input">
              <img src="/static/image/login01.jpg">
              <input type="text" placeholder="QQ号码">
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
            </div>
            <p><a @click="goToLogin()">密码登录</a><a>免费注册</a></p>
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
  name: 'QQLogin',
  components: {
    LoginTip
  },
  data () {
    return {
      loginFlag: 'code'
    }
  },

  methods: {
    goToLogin () {
      this.$router.push('/login')
    },
    passwordLogin () {
      this.loginFlag = 'password'
    },
    codeLogin () {
      this.loginFlag = 'code'
    },
    goToWechartLogin () {
      this.$router.push('/WechartLogin')
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
  .login-icon {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
  .login-title {
    font-size: 18px;
    text-align: left;
    padding: 35px;
  }
  .login-content {
    .code-img {
      display: block;
      margin: 20px auto;
    }
  }
  .login-footer {
    img {
      position: relative;
      top: 5px;
    }
    text-align: center;
    font-size: 16px;
    color: #ababab;
    p {
      font-size: 16px;
      text-align: right;
      margin-top: 20px;
      a {
        margin-right: 20px;
        color: #444444;
      }
    }
  }
}
.password-item {
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
      text-align: left;
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
  }
}
</style>
