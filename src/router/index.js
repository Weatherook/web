import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import MypageRoutes from './mypage'
import TodayFeedRoutes from './todayFeed'
import FollowingFeedRoutes from './followingFeed'
import SettingRoutes from './setting'
import { SignRoutes } from './sign'
import FollowingDetailRoutes from './followingDetail'
import Sign from '@/pages/Sign'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'SignRoutes',
    component: Sign
  }, HomeRoutes, MypageRoutes, TodayFeedRoutes, FollowingFeedRoutes, SignRoutes, SettingRoutes, FollowingDetailRoutes],
  mode: 'history'
})
