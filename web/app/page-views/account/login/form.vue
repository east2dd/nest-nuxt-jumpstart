<script lang="ts">
import Vue from 'vue'
import { required, email } from 'vuelidate/lib/validators'
import { User } from './interfaces'

export default Vue.extend({
  data() {
    return {
      user: {} as User,
      submitted: false
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    logIn() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) return

      this.$auth.loginWith('local', { data: this.user }).catch(() => {
        this.$notify({
          group: 'main',
          type: 'warn',
          text: 'Email and password does not match'
        })
      })
    }
  }
})
</script>

<template>
  <div>
    <b-form @submit.prevent="logIn">
      <slot />
      <b-form-group id="email-group" label="Email" label-for="email">
        <b-form-input
          id="email"
          v-model="user.email"
          name="email"
          type="email"
          :class="{ 'is-invalid': submitted && $v.user.email.$error }"
          placeholder="Enter email"
        ></b-form-input>
        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
          <span v-if="!$v.user.email.required">This value is required.</span>
          <span v-if="!$v.user.email.email"
            >This value should be a valid email.</span
          >
        </div>
      </b-form-group>

      <b-form-group id="password-group" label="Password" label-for="password">
        <b-form-input
          id="password"
          v-model="user.password"
          name="password"
          type="password"
          :class="{ 'is-invalid': submitted && $v.user.password.$error }"
          placeholder="Enter password"
        ></b-form-input>
        <div
          v-if="submitted && $v.user.password.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.user.password.required">This value is required.</span>
        </div>
      </b-form-group>
      <div class="mt-3">
        <b-button type="submit" variant="primary" class="btn-block"
          >Log In</b-button
        >
      </div>
    </b-form>
  </div>
</template>
