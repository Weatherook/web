import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'

Vue.use(Router)

export default new Router({
  routes: [HomeRoutes],
  mode: 'history'
})
