<template>
  <tr class="pageTr">
    <td :colspan="colCount">
      <button @click="goUpPage">
        上一页
      </button>
      <span style="color: #666666; padding: 10px;">共{{ total }}条记录，第{{ pageNo }}/{{ totalPage }}页</span>
      <button @click="goNextPage">
        下一页
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PageComment',

  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    pageNo: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    url: {
      type: String,
      default: ''
    },
    colCount: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      totalPage: 1,
      filter: {}
    }
  },
  methods: {
    initialDisplay (filter) {
      this.filter = filter
      this.pageSize = filter.pageSize
      this.$http.post(this.url, this.filter).then(res => {
        if (res.data.rtnCode === '000') {
          this.total = res.data.data.total
          this.$emit('callback', res.data.data)
          let mo = this.total % this.pageSize
          let totalPage = parseInt(this.total / this.pageSize)
          if (mo === 0) {
            this.totalPage = totalPage
          } else {
            this.totalPage = totalPage + 1
          }
        } else {
          this.$Notice.error({
            title: res.data.rtnMsg
          })
        }
      })
    },
    goUpPage () {
      if (this.pageNo > 1) {
        this.filter.pageNo = this.pageNo - 1
        this.initialDisplay(this.filter)
      }
    },
    goNextPage () {
      if (this.pageNo < this.totalPage) {
        this.filter.pageNo = this.pageNo + 1
        this.initialDisplay(this.filter)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .pageTr {
    border-top: 1px solid #b5d5e7;

    > td {
      text-align: center;

      > button {
        font-size: 16px;
        width: 110px;
        border-radius: 20px;
        color: #2f6aa9;
        height: 35px;
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #e9f4f9;
        outline: none;
      }
    }
  }
</style>
