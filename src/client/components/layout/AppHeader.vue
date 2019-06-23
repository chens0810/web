<template>
  <nav :class="classes">
    <div class="header-main">
      <section style="background-image: url(static/image/logo.png); padding-right: 100px;" />
      <RouteButton v-for="(item, index) in menuList" :key="index" :to="item.path" type="text">
        {{ item.name }}
      </RouteButton>
    </div>
    <div v-if="_isElectron" class="is-pulled-right">
      <Icon type="close" size="24" @click="closeWindow" />
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Icon from '../widgets/Icon'
import RouteButton from '../widgets/RouteButton'

export default {
  name: 'AppHeader',

  components: {
    Icon,
    RouteButton
  },

  data () {
    return {
      menu: {
        tourists: [ // 游客展示菜单
          {
            name: '主页',
            path: '/home'
          },
          {
            name: '用户登录',
            path: '/Login'
          }
        ],
        admin: [ // 管理员展示菜单
          {
            name: '操作日志',
            path: '/innerLog'
          },
          {
            name: '用户列表',
            path: '/userList'
          }
        ],
        members: [ // 普通用户展示菜单
          {
            name: '主页',
            path: '/home'
          },
          {
            name: '个人中心',
            path: '/account'
          }
        ]
      }
    }
  },

  computed: {
    ...mapGetters({
      _user: '_user',
      _trace: '_trace'
    }),
    classes () {
      return [
        'app-header',
        'animated',
        {
          slideInDown: !this._trace.inLandpage
        }
      ]
    },
    menuList () {
      console.log(this._user)
      if (this._user.isLoggedin) {
        // 如果角色是管理员
        if (this._user.type === '2') {
          return this.menu.admin
        } else {
          return this.menu.members
        }
      } else {
        return this.menu.tourists
      }
    }
  },

  methods: {
    minimizeWindow () {
      this.$app.remote.getCurrentWindow().minimize()
    },
    closeWindow () {
      this.$app.remote.getCurrentWindow().close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixins.scss';

.app-header {
  @include dragable;
  height: 104px;
  background-image: url(/static/image/header-bg.png);
  position: relative;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
  display: none;
  flex: 1 1 auto;
  justify-content: space-between;
  -webkit-user-select: none;
  -webkit-app-region: drag;

  &.slideInDown {
    display: flex;
  }

  > div {
    @include undragable;
    padding: 0 .5rem;
    display: flex;
    align-items: center;

    section {
      display: flex;
      width: 2.5rem;
      height: 2.5rem;
      padding: .5rem;
      background-repeat: no-repeat;
      background-size: 100%;

      &:hover {
        cursor: pointer;
      }
    }

    .r-btn {
      line-height: 1.5;
      padding: .5rem;
      position: relative;
      display: flex;
      align-items: center;
      -webkit-app-region: no-drag;

      &:hover {
        background-color: #d7dbde;
      }
    }
  }
}

.header-main {
  line-height: 104px;
  margin: 0 auto;
  width: 1200px;
}
</style>
