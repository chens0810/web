<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <img src="/static/image/tit04.jpg">
      <div class="mainInput">
        <table class="tableList">
          <tr>
            <th>求购人</th>
            <th>服务器</th>
            <th>求购预算</th>
            <th>特殊需求</th>
            <th>求购留言</th>
            <th>提交时间</th>
            <th>当前状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item, index) in dataList" :key="index">
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
            <td>{{ auditStatus[item.state] }}</td>
            <td>
              <Button type="info" size="small" @click="saleDetail(item)">
                详情
              </Button>
            </td>
          </tr>
          <Page ref="pageComment" :url="mainUrl" :total="total" :page-no="filter.pageNo" :col-count="8" @page-size="filter.pageSize" @callback="showList" />
        </table>
      </div>
    </div>
    <LoginTip />
  </section>
</template>

<script type="text/javascript">
import Page from '../components/widgets/Page'
import LoginTip from '../components/subssembly/LoginTip'
import { serverType, accType, system, auditStatus } from '@/utils/dictionary'
export default {
  name: 'MyBuyed',
  components: {
    Page,
    LoginTip
  },

  data () {
    return {
      serverType: serverType,
      accType: accType,
      system: system,
      auditStatus: auditStatus,
      auditModal: false,
      isLoading: false,
      mainUrl: '/buy/myList',
      filter: {
        pageNo: 1,
        total: 0,
        pageSize: 10
      },
      colCount: 6,
      dataList: [],
      auditData: {
        auditFlag: '0'
      }
    }
  },
  mounted () {
    this.loadData()
  },

  methods: {
    loadData () {
      this.dataList = []
      this.$refs.pageComment.initialDisplay(this.filter)
    },
    showList (columnsData) {
      this.dataList = columnsData.rows
    },
    toggle (loading) {
      this.isLoading = loading
    },
    saleDetail (item) {
      this.$Notice.success({
        title: '敬请期待！'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mainInput {
  margin-top: 40px;
  min-height: 500px;
  border: 1px solid #b5d5e7;
  background-color: #e9f4f9;
  border-radius: 5px;
  text-align: center;
}

.imageDiv {
  width: 1050px;
  margin: 0 auto;
  border: 1px solid #b5d5e7;
  border-radius: 5px;
  text-align: left;
}
</style>
