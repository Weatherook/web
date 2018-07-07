import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import MypageRoutes from './mypage'
import TodayFeedRoutes from './todayFeed'
import FollowingFeedRoutes from './followingFeed'
import SettingRoutes from './setting'
import { SignRoutes } from './sign'

Vue.use(Router)

export default new Router({
  routes: [HomeRoutes, MypageRoutes, TodayFeedRoutes, FollowingFeedRoutes, SignRoutes, SettingRoutes],
  mode: 'history'
})
