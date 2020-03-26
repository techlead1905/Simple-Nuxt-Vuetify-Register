<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">Welcome {{ userName }}</blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import { RegisterMixin } from '../mixins/RegisterMixin'

export default {
  mixins: [RegisterMixin]
}
</script>
