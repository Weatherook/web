import Vue from 'vue'
import Router from 'vue-router'
import MypageRoutes from './mypage'

Vue.use(Router)

export default new Router({
  routes: [MypageRoutes],
  mode: 'history'
})
