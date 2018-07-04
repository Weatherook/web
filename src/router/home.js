import Home from '@/pages/Home'
import TodayFeed from '@/pages/TodayFeed'
import FollowingFeed from '@/pages/FollowingFeed'

export default {
  path: '/',
  name: 'Home',
  component: Home,
  children: [
    { path: '/feed/today', component: TodayFeed },
    { path: '/feed/following', component: FollowingFeed }
  ]
}
