<template>
  <div class="login-tip">
    <div class="qunlogo">
      <img v-show="active === 2" src="/static/image/qqqun.png">
    </div>
    <div class="qunlogo">
      <img v-show="active === 1" src="/static/image/weiqun.png">
    </div>
    <ul>
      <li @mouseenter="showActive(1)" @mouseleave="showActive(0)">
        <span><img src="/static/image/weixin-icon.png"></span>
      </li>
      <li @mouseenter="showActive(2)" @mouseleave="showActive(0)">
        <span><img src="/static/image/qq-icon.png"></span>
      </li>
      <li>
        <a id="contactQQ" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2575038557&amp;Site=客服&amp;Menu=yes" target="_Blank"><span><img src="/static/image/service-icon.png"></span></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoginTip',
  components: {},
  data () {
    return {
      active: 0
    }
  },
  methods: {
    wechartLogin () {
      this.$router.push('/wechartLogin')
    },
    QQLogin () {
      this.$router.push('/qqLogin')
    },
    showActive (index) {
      this.active = index
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
      width: 60px;
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

  .qunlogo {
    position: absolute;
    left: -146px;
  }
</style>
