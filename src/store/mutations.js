export const Mutations = {
  signUpSuccess (state, payload) {
    console.log('SignUpFinish')
  }
}
// 1. actions : 비동기 처리
// 2. mutations : 데이터를 변경 함
// 변경 뒤엔 state(전역 데이터)가 바뀌어 있겠지?

// getters : 그냥 데이터 가져오는 용도
