export const Mutations = {
  signInSuccess (state, payload) {
    state.user = payload.token
    console.log('sign In Finish')
  }
}
