import axios from 'axios'
// import { encrypt } from './crypto'
import { merge } from 'lodash'
import router from '../router'
const cookieReg = new RegExp(/[^ =;]+(?=)/g)

export const httpAgent = axios
export const httpsAgent = axios.create()
// axios.interceptors.request.use(request => {
//   let origin = request.data

//   if (origin !== null) {
//     request.data = {
//       cipher: encrypt(origin)
//     }

//     if (process.env.NODE_ENV !== 'production') {
//       request.data.origin = origin
//     }
//   }

//   return request
// })

axios.interceptors.response.use(res => {
  let rtnCode = res.data.rtnCode
  if (rtnCode === '444') {
    let keys = document.cookie.match(cookieReg)
    if (keys) {
      let expiresDate = new Date(0).toUTCString()
      keys.forEach(key => {
        document.cookie = `${key}=0;expires=${expiresDate}`
      })
    }
    // window.location = '/auth'
    // this.$Notice.error({
    //   title: '登录已过期，请重新登录！'
    // })
    router.replace({
      path: '/login'
    })
  } else {
    return res
  }
}, err => {
  console.log(err)
  return Promise.reject(err)
})

export default {
  install (Vue, options) {
    if (this.installed) return

    this.installed = true

    merge(axios.defaults, options, process.env.API_CONF)

    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return axios
        }
      },
      $http: {
        get () {
          return axios
        }
      },
      $https: {
        get () {
          return axios
        }
      }
    })
  }
}
