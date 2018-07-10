import axios from 'axios'
import router from '../router'

export const Actions = {
  signUp ({ commit }, payload) {
    axios.post('http://52.78.105.130:3004/auth', payload).then(response => {
      // 회원가입 성공 실패 분기 하긔!
      commit('signUpSuccess')
      console.log(response)
      if (response.status === 201) {
        router.push('/')
        console.log('서버연결?!?!?!')
      }
    })
  }

}
