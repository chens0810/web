<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <i class="title-tx">操作日志</i>
      <div class="mainInput">
        <table class="tableList">
          <tr>
            <th>编号</th>
            <th>用户名称</th>
            <th>操作模块</th>
            <th>时间</th>
          </tr>
          <tr v-for="(item, index) in logList" :key="index">
            <td>{{ item.flowNo }}</td>
            <td>{{ item.logName }}</td>
            <td class="textBlock">
              {{ item.operate }}
            </td>
            <td class="textBlock">
              {{ item.operDate }}
            </td>
          </tr>
          <Page ref="pageComment" :url="mainUrl" :total="total" :page-no="filter.pageNo" :col-count="6" @page-size="filter.pageSize" @callback="showList" />
        </table>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
import Page from '../components/widgets/Page'
export default {
  name: 'InnerLog',
  components: {
    Page
  },
  data () {
    return {
      isLoading: false,
      mainUrl: '/log/find',
      filter: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      colCount: 6,
      logList: []
    }
  },

  mounted () {
    this.loadData()
  },

  methods: {
    loadData () {
      this.logList = []
      this.$refs.pageComment.initialDisplay(this.filter)
    },
    showList (columnsData) {
      this.logList = columnsData.rows
    },
    toggle (loading) {
      this.isLoading = loading
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

.title-tx {
  text-align: left;
  font-size: 28px;
  float: left;
  font-style: normal;
}
</style>
