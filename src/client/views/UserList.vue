<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <i class="title-tx">用户列表</i>
      <div class="mainInput">
        <table class="tableList">
          <tr>
            <th>用户名称</th>
            <th>登录方式</th>
            <th>上次登录时间</th>
          </tr>
          <tr v-for="(item, index) in acccountList" :key="index">
            <td>{{ item.userName }}</td>
            <td v-if="item.type==='2'" class="textBlock">
              网页
            </td>
            <td v-else-if="item.type==='1'">
              QQ
            </td>
            <td v-else-if="item.type==='0'">
              微信
            </td>
            <td v-else>
              -
            </td>
            <td class="textBlock">
              {{ item.logTime }}
            </td>
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
export default {
  name: 'UserList',
  components: {
    Page
  },

  data () {
    return {
      isLoading: false,
      mainUrl: '/user/list',
      filter: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      colCount: 6,
      acccountList: []
    }
  },

  mounted () {
    this.loadData()
  },

  methods: {
    loadData () {
      this.acccountList = []
      this.$refs.pageComment.initialDisplay(this.filter)
    },
    showList (columnsData) {
      this.acccountList = columnsData.rows
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
