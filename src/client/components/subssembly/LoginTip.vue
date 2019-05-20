<template>
  <div class="login-tip">
    <ul>
      <li @click="wechartLogin()">
        <span><img src="/static/image/weixin-icon.png"></span>微信群
      </li>
      <li @click="QQLogin()">
        <span><img src="/static/image/qq-icon.png"></span>QQ群
      </li>
      <li><span><img src="/static/image/service-icon.png"></span>在线客服</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoginTip',
  components: {},
  data () {
    return {}
  },
  methods: {
    wechartLogin () {
      this.$router.push('/wechartLogin')
    },
    QQLogin () {
      this.$router.push('/qqLogin')
    }
  },
  monuted () {}
}
</script>

<style lang="scss" scoped>
  .login-tip {
    position: fixed;
    z-index: 9999;
    right: 0;
    bottom: 100px;
    background: #2e6aa9;
    border-radius: 5px 0;
    padding: 15px 10px 5px 10px;

    li {
      border-radius: 5px;
      background: #ffffff;
      margin-bottom: 10px;
      width: 168px;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      cursor: pointer;
      text-align: left;
      padding-left: 25px;

      img {
        position: relative;
        top: 9px;
        left: -8px;
      }
    }
  }
</style>
