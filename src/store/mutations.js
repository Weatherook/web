export const Mutations = {
  signUpSuccess (state, payload) {
    console.log('SignUpFinish')
  },

  // 1. actions : 비동기 처리
  // 2. mutations : 데이터를 변경 함
  // 변경 뒤엔 state(전역 데이터)가 바뀌어 있겠지?

  // getters : 그냥 데이터 가져오는 용도
  signInSuccess (state, payload) {
    state.token = payload.token
    console.log('sign In Finish')
  },
  getFollowingsSuccess (state, payload) {
    state.user_followings = payload.data
  },
  getTodayRecSuccess (state, payload) {
    state.today_rec = payload.data
  },
  getTodayPopularSuccess (state, payload) {
    state.today_feed = payload.data
  },
  userInfo (state) {
    console.log('get user Info Start')
  },
  userInfoSuccess (state, payload) {
    console.log('get user Info success')
    state.mypage = payload
  },
  navInfo (state) {
    console.log('get nav Info Start')
  },
  navInfoSuccess (state, payload) {
    console.log('get nav Info Success')
    state.nav = payload.data
  },
  modiMypageInfo (state) {
    console.log('modify mypage Start')
  },
  modifyMypageSuccess (state, payload) {
    console.log('modify Mypage Success')
    state.mypageModi = payload.data
  },
  getModiInfo (state) {
    console.log('마이페이지 수정 정보 가져오기 시작')
  },
  modiInfoSuccess (state, payload) {
    console.log('마이페이지 수정 정보 가져오기 성공')
    state.mypageModi = payload.data
  },
  getFeedCommentInfo (state) {
    console.log('get feed comment info start')
  },
  getFeedCommentSuccess (state, payload) {
    console.log('get feed comment Success')
    state.feedComment = payload.data
  }
}
