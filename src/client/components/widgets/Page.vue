<template>
  <tr class="pageTr">
    <td :colspan="colCount">
      <button @click="goUpPage">
        上一页
      </button>
      <span style="color: #666666; padding: 10px;">第{{ pageNo }}/{{ total }}页</span>
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
      default: 0
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

  methods: {
    initialDisplay () {
      alert(this.url, this.pageNo)
    },
    goUpPage () {
      console.log('up', this.pageNo)
    },
    goNextPage () {
      console.log('next', this.pageNo)
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
      }
    }
  }
</style>
