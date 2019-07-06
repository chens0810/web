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
            <th>账号类型</th>
            <th>提交时间</th>
            <th>当前状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item, index) in dataList" :key="index">
            <td>
              <a @click="saleDetail(item.id)">{{ serverType[item.serverType] }}</a>
            </td>
            <td>{{ item.userId }}</td>
            <td>{{ system[item.system] }}</td>
            <td>{{ accType[item.type] }}</td>
            <td>{{ item.createdTime }}</td>
            <td>{{ saleStatus[item.state] }}</td>
            <td>
              <Button v-if="item.state === '0'" type="primary" size="small" ghost @click="doAudit(item)">
                审核
              </Button>
              <Button v-if="item.state === '1' && item.isRecommend === '0'" type="info" size="small" ghost @click="doSetRecommend(item.id, '1')">
                设为推荐
              </Button>
              <Button v-if="item.state === '1' && item.isRecommend === '1'" type="info" size="small" ghost @click="doSetRecommend(item.id, '0')">
                取消推荐
              </Button>
            </td>
            <!-- <td class="textBlock">
              {{ item.system }}
            </td> -->
          </tr>
          <Page ref="pageComment" :url="mainUrl" :total="total" :page-no="filter.pageNo" :col-count="6" @page-size="filter.pageSize" @callback="showList" />
        </table>
      </div>
    </div>
    <Modal v-model="auditModal" title="出售审核" @on-ok="submitAudit">
      <Form ref="formCustom" :model="auditData" style="text-align: left; font-size: 16px;">
        <FormItem label="审核结果：">
          <RadioGroup v-model="auditData.auditFlag" size="large">
            <Radio label="0">
              <span>通过</span>
            </Radio>
            <Radio label="1">
              <span>不通过</span>
            </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem v-if="auditData.auditFlag === '1'" label="拒绝原因：">
          <Input v-model="auditData.remark" type="textarea" style="width: 300px;" />
        </FormItem>
      </Form>
    </Modal>
  </section>
</template>

<script type="text/javascript">
import Page from '../components/widgets/Page'
import { serverType, accType, system, saleStatus } from '@/utils/dictionary'
export default {
  name: 'SaleAuth',
  components: {
    Page
  },

  data () {
    return {
      serverType: serverType,
      accType: accType,
      system: system,
      saleStatus: saleStatus,
      auditModal: false,
      isLoading: false,
      mainUrl: '/sale/queryList',
      filter: {
        pageNo: 1,
        total: 0,
        pageSize: 10
      },
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
    doAudit (item) {
      this.auditModal = true
      this.auditData.id = item.id
    },
    saleDetail (id) {
      this.$router.push('/toSale/' + id)
    },
    submitAudit () {
      this.$http.post('/sale/audit', this.auditData).then(res => {
        if (res.data.rtnCode === '000') {
          this.$Notice.success({
            title: '审核成功！'
          })
          this.loadData()
        } else {
          this.$Notice.error({
            title: '提交失败，请检查！'
          })
        }
      })
    },
    doSetRecommend (id, flag) {
      let param = {
        id: id,
        isRecommend: flag
      }
      this.$http.post('/sale/setRecommend', param).then(res => {
        if (res.data.rtnCode === '000') {
          this.$Notice.success({
            title: '设置成功！'
          })
          this.loadData()
        } else {
          this.$Notice.error({
            title: '提交失败，请检查！'
          })
        }
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

.title-tx {
  text-align: left;
  font-size: 28px;
  float: left;
  font-style: normal;
}
</style>
