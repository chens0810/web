<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <img src="/static/image/tit05.jpg">
      <div class="mainInput">
        <Form ref="formCustom" :model="toSaleData" :rules="ruleCustom" :label-width="80">
          <table>
            <tr>
              <td>服务器</td>
              <td>账号</td>
            </tr>
            <tr>
              <td>
                <Input v-model="toSaleData.type" type="text" style="width: 400px;" />
              </td>
              <td>
                <Input v-model="toSaleData.type" type="text" style="width: 400px;" />
              </td>
            </tr>
          </table>

          <div style="display: inline-flex;">
            <div style="width:50%;">
              <label style="padding-left:100px;">haha</label>
              <Input v-model="toSaleData.type" type="text" style="width: 400px;" />
            </div>
            <div style="width:50%;">
              <label style="padding-left:100px;">haha</label>
              <Input v-model="toSaleData.type" type="text" style="width: 400px;" />
            </div>
          </div>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">
              Submit
            </Button>
            <Button style="margin-left: 8px;" @click="handleReset('formCustom')">
              Reset
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
export default {
  name: 'ToSale',

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
}
</style>
