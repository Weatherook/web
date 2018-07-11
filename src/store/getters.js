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
