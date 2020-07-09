<script lang="ts">
import Vue from 'vue'
import { email, required, minLength, sameAs } from 'vuelidate/lib/validators'
import { User } from './interfaces'

export default Vue.extend({
  data() {
    return {
      user: {} as User,
      password: '',
      passwordConfirmation: '',
      error: false,
      errorMessage: '',
      submitted: false
    }
  },
  validations: {
    user: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      }
    },
    password: {
      required,
      minLength: minLength(6)
    },
    passwordConfirmation: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    async register() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) return

      const { firstName, lastName, email } = this.user

      try {
        await this.$api.auth.register({
          firstName,
          lastName,
          email,
          password: this.password
        })
        this.$router.push('/')
        this.$notify({
          group: 'success',
          title: 'Success!',
          text: 'Account created successfully'
        })
      } catch (error) {
        this.$notify({
          group: 'error',
          title: 'Error!',
          text: error.response
            ? error.response.data.error
            : 'Sorry an error occured, check your internet'
        })
      }
    }
  }
})
</script>

<template>
  <div class="p-2">
    <b-alert v-model="error" class="mt-3" variant="danger" dismissible>
      {{ errorMessage }}
    </b-alert>

    <b-form @submit.prevent="register">
      <slot />
      <b-form-group
        id="first-name-group"
        label="First Name"
        label-for="first-name"
      >
        <b-form-input
          id="first-name"
          v-model="user.firstName"
          name="first-name"
          type="text"
          placeholder="Enter first name"
          :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
        ></b-form-input>

        <div
          v-if="submitted && $v.user.firstName.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.user.firstName.required">
            This value is required.
          </span>
        </div>
      </b-form-group>

      <b-form-group
        id="last-name-group"
        label="Last Name"
        label-for="last-name"
      >
        <b-form-input
          id="last-name"
          v-model="user.lastName"
          name="last-name"
          type="text"
          placeholder="Enter last name"
          :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
        ></b-form-input>

        <div
          v-if="submitted && $v.user.lastName.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.user.lastName.required">
            This value is required.
          </span>
        </div>
      </b-form-group>

      <b-form-group id="email-group" label="Email" label-for="email">
        <b-form-input
          id="email"
          v-model="user.email"
          name="email"
          type="email"
          placeholder="Enter email"
          :class="{ 'is-invalid': submitted && $v.user.email.$error }"
        ></b-form-input>

        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
          <span v-if="!$v.user.email.required">
            This value is required.
          </span>
          <span v-if="!$v.user.email.email">
            This value should be a valid email.
          </span>
        </div>
      </b-form-group>

      <b-form-group id="password-group" label="Password" label-for="password">
        <b-form-input
          id="password"
          v-model="password"
          name="password"
          type="password"
          placeholder="Enter password"
          :class="{ 'is-invalid': submitted && $v.password.$error }"
        ></b-form-input>

        <div v-if="submitted && $v.password.$error" class="invalid-feedback">
          <span v-if="!$v.password.required">
            This value is required.
          </span>
          <span v-if="!$v.password.minLength">
            This value must have at least
            {{ $v.password.$params.minLength.min }} letters.
          </span>
        </div>
      </b-form-group>

      <b-form-group label="Confirm Password" label-for="password-confirm">
        <b-form-input
          id="password-confirm"
          v-model="passwordConfirmation"
          name="password_confirmation"
          type="password"
          placeholder="Confirm password"
          :class="{ 'is-invalid': submitted && $v.passwordConfirmation.$error }"
        ></b-form-input>

        <div
          v-if="submitted && $v.passwordConfirmation.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.passwordConfirmation.required">
            This value is required.
          </span>
          <span v-else-if="!$v.passwordConfirmation.sameAsPassword">
            This value should be same as password.
          </span>
        </div>
      </b-form-group>

      <div class="mt-4">
        <b-button type="submit" variant="primary" class="btn-block">
          Register
        </b-button>
      </div>
    </b-form>
  </div>
</template>
