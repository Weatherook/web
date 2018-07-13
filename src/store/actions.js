import axios from 'axios'
import router from '../router'

export const Actions = {
  signUp ({ commit }, payload) {
    axios.post('https://weatherook.cf/auth', payload).then(response => {
      // 회원가입 성공 실패 분기 하긔!
      commit('signUpSuccess')
      console.log(response)
      if (response.status === 201) {
        router.push('/feed/today/grid')
        console.log('서버연결?!?!?!')
      }
    })
  },
  signIn ({ commit }, payload) {
    axios.post('https://weatherook.cf/auth/signin', payload).then(response => {
      commit('signInSuccess', response.data)
      if (response.status === 201) {
        router.push('/feed/today/grid')
      }
    })
  },
  getUserInfo ({ commit }, payload) {
    commit('userInfo')
    axios.post('https://weatherook.cf/user/show', {other_id: payload.other_id}, {
      headers: {
        'token': payload.token
      }
    }).then(response => {
      commit('userInfoSuccess', response.data)
    })
  },
  getNavInfo ({ commit }, token) {
    commit('navInfo')
    axios.get('https://weatherook.cf/weather/web', {
      headers: {
        'token': token
      }
    }).then(response => {
      commit('navInfoSuccess', response.data)
    })
  },
  modifyMypage ({ commit }, payload) {
    commit('modiMypageInfo')
    axios.put('https://weatherook.cf/user/setting', payload.data, {
      headers: {
        'token': payload.token
      }
    }).then(response => {
      commit('modifyMypageSuccess', response.data)
      if (response.status === 201) {
        router.push('/mypage/grid')
      }
    })
  },
  modiInfo ({ commit }, token) {
    commit('getModiInfo')
    axios.get('https://weatherook.cf/user/setting', {
      headers: {
        'token': token
      }
    }).then(response => {
      commit('modiInfoSuccess', response.data)
    })
  },

  getFollwings ({ commit }, payload) {
    axios.get('http://52.78.105.130:3004/user/following', {
      headers: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkeCI6MSwiaWF0IjoxNTMxMDcxODY3LCJleHAiOjE1MzM2NjM4Njd9.-U9BxWAfoqO07psBi03FoMhXMVDWtfEY-OXwXAkvWJA'
      }
    }).then(response => {
      commit('getFollowingsSuccess', response.data)
    })
  },

  getTodayRec ({ commit }, payload) {
    axios.post('http://52.78.105.130:3004/board/commend', payload).then(response => {
      commit('getTodayRecSuccess', response.data)
    })
  },

  getTodayPopular ({ commit }, token) {
    axios.get('https://weatherook.cf/board/today/popular', {
      headers: {
        'token': token
      }
    }).then(response => {
      commit('getTodayPopularSuccess', response.data)
    })
  },
  getTodayNew ({ commit }, token) {
    axios.get('https://weatherook.cf/board/today/latest', {
      headers: {
        'token': token
      }
    }).then(response => {
      commit('getTodayNewSuccess', response.data)
    })
  },

  getFollowingFeed ({ commit }, token) {
    axios.get('https://weatherook.cf/board/follow', {
      headers: {
        'token': token
      }
    }).then(response => {
      commit('getFollowingFeedSuccess', response.data)
    })
  },
  getAllFilter ({ commit }, payload) {
    axios.post('https://weatherook.cf/board/filter', payload.object, {
      headers: {
        'token': payload.token
      }
    }).then(response => {
      commit('getAllFilterSuccess', response.data)
    })
  },

  getTodayFilter ({ commit }, payload) {
    axios.post('https://weatherook.cf/board/today/filter', payload.object, {
      headers: {
        'token': payload.token
      }
    }).then(response => {
      commit('getTodayFilterSuccess', response.data)
    })
  },
  getFeedComment ({ commit }, payload) {
    commit('getFeedCommentInfo')
    axios.get('https://weatherook.cf/board/comment/' + payload.board_idx, {
      headers: {
        token: payload.token
      }
    }).then(response => {
      commit('getFeedCommentSuccess', response.data)
    })
  },
  registerComment ({ commit }, payload) {
    commit('registerCommentStart')
    axios.post('https://weatherook.cf/board/comment', payload.payload, {
      headers: {
        'token': payload.token
      }
    }).then(response => {
      commit('registerCommentSuccess', response.data)
    })
  },
  changeLike ({ commit }, payload) {
    axios.post('https://weatherook.cf/board/like', {board_idx: payload.board_idx}, {
      headers: {
        'token': payload.token
      }
    }).then(response => {
      commit('likeSuccess', response.data)
    })
  },
  getAlarmInfo ({ commit }, token) {
    axios.get('https://weatherook.cf/user/news', {
      headers: {
        'token': token
      }
    }).then(response => {
      commit('getAlarmSuccess', response.data)
    })
  }
}
