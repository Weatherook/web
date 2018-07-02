import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import MypageRoutes from './mypage'


Vue.use(Router)

export default new Router({
  routes: [HomeRoutes],
  mode: 'history'
})
