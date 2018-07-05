import Home from '@/pages/Home'
import TodayFeedRoutes from './todayFeed'
import FollowingFeedRoutes from './followingFeed'

export default {
  path: '/',
  name: 'Home',
  component: Home,
  children: [
    TodayFeedRoutes,
    FollowingFeedRoutes
  ]
}
