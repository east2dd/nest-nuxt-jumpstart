<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    success() {
      return this.$store.state.alerts.status === 'success'
    },
    error() {
      return this.$store.state.alerts.status === 'error'
    },
    message() {
      return this.$store.state.alerts.message
    }
  },
  watch: {
    message (newMessage, oldMessage) {
      setTimeout(()=>{
        this.$store.dispatch('alerts/setAlert', { status: '', message: '' })
      }, 3000)
    }
  }
})
</script>

<template>
  <div class="container">
    <b-alert v-model="success" class="mt-3" variant="success" dismissible>
      {{ message }}
    </b-alert>

    <b-alert v-model="error" class="mt-3" variant="danger" dismissible>
      {{ message }}
    </b-alert>
  </div>
</template>
