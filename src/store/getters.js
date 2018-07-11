export const Getters = {
  allFollowings (state, getters) {
    return state.user_followings
  },
  todayRecommends (state, getters) {
    return state.today_rec
  },
  todayFeeds (state, getters) {
    return state.today_feed
  }
}
export const mypageGetters = {
  userInfo (state, getters) {
    return state.mypage
  }
}

export const tokenGetters = {
  tokenInfo (state, getters) {
    return state.token
  }
}

export const navGetters = {
  navInfo (state, getters) {
    return state.nav
  }
}

export const mypageInfoGetters = {
  modifyInfo (state, getters) {
    return state.mypageModi
  }
}
