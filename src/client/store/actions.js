import * as types from './mutation-types'
import router from '@/router'
import cookie from 'js-cookie'
// import { httpsAgent } from '../enrich/axios'
// import { VALIDATE_USER_TOKEN, STATES } from '../utils/api'
// add axios here if nessesary - Luventa

export const userLogin = ({ commit }, user, redirect = true) => {
  let userId = user.userId
  let type = user.type
  console.log(userId, type, 'action-userlogin')
  if (userId) {
    !cookie.get('user_id') && cookie.set('user_id', userId)
    !cookie.get('type') && cookie.set('type', type)
    commit(types.USER_LOGIN, user)
    // redirect && router.push('/home')
  } else {
    commit(types.USER_LOGOUT)
    router.push('/')
  }
}

export const userLogout = ({ commit }) => {
  cookie.remove('user_id')
  cookie.remove('type')
  commit(types.USER_LOGOUT)
  router.push('/')
}

export const updateUserToken = ({ commit }, token) => {
  commit(types.UPDATE_USER_TOKEN, token)
}

export const toggleShowLogin = ({ commit }) => {
  commit(types.TOGGLE_SHOW_LOGIN)
}

export const toggleDevice = ({ commit }, isMobile) => commit(types.TOGGLE_DEVICE, isMobile)

// Trace actions
export const setCurrentTrace = ({ commit }, current) => {
  commit(types.SET_CURRENT_TRACE, current)
}
