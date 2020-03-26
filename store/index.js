import Vuex from 'vuex'

import RegisterStore from './register'

export const store = () =>
  new Vuex.Store({
    modules: {
      register: RegisterStore
    }
  })
