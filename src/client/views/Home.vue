<template>
  <section class="text-center mainWidth">
    <div style="padding-top:44px;">
      <img src="/static/image/ban-ad.png" width="100%">
    </div>
    <div style="display: inline-flex; margin-top: 38px;">
      <div style="width: 880px;">
        <div class="homePush">
          <img src="/static/image/icon01.png" style="margin: 12px 9px;">
          <span style="margin: 0 0;">每日推送优质账号：<label v-for="(item, index) in recommendList" :key="index"> {{ item.userId }}</label></span>
        </div>
        <div style="margin-top: 20px;">
          <div style="min-height: 350px;">
            <table class="tableList">
              <tr>
                <th>收购名称</th>
                <th>国服/日服</th>
                <th>发布时间</th>
                <th class="trLast">
                  状态
                </th>
              </tr>
              <tr v-for="(item, index) in saleDataList" :key="`sale${index}`">
                <td>{{ item.userId }}</td>
                <td class="textBlock">
                  {{ serverType[item.serverType] }}
                </td>
                <td class="textBlock">
                  {{ item.auditTime }}
                </td>
                <td class="trLast">
                  {{ saleStatus[item.state] }}
                </td>
              </tr>
              <Page ref="salePageComment" :url="saleMainUrl" :page-no="saleFilter.pageNo" :col-count="6" @page-size="saleFilter.pageSize" @callback="saleShowList" />
            </table>
          </div>
          <div style="padding-top: 40px;">
            <table class="tableList">
              <tr>
                <th>求购人</th>
                <th>服务器</th>
                <th>求购预算</th>
                <th>特殊需求</th>
                <th>求购留言</th>
                <th>提交时间</th>
                <th class="trLast">
                  当前状态
                </th>
              </tr>
              <tr v-for="(item, index) in buyDataList" :key="`buy${index}`">
                <td>{{ item.userId }}</td>
                <td class="textBlock">
                  {{ serverType[item.serverType] }}
                </td>
                <td class="textBlock">
                  {{ item.buyBuget }}
                </td>
                <td class="textBlock">
                  {{ item.demand }}
                </td>
                <td class="textBlock">
                  {{ item.message }}
                </td>
                <td class="textBlock">
                  {{ item.createdTime }}
                </td>
                <td>{{ buyStatus[item.state] }}</td>
              </tr>
              <Page ref="buyPageComment" :url="buyMainUrl" :page-no="buyFilter.pageNo" :col-count="7" @page-size="buyFilter.pageSize" @callback="buyShowList" />
            </table>
          </div>
        </div>
      </div>
      <div style="width:300px; margin-left: 20px;">
        <div style="min-height: 465px;">
          <div style="height:50px;">
            <img src="/static/image/tit02.jpg" width="300px">
          </div>
          <div style="border-bottom: 1px solid #b5d5e9;">
            <div v-for="(item, index) in saledList" :key="index" class="homeSaled">
              <div>
                <img src="/static/image/icon02.png">
                <span style="font-size: 18px; color: #2f69a9;">{{ item.userId }}</span>
              </div>
              <div class="saledDetail">
                <span>服务器： {{ serverType[item.serverType] }}</span>
              </div>
              <div class="saledDetail">
                <span>出售价格： {{ item.price }}</span>
              </div>
              <div class="saledDetail">
                <span>出售时间： {{ item.createdTime }}</span>
              </div>
            </div>
          </div>
        </div>
        <div style="padding-top: 10px;">
          <div style="height:50px;">
            <img src="/static/image/tit02.jpg" width="300px">
          </div>
          <div style="border-bottom: 1px solid #b5d5e9;">
            <div v-for="(item, index) in buyedList" :key="index" class="homeSaled">
              <div>
                <img src="/static/image/icon02.png">
                <span style="font-size: 18px; color: #2f69a9;">{{ item.userId }}</span>
              </div>
              <div class="saledDetail">
                <span>服务器： {{ serverType[item.serverType] }}</span>
              </div>
              <div class="saledDetail">
                <span>出售价格： {{ item.price }}</span>
              </div>
              <div class="saledDetail">
                <span>出售时间： {{ item.createdTime }}</span>
              </div>
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
import { serverType, saleStatus, buyStatus } from '@/utils/dictionary'
export default {
  name: 'HomePage',
  components: {
    Page,
    LoginTip
  },
  data () {
    return {
      serverType: serverType, // 数据字典
      saleStatus: saleStatus, // 数据字典
      buyStatus: buyStatus, // 数据字典
      isLoading: false,
      saleMainUrl: '/sale/homeList',
      buyMainUrl: '/buy/homeList',
      saleFilter: {
        pageNo: 1,
        total: 0,
        pageSize: 5
      },
      buyFilter: {
        pageNo: 1,
        total: 0,
        pageSize: 5
      },
      saleDataList: [],
      buyDataList: [],
      recommendList: [],
      saledList: [],
      buyedList: []
    }
  },

  mounted () {
    this.saleLoadData()
    this.buyLoadData()
    this.getRecommendList()
    this.getSaledList()
    this.getBuyedList()
  },

  methods: {
    saleLoadData () {
      this.saleDataList = []
      this.$refs.salePageComment.initialDisplay(this.saleFilter)
    },
    saleShowList (columnsData) {
      this.saleDataList = columnsData.rows
    },
    toggle (loading) {
      this.isLoading = loading
    },
    getRecommendList () {
      this.$http.post('/sale/homeRecommend', { pageNo: 1, pageSize: 5 }).then(res => {
        if (res.data.rtnCode === '000') {
          this.recommendList = res.data.data.rows
        }
      })
    },
    getSaledList () {
      this.$http.post('/sale/homeSaled', { pageNo: 1, pageSize: 3 }).then(res => {
        if (res.data.rtnCode === '000') {
          this.saledList = res.data.data.rows
        }
      })
    },
    getBuyedList () {
      this.$http.post('/buy/homeBuyed', { pageNo: 1, pageSize: 3 }).then(res => {
        if (res.data.rtnCode === '000') {
          this.buyedList = res.data.data.rows
        }
      })
    },
    buyLoadData () {
      this.buyDataList = []
      this.$refs.buyPageComment.initialDisplay(this.buyFilter)
    },
    buyShowList (columnsData) {
      this.buyDataList = columnsData.rows
    }
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
