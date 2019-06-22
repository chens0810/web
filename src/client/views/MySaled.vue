<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <img src="/static/image/tit03.jpg">
      <div class="mainInput">
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
    <LoginTip />
  </section>
</template>

<script type="text/javascript">
import Page from '../components/widgets/Page'
import LoginTip from '../components/subssembly/LoginTip'
export default {
  name: 'MySaled',
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
          name: '账号1',
          type: '国服',
          time: '2019-01-01 09:00:00',
          status: '在售'
        },
        {
          name: '账号1',
          type: '国服',
          time: '2019-01-01 09:00:00',
          status: '在售'
        },
        {
          name: '账号1',
          type: '国服',
          time: '2019-01-01 09:00:00',
          status: '在售'
        },
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
    onSubmit () {
      console.log('onSubmit')
    },
    doCancel () {
      this.$router.push('/account')
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
