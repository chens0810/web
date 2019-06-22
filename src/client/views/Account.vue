<template>
  <section class="text-center mainWidth">
    <div style="padding-top: 84px; display: inline-flex;">
      <div style="border: 1px solid #b5d5e7; width: 880px; text-align: left; padding-bottom: 66px; background-color: #e9f4f9;">
        <div style="display:inline-flex; padding-top: 40px; padding-left: 58px;">
          <a @click="goto('toSale')">
            <div class="space jishou01">
              <span>我要寄售</span>
            </div>
          </a>
          <a @click="goto('toBuy')">
            <div class="space shougou01">
              我要收购
            </div>
          </a>
        </div>
        <div style="display:inline-flex; padding-top: 42px; padding-left: 58px;">
          <a @click="goto('mySaled')">
            <div class="space jishou02">
              我的寄售
            </div>
          </a>
          <a @click="goto('myBuyed')">
            <div class="space shougou02">
              我的收购
            </div>
          </a>
        </div>
      </div>
      <div style="width:300px; height: 550px; margin-left: 20px;">
        <div style="height:50px;">
          <img src="/static/image/tit01.jpg" width="300px">
        </div>
        <div style="border: 1px solid #b5d5e9; height: 500px;">
          <div v-for="(item, index) in saledList" :key="index" class="accPush">
            <div>
              <img src="/static/image/icon02.png">
              <span style="font-size: 18px; color: #2f69a9;">{{ item.account }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LoginTip />
  </section>
</template>

<script type="text/javascript">
import LoginTip from '../components/subssembly/LoginTip'
export default {
  name: 'AccountCenter',
  components: {
    LoginTip
  },
  data () {
    return {
      saledList: [
        {
          account: 'A000001',
          type: '国服',
          price: '￥100.00',
          time: '2019-01-01 09:00:00'
        },
        {
          account: 'A000002',
          type: '国服',
          price: '￥100.00',
          time: '2019-01-01 09:00:00'
        },
        {
          account: 'A000003',
          type: '国服',
          price: '￥100.00',
          time: '2019-01-01 09:00:00'
        }
      ]
    }
  },

  methods: {
    goto (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.space {
  width: 360px;
  height: 200px;
  font-size: 32px;
  color: #ffffff;
  padding-top: 50px;
  padding-left: 30px;
}

.jishou01 {
  background-image: url('/static/image/jishou01.png');
}

.jishou02 {
  background-image: url('/static/image/jishou02.png');
}

.shougou01 {
  margin-left: 42px;
  background-image: url('/static/image/shougou01.png');
}

.shougou02 {
  margin-left: 42px;
  background-image: url('/static/image/shougou02.png');
}

.accPush {
  border-bottom: 1px dashed #b5d5e9;
  font-size: 18px;
  margin: 0 14px;
  text-align: left;
  padding: 18px 0 12px 18px;
}
</style>
