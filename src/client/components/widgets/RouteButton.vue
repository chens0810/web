<template>
  <button type="button" class="r-btn" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'RouteButton',

  props: {
    to: {
      type: [ String, Object ],
      required: true
    }
  },

  methods: {
    handleClick () {
      this.$router.push(this.to)
    }
  }
}
</script>

<style lang="scss">
.r-btn {
  cursor: pointer;
  border-style: none;
  display: inline-flex;
  background-color: transparent !important;
  font: inherit;
  font-size: 16px;
  color: #ffffff;
  position: relative;
  vertical-align: middle;
  will-change: box-shadow;
  user-select: none;
  outline: 0;
  flex: 0 1 auto;
  height: 36px;
  align-items: center;
  -webkit-box-align: center;
  -webkit-app-region: no-drag;
  margin: auto 20px;

  &:before {
    border-radius: inherit;
    color: inherit;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    opacity: .12;
    transition: .3s cubic-bezier(.25, .8, .5, 1);
    width: 100%;
  }
}
</style>
