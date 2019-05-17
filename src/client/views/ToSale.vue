<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <img src="/static/image/tit05.jpg">
      <div class="mainInput">
        <el-form ref="form" :model="toSaleData" label-width="80px">
          <el-form-item label="服务器">
            <el-input v-model="toSaleData.type" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">
              立即创建
            </el-button>
            <el-button>
              取消
            </el-button>
          </el-form-item>
        </el-form>
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
        type: ''
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
