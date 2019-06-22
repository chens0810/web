<template>
  <section class="text-center mainWidth">
    <div style="padding-top:44px;">
      <img src="/static/image/ban-ad.png" width="100%">
    </div>
    <div style="display: inline-flex; margin-top: 38px;">
      <div style="width: 880px;">
        <div class="homePush">
          <img src="/static/image/icon01.png" style="margin: 12px 9px;">
          <span style="margin: 0 0;">每日推送优质账号：优质账号1228 优质账号2222 优质账号3333</span>
        </div>
        <div style="margin-top:20px;">
          <table class="tableList">
            <tr>
              <th>收购名称</th>
              <th>国服/日服</th>
              <th>发布时间</th>
              <th>状态</th>
            </tr>
            <tr v-for="(item, index) in acccountList" :key="index">
              <td>{{ item.name }}</td>
              <td class="textBlock">
                {{ item.type }}
              </td>
              <td class="textBlock">
                {{ item.time }}
              </td>
              <td>{{ item.status }}</td>
            </tr>
            <Page ref="pageComment" :url="mainUrl" :page-no="pageNo" :col-count="4" @page-size="pageSize" />
          </table>
        </div>
      </div>
      <div style="width:300px; margin-left: 20px;">
        <div style="height:50px;">
          <img src="/static/image/tit02.jpg" width="300px">
        </div>
        <div style="border-bottom: 1px solid #b5d5e9;">
          <div v-for="(item, index) in saledList" :key="index" class="homeSaled">
            <div>
              <img src="/static/image/icon02.png">
              <span style="font-size: 18px; color: #2f69a9;">{{ item.account }}</span>
            </div>
            <div class="saledDetail">
              <span>服务器： {{ item.type }}</span>
            </div>
            <div class="saledDetail">
              <span>出售价格： {{ item.price }}</span>
            </div>
            <div class="saledDetail">
              <span>出售时间： {{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-top: 70px;">
      &nbsp;
    </div>
    <LoginTip />
  </section>
</template>

<script>
import Page from '../components/widgets/Page'
import LoginTip from '../components/subssembly/LoginTip'
export default {
  name: 'HomePage',
  components: {
    Page,
    LoginTip
  },
  data () {
    return {
      mainUrl: '/test',
      pageNo: 1,
      pageSize: 12,
      acccountList: [
        {
          name: '账号1',
          type: '国服',
          time: '2019-01-01 09:00:00',
          status: '在售'
        },
        {
          name: '账号2',
          type: '国服',
          time: '2019-01-01 09:00:00',
          status: '已售'
        },
        {
          name: '账号3',
          type: '国服',
          time: '2019-01-01 09:00:00',
          status: '待售'
        },
        {
          name: '账号4',
          type: '国服',
          time: '2019-01-01 09:00:00',
          status: '待售'
        }
      ],
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
    loadData () {
      this.$refs.pageComment.initialDisplay()
    }
  },

  monuted () {
    this.loadData()
  }
}
</script>

<style lang="scss" scoped>
.demo-text {
  color: map-get($demo-colors, $platform);
}

.homePush {
  display: inline-flex;
  width: 100%;
  text-align: left;
  border: 1px solid #b5d5e7;
  background-color: #e9f4f9;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #2f6aa9;
}

.homeSaled {
  width: 100%;
  border-left: 1px solid #b5d5e9;
  border-right: 1px solid #b5d5e9;
  border-bottom: 1px dashed #b5d5e9;
  text-align: left;
  padding: 20px 6px 0 15px;
  background-color: #e9f4f9;
  padding-bottom: 6px;
}

.saledDetail {
  margin-top: 6px;
  font-size: 15px;
  color: #666769;
}
</style>
