import * as types from '../mutation-types'

// user related states can be added here.
const state = {
  id: null,
  name: null,
  title: null,
  token: null,
  isLoggedin: false,
  type: null
}

const mutations = {
  [types.USER_LOGIN] (state, user) {
    state.isLoggedin = true
    state.id = user.userId
    state.type = user.type
  },
  [types.USER_LOGOUT] (state) {
    state.isLoggedin = false
    state.id = null
  },
  [types.UPDATE_USER_TOKEN] (state, token) {
    state.token = token
  }
}

export default {
  state,
  mutations
}
