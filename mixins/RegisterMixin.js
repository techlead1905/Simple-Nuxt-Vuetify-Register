import { mapState, mapActions } from 'vuex'

export const RegisterMixin = {
  computed: {
    ...mapState('register', {
      userName: (state) => state.registerData.userName
    })
  },
  methods: {
    ...mapActions('register', ['setRegisterData'])
  }
}
