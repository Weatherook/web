import TodayFeed from '@/pages/TodayFeed'
import TodayGrid from '@/pages/TodayGrid'
import TodayList from '@/pages/TodayList'

export default {
  path: '/feed/today',
  name: 'TodayFeed',
  component: TodayFeed,
  children: [
    { path: 'grid', component: TodayGrid },
    { path: 'list', component: TodayList }
  ]
}
