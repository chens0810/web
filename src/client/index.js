if (!('fetch' in window) || !('assign' in Object)) {
  require('./polyfill')
}

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
// import { cookie } from 'js-cookie'
import App from './App'
import router from './router'
import store from './store'
import enrich from './enrich'
import enrichWeb from './enrich/web'
import iView from 'iview'
import cookie from 'js-cookie'
import 'iview/dist/styles/iview.css'

enrich(Vue)
enrichWeb(Vue)

Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false
Vue.use(iView)

sync(store, router)
const { state, dispatch } = store

router.beforeEach((to, from, next) => {
  console.log(to.path, from.path, state.isLoggedin, cookie.get('user_id'))
  if (!state.isLoggedin && cookie.get('user_id')) {
    dispatch('userLogin', {
      userId: cookie.get('user_id'),
      type: cookie.get('type')
    })
    next()
  } else {
    next()
  }
})

router.afterEach((to) => {
  dispatch('setCurrentTrace', to.path)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
