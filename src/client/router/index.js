import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NotFound from '@/views/404'

Vue.use(Router)

const lazyLoad = (name, index = false) => () => import(`@view/${name}${index ? '/index' : ''}.vue`)

// const generateRoutes = (items, needAuth, routes = []) => {
//   for (let i = 0, l = items.length; i < l; i++) {
//     let route
//     let item = items[i]
//     if ((item.name || item.file) && !item.labelOnly) {
//       route = {
//         name: item.name,
//         path: item.path || `/${item.name.toLowerCase()}`,
//         alias: item.alias,
//         component: lazyLoad(item.file || item.name, item.useIdx),
//         meta: {
//           label: item.label || item.routeLabel,
//           icon: item.icon,
//           needAuth: (item.needAuth === null) ? needAuth : item.needAuth,
//           parent: item.parent
//         }
//       }
//     }
//     if (route) {
//       if (item.children) {
//         route.children = generateRoutes(item.children, route.meta.needAuth)
//       }
//       routes.push(route)
//     }
//   }
//   return routes
// }

export default new Router({
  base: process.env.ROUTE_BASE,
  mode: process.env.TARGET !== 'web' ? 'hash' : process.env.ROUTE_MODE,
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/httpDemo',
    name: 'HttpDemo',
    component: lazyLoad('HttpDemo')
  }, {
    path: '/404',
    name: '404',
    component: NotFound
  }, {
    path: '*',
    redirect: '/home'
  }, {
    path: '/account',
    name: 'Account',
    component: lazyLoad('Account')
  }, {
    path: '/toSale',
    name: 'ToSale',
    component: lazyLoad('ToSale')
  }, {
    path: '/toSale/:id',
    name: 'ToSale',
    component: lazyLoad('ToSale')
  }, {
    path: '/toBuy',
    name: 'ToBuy',
    component: lazyLoad('ToBuy')
  }, {
    path: '/toBuy/:id',
    name: 'ToBuy',
    component: lazyLoad('ToBuy')
  }, {
    path: '/mySaled',
    name: 'MySaled',
    component: lazyLoad('MySaled')
  }, {
    path: '/myBuyed',
    name: 'MyBuyed',
    component: lazyLoad('MyBuyed')
  }, {
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/views/Login.vue'], resolve)
  }, {
    path: '/wechartLogin',
    name: 'WechartLogin',
    component: resolve => require(['@/views/WechartLogin.vue'], resolve)
  }, {
    path: '/userList',
    name: 'UserList',
    component: resolve => require(['@/views/UserList.vue'], resolve)
  }, {
    path: '/innerLog',
    name: 'InnerLog',
    component: resolve => require(['@/views/InnerLog.vue'], resolve)
  }, {
    path: '/qqLogin',
    name: 'QQLogin',
    component: resolve => require(['@/views/QQLogin.vue'], resolve)
  }, {
    path: '/saleAuth',
    name: 'SaleAuth',
    component: lazyLoad('SaleAuth')
  }, {
    path: '/buyAuth',
    name: 'BuyAuth',
    component: lazyLoad('BuyAuth')
  }]
})
