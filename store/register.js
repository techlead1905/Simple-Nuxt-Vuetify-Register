export const state = () => {
  return {
    registerData: {
      userName: '',
      email: '',
      password: ''
    }
  }
}

export const mutations = {
  setRegisterData(state, data) {
    state.registerData = data
  }
}

export const actions = {
  setRegisterData({ commit }, { data }) {
    commit('setRegisterData', data)
  }
}

const store = {
  state,
  mutations,
  actions
}

export default store
