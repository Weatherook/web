import FollowingFeed from '@/pages/FollowingFeed'
import FollowingGrid from '@/pages/FollowingGrid'
import FollowingList from '@/pages/FollowingList'

export default {
  path: '/feed/following',
  name: 'FollowingFeed',
  component: FollowingFeed,
  children: [
    { path: 'grid', component: FollowingGrid },
    { path: 'list', component: FollowingList }
  ]
}
