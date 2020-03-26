<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="registerData.userName"
              append-icon="mdi-account"
              :rules="rules.nameRules"
              label="Name"
              type="text"
              required
            />
            <v-text-field
              v-model="registerData.email"
              append-icon="mdi-email"
              :rules="rules.emailRules"
              label="Email"
              type="text"
              required
            />
            <v-text-field
              id="password"
              v-model="registerData.password"
              append-icon="mdi-lock-question"
              name="password"
              label="Password"
              type="password"
              required
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="register">
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { RegisterMixin } from '../mixins/RegisterMixin'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  mixins: [RegisterMixin],
  data: () => ({
    valid: false,
    rules: {
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    },
    registerData: {
      userName: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    register() {
      this.valid = this.$refs.form.validate()
      if (this.valid) {
        this.setRegisterData({
          data: this.registerData
        })
        this.$nuxt.$router.push('/inspire')
      }
    }
  }
}
</script>
