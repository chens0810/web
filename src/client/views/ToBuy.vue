<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <img src="/static/image/tit06.jpg">
      <div class="mainInput">
        <div style="width:400px; margin: 0 auto; padding-top: 20px;">
          <Form ref="formCustom" :model="toSaleData" :rules="ruleCustom" :label-width="100" style="text-align: left; font-size: 16px;">
            <FormItem label="服务器">
              <RadioGroup v-model="toSaleData.server" size="large">
                <Radio label="0">
                  <span>国服</span>
                </Radio>
                <Radio label="1">
                  <span>日服</span>
                </Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="求购预算">
              <Input v-model="toSaleData.buyBuget" size="large" placeholder="请输入求购预算" clearable="true" />
            </FormItem>
            <FormItem label="特殊需求">
              <Input v-model="toSaleData.demand" size="large" placeholder="请输入特殊需求" clearable="true" />
            </FormItem>
            <FormItem label="求购留言">
              <Input v-model="toSaleData.message" size="large" placeholder="请输入求购留言" clearable="true" />
            </FormItem>
          </Form>
        </div>
        <div class="buttonDiv">
          <Button class="submitBtn">
            提交
          </Button>
          <Button @click="doCancel">
            取消
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
      toSaleData: {
        type: '',
        system: ''
      }
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
