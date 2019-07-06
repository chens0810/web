<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <img src="/static/image/tit03.jpg">
      <div class="mainInput">
        <table class="tableList">
          <tr>
            <th>操作系统</th>
            <th>服务器</th>
            <th>账号类型</th>
            <th>提交时间</th>
            <th>当前状态</th>
            <!-- <th>操作</th> -->
          </tr>
          <tr v-for="(item, index) in dataList" :key="index">
            <td>
              <a @click="saleDetail(item.id)">{{ serverType[item.serverType] }}</a>
            </td>
            <td class="textBlock">
              {{ system[item.system] }}
            </td>
            <td class="textBlock">
              {{ accType[item.type] }}
            </td>
            <td class="textBlock">
              {{ item.createdTime }}
            </td>
            <td>{{ saleStatus[item.state] }}</td>
          <!--   <td>
              <Button type="info" size="small" @click="saleDetail(item)">
                详情
              </Button>
            </td> -->
          </tr>
          <Page ref="pageComment" :url="mainUrl" :total="total" :page-no="filter.pageNo" :col-count="6" @page-size="filter.pageSize" @callback="showList" />
        </table>
      </div>
    </div>
    <LoginTip />
  </section>
</template>

<script type="text/javascript">
import Page from '../components/widgets/Page'
import { serverType, accType, system, saleStatus } from '@/utils/dictionary'
import LoginTip from '../components/subssembly/LoginTip'
export default {
  name: 'MySaled',
  components: {
    Page,
    LoginTip
  },

  data () {
    return {
      serverType: serverType,
      accType: accType,
      system: system,
      saleStatus: saleStatus,
      isLoading: false,
      mainUrl: '/sale/myList',
      filter: {
        pageNo: 1,
        total: 0,
        pageSize: 10
      },
      dataList: []
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
    saleDetail (id) {
      this.$router.push('/toSale/' + id)
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
