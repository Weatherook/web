import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import MypageRoutes from './mypage'
import TodayFeedRoutes from './todayFeed'
import FollowingFeedRoutes from './followingFeed'

Vue.use(Router)

export default new Router({
  routes: [HomeRoutes, MypageRoutes, TodayFeedRoutes, FollowingFeedRoutes],
  mode: 'history'
})
