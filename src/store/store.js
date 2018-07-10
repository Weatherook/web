import Vue from 'vue'
import Vuex from 'vuex'
import { Getters } from './getters'
import { Mutations } from './mutations'
import { Actions } from './actions'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { // 전역적인 데이터
    boards: [],
    user: null
  },
  mutations: Object.assign({}, Mutations),
  getters: Object.assign({}, Getters),
  actions: Object.assign({}, Actions),
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3 }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})
