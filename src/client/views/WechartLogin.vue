<template>
  <div class="login-contariner">
    <section class="mainWidth">
      <div style="display: inline-flex; margin-top: 80px;">
        <div style="width: 730px;">
          <img src="/static/image/ad.png">
        </div>
        <div style="width:428px; margin-left: 40px;" class="right-item">
          <div class="login-title">
            手机微信扫码，安全登录
          </div>
          <div class="login-content">
            <img src="/static/image/ecode.png">
          </div>
          <div class="login-footer">
            <img src="/static/image/icon06.png">
            打开手机 扫一扫登录
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
  name: 'WechartLogin',
  components: {
    LoginTip
  },
  data () {
    return {}
  },

  methods: {
    goToLogin () {
      this.$router.push('/login')
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
    img {
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
</style>
