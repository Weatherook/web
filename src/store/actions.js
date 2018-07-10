import axios from 'axios'
import router from '../router'

export const Actions = {
  signIn ({ commit }, payload) {
    axios.post('http://52.78.105.130:3004/auth/signin', payload).then(response => {
      commit('signInSuccess', response.data)
      if (response.status === 201) {
        router.push('/')
      }
    })
  }
}
