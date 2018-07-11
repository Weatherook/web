import axios from 'axios'
import router from '../router'

export const Actions = {
  signUp ({ commit }, payload) {
    axios.post('https://weatherook.cf/auth', payload).then(response => {
      // 회원가입 성공 실패 분기 하긔!
      commit('signUpSuccess')
      console.log(response)
      if (response.status === 201) {
        router.push('/')
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
  getUserInfo ({ commit }, token) {
    commit('userInfo')
    axios.get('https://weatherook.cf/user/show', {
      headers: {
        'token': token
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
  modifyMypage ({ commit }, payload, token) {
    commit('modiMypageInfo')
    axios.put('https://weatherook.cf/user/setting', {
      headers: {
        'token': token
      }
    }).then(response => {
      commit('modifyMypageSuccess', response.data)
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
  }
}
