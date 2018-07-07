import Mypage from '@/pages/Mypage'
import MypageGrid from '@/pages/MypageGrid'
import MypageList from '@/pages/MypageList'

export default {
  path: '/mypage',
  name: 'Mypage',
  component: Mypage,
  children: [
    {
      path: 'grid',
      name: 'MypageGrid',
      component: MypageGrid
    },
    {
      path: 'list',
      name: 'MypageList',
      component: MypageList
    }
  ]
}
