<template>
  <section class="text-center mainWidth">
    <div style="padding-top:45px; width: 1113px;">
      <img src="/static/image/tit05.jpg">
      <div class="mainInput">
        <div style="width:400px; margin: 0 auto; padding-top: 20px;">
          <Form ref="formCustom" :model="toSaleData" :rules="ruleCustom" :label-width="100" style="text-align: left; font-size: 16px;">
            <FormItem label="服务器">
              <RadioGroup v-model="toSaleData.serverType" size="large">
                <Radio label="0" :disabled="isReadOnly">
                  <span>国服</span>
                </Radio>
                <Radio label="1" :disabled="isReadOnly">
                  <span>日服</span>
                </Radio>
              </RadioGroup>
            </FormItem>
            <!-- 根据服务器进行的判断 -->
            <FormItem v-if="toSaleData.serverType === '0'" label="账号绑定">
              <Input v-model="toSaleData.accBinding" size="large" placeholder="请输入账号绑定" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.serverType === '0'" label="备注">
              <Input v-model="toSaleData.remark" size="large" placeholder="请输入备注" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.serverType === '1'" label="找回情况">
              <Input v-model="toSaleData.caseBack" size="large" placeholder="请输入找回情况" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.serverType === '1'" label="充值证明">
              <Input v-model="toSaleData.topupProve" size="large" placeholder="请输入充值证明" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem label="操作系统">
              <RadioGroup v-model="toSaleData.system" size="large">
                <Radio label="0" :disabled="isReadOnly">
                  <span>IOS</span>
                </Radio>
                <Radio label="1" :disabled="isReadOnly">
                  <span>安卓</span>
                </Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="账号类型">
              <RadioGroup v-model="toSaleData.type" size="large">
                <Radio label="1" :disabled="isReadOnly">
                  <span>成品账号</span>
                </Radio>
                <Radio label="0" :disabled="isReadOnly">
                  <span>初始账号</span>
                </Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="是否有图">
              <RadioGroup v-model="toSaleData.haspic" size="large">
                <Radio label="1" :disabled="isReadOnly">
                  <span>有图</span>
                </Radio>
                <Radio label="0" :disabled="isReadOnly">
                  <span>无图</span>
                </Radio>
              </RadioGroup>
              <!-- <Button v-if="toSaleData.haspic === '1'" type="text" size="large">
                <Icon type="md-add-circle" size="16" />添加
              </Button> -->
            </FormItem>
            <!-- 根据是否有图进行的判断 -->
            <!-- 有图情况下进行的录入 -->
            <FormItem v-if="toSaleData.haspic === '1'" label="商品名称">
              <Input v-model="toSaleData.shopName" size="large" placeholder="请输入商品名称" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '1'" label="英灵数量">
              <Input v-model="toSaleData.heroCount" type="number" size="large" placeholder="请输入英灵数量" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '1'" label="主要英灵">
              <Input v-model="toSaleData.mainHero" size="large" placeholder="请输入主要英灵" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '1'" label="关键词">
              <Input v-model="toSaleData.keyWord" size="large" placeholder="请输入关键词" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <!-- 无图情况下进行的录入 -->
            <FormItem v-if="toSaleData.haspic === '0'" label="英灵数量">
              <Input v-model="toSaleData.heroCount" type="number" size="large" placeholder="请输入英灵数量" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '0'" label="描述">
              <Input v-model="toSaleData.description" size="large" placeholder="请输入描述" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '0'" label="特殊">
              <Input v-model="toSaleData.special" size="large" placeholder="请输入特殊" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '0'" label="盘子数">
              <Input v-model="toSaleData.plateCount" type="number" size="large" placeholder="请输入盘子数" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '0'" label="石头数">
              <Input v-model="toSaleData.stoneCount" type="number" size="large" placeholder="请输入石头数" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '0'" label="找回情况">
              <Input v-model="toSaleData.caseBack" size="large" placeholder="请输入找回情况" clearable="true" :disabled="isReadOnly" />
            </FormItem>
            <FormItem v-if="toSaleData.haspic === '1' && !isReadOnly" label="上传图片">
              <Upload type="drag" :action="`${urlPrefix}/file/upload`" :on-success="handleSuccess" :on-remove="handleRemove" :on-preview="handlePreview">
                <Icon type="md-add-circle" size="16" />添加
              </Upload>
            </FormItem>
          </Form>
        </div>
        <div v-if="toSaleData.haspic === '1'" class="imageDiv">
          <div>
            <span style="font-size: 16px; padding-left: 30px; padding-top: 10px;">截图列表：</span>
          </div>
          <div>
            <img v-for="(item, index) in toSaleData.picList" :key="index" :src="`${urlPrefix}/file/download?fileId=${item.id}&fileName=${item.imgName}`" style="width: 200px; padding: 5px 5px;">
          </div>
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
    <Modal v-model="imgModal" :title="`${showFile.fileName}-查看`">
      <img :src="`${urlPrefix}/file/download?fileId=${showFile.fileId}&fileName=${showFile.fileName}`">
    </Modal>
  </section>
</template>

<script type="text/javascript">
import LoginTip from '../components/subssembly/LoginTip'
export default {
  name: 'ToSale',
  components: {
    LoginTip
  },
  data () {
    return {
      urlPrefix: process.env.API_CONF.baseURL,
      imgModal: false,
      toSaleData: {
        picList: []
      },
      showFile: {},
      isReadOnly: false
    }
  },
  mounted () {
    let saleId = this.$route.params.id
    // 展示页面
    if (saleId) {
      this.$http.post('/sale/queryDetail', { id: saleId }).then(res => {
        if (res.data.rtnCode === '000') {
          this.toSaleData = res.data.data
          this.isReadOnly = true
        } else {
          this.$Notice.error({
            title: res.data.rtnMsg
          })
        }
      })
    }
    console.log(this.$route.params.id)
    // console.log(process.env)
  },
  methods: {
    onSubmit () {
      this.$http.post('/sale/addSale', this.toSaleData).then(res => {
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
      // this.$router.push('/account')
    },
    handleSuccess (res, file) {
      if (res.rtnCode === '000') {
        this.toSaleData.picList.push({
          id: res.data.id,
          imgName: res.data.fileName
        })
      }
      console.log(res, file)
    },
    handleRemove (file, fileList) {
      let fileId = file.response.data.id
      for (let i = 0; i < this.toSaleData.picList.length; i++) {
        let item = this.toSaleData.picList[i]
        if (fileId === item.id) {
          this.toSaleData.picList.splice(i, 1)
        }
      }
      console.log(fileList, file)
    },
    handlePreview (file) {
      this.showFile.fileId = file.response.data.id
      this.showFile.fileName = file.response.data.fileName
      this.imgModal = true
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
