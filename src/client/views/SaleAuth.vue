<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <i class="title-tx">出售-审核</i>
      <button class="login-btn" @click="loadData">
        查询
      </button>
      <div class="mainInput">
        <table class="tableList">
          <tr>
            <th>操作系统</th>
            <th>出售人</th>
            <th>服务器</th>
            <th>操作系统</th>
            <th>账号类型</th>
            <th>提交时间</th>
          </tr>
          <tr v-for="(item, index) in dataList" :key="index">
            <td>{{ item.system }}</td>
            <td>{{ item.userId }}</td>
            <td>{{ item.serverType }}</td>
            <td>{{ item.system }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.createdTime }}</td>
            <!-- <td class="textBlock">
              {{ item.system }}
            </td> -->
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
  name: 'SaleAuth',
  components: {
    Page
  },

  data () {
    return {
      isLoading: false,
      mainUrl: '/sale/toAuthList',
      filter: {
        pageNo: 1,
        pageSize: 10
      },
      total: 0,
      colCount: 6,
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
