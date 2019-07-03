export default {
  async httpGet(){
    return true;
  },

  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
