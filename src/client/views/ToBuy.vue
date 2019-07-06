<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <img src="/static/image/tit06.jpg">
      <div class="mainInput">
        <div style="width:400px; margin: 0 auto; padding-top: 20px;">
          <Form ref="formCustom" :model="toBuyData" :rules="ruleCustom" :label-width="100" style="text-align: left; font-size: 16px;">
            <FormItem label="服务器">
              <RadioGroup v-model="toBuyData.serverType" size="large">
                <Radio label="0" :disabled="isReadOnly">
                  <span>国服</span>
                </Radio>
                <Radio label="1" :disabled="isReadOnly">
                  <span>日服</span>
                </Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="求购预算">
              <Input v-model="toBuyData.buyBuget" size="large" placeholder="请输入求购预算" clearable="true" type="Number" :disabled="isReadOnly" />
            </FormItem>
            <FormItem label="特殊需求">
              <Input v-model="toBuyData.demand" size="large" placeholder="请输入特殊需求" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem label="求购留言">
              <Input v-model="toBuyData.message" size="large" placeholder="请输入求购留言" clearable="true" :disabled="isReadOnly" />
            </FormItem>
          </Form>
        </div>
        <div class="buttonDiv">
          <Button v-if="!isReadOnly" class="submitBtn" @click="onSubmit">
            提交
          </Button>
          <Button @click="doCancel">
            {{ !isReadOnly ? '取消' : '返回' }}
          </Button>
        </div>
      </div>
    </div>
    <LoginTip />
  </section>
</template>

<script type="text/javascript">
import LoginTip from '../components/subssembly/LoginTip'
export default {
  name: 'ToBuy',
  components: {
    LoginTip
  },
  data () {
    return {
      toBuyData: {},
      isReadOnly: false
    }
  },

  mounted () {
    let buyId = this.$route.params.id
    if (buyId) {
      this.$http.post('/buy/queryDetail', { id: buyId }).then(res => {
        if (res.data.rtnCode === '000') {
          this.toBuyData = res.data.data
          this.isReadOnly = true
        } else {
          this.$Notice.error({
            title: res.data.rtnMsg
          })
        }
      })
    }
  },

  methods: {
    onSubmit () {
      this.$http.post('/buy/addBuy', this.toBuyData).then(res => {
        console.log(res)
        if (res.data.rtnCode === '000') {
          this.$Notice.success({
            title: '提交成功，请耐心等待审核！'
          })
          this.$router.push('Account')
        } else {
          this.$Notice.error({
            title: '提交失败，请检查！'
          })
        }
      })
    },
    doCancel () {
      this.$router.go(-1)
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
