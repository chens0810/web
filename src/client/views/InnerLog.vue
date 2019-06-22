<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <i class="title-tx">操作日志</i>
      <button class="login-btn" @click="onSubmit">
        查询
      </button>
      <div class="mainInput">
        <table class="tableList">
          <tr>
            <th>编号</th>
            <th>用户名称</th>
            <th>操作模块</th>
            <th>获取数据</th>
            <th>时间</th>
          </tr>
          <tr v-for="(item, index) in acccountList" :key="index">
            <td>{{ item.flowNo }}</td>
            <td>{{ item.logName }}</td>
            <td class="textBlock">
              {{ item.operate }}
            </td>
            <td class="textBlock">
              {{ item.errorMsg }}
            </td>
            <td class="textBlock">
              {{ item.operDate }}
            </td>
          </tr>
          <Page ref="pageComment" :url="mainUrl" :page-no="pageNo" :col-count="5" @page-size="pageSize" />
        </table>
      </div>
    </div>
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
      mainUrl: '/log/find',
      pageNo: 1,
      pageSize: 12,
      acccountList: [
        {
          id: '1',
          name: '账号1',
          type: '查询寄售',
          reqCode: '{type:"1",code:"2"}',
          time: '2019-01-01 09:00:00'
        },
        {
          id: '2',
          name: '账号1',
          type: '我要寄售',
          reqCode: '{type:"1",code:"2"}',
          time: '2019-01-01 09:00:00'
        },
        {
          id: '3',
          name: '账号1',
          type: '我要发布',
          reqCode: '{type:"1",code:"2"}',
          time: '2019-01-01 09:00:00'
        },
        {
          id: '4',
          name: '账号1',
          type: '我要发布',
          reqCode: '{type:"1",code:"2"}',
          time: '2019-01-01 09:00:00'
        },
        {
          id: '5',
          name: '账号1',
          type: '查询寄售',
          reqCode: '{type:"1",code:"2"}',
          time: '2019-01-01 09:00:00'
        },
        {
          id: '1',
          name: '账号2',
          type: '查询账号',
          reqCode: '{type:"1",code:"2"}',
          time: '2019-01-01 09:00:00'
        },
        {
          id: '6',
          name: '账号3',
          type: '查询账号',
          reqCode: '{type:"1",code:"2"}',
          time: '2019-01-01 09:00:00'
        },
        {
          id: '7',
          name: '账号4',
          type: '查询寄售',
          reqCode: '{type:"1",code:"2"}',
          time: '2019-01-01 09:00:00'
        }
      ]
    }
  },

  methods: {
    onSubmit () {
      console.log('key')
      this.$http.post('/log/find', this.user).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.acccountList = res.data.data
        } else {
          this.$Notice.error({
            title: '查询异常！'
          })
        }
      })
    },
    doUp (ev) {
      alert('已禁止' + ev.id)
    },
    doCancel () {
      this.$router.push('/account')
    }
  },

  monuted () {
    alert('已禁止')
    this.onSubmit()
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
