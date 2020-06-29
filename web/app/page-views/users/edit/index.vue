<script lang="ts">
import Vue from 'vue'
import { required, numeric, minLength, sameAs } from 'vuelidate/lib/validators'
import { User } from '../shared/interfaces'
import { USER_ROLE_OPTIONS } from '../shared/constants'

export default Vue.extend({
  data() {
    return {
      submitted: false,
      password: "",
      passwordConfirmation: "",
      roleOptions: USER_ROLE_OPTIONS
    }
  },
  validations: {
    item: {
      email: {
        required
      },
      firstName: {
        required
      },
      lastName: {
        required
      },
      role: {
        required
      }
    }
  },
  created() {
    this.fetchItem()
  },
  computed: {
    item(): User {
      return Object.assign({}, this.$store.state.users.item)
    }
  },
  methods: {
    fetchItem() {
      this.$store.dispatch('users/getUser', this.$route.params.id)
    },
    updateUser() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) return

      const data = { ...this.item }
      this.$store.dispatch('users/updateUser', data).then(() => {
        this.openList()
      })
    },
    openList() {
      this.$router.push('/users')
    }
  }
})
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="card-title mb-0">
            <i class="far fa-play-circle fa-rotate-180 fa-lg"></i>
            <h2 class="d-inline-block text-warning align-middle mb-0 ml-2">
              EDIT USER
            </h2>
          </div>
        </div>
        <div class="card-body bg-light">
          <b-form @submit.prevent="updateUser">
            <slot />

            <b-form-group
              id="first-name-group"
              label="First Name"
              label-for="first-name"
            >
              <b-form-input
                id="first-name"
                v-model="item.firstName"
                name="first-name"
                type="text"
                placeholder="Enter first name"
                :class="{ 'is-invalid': submitted && $v.item.firstName.$error }"
              ></b-form-input>

              <div
                v-if="submitted && $v.item.firstName.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.item.firstName.required">
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
                v-model="item.lastName"
                name="last-name"
                type="text"
                placeholder="Enter last name"
                :class="{ 'is-invalid': submitted && $v.item.lastName.$error }"
              ></b-form-input>

              <div
                v-if="submitted && $v.item.lastName.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.item.lastName.required">
                  This value is required.
                </span>
              </div>
            </b-form-group>

            <b-form-group
              id="role-group"
              label="Role"
              label-for="role"
            >
              <b-form-select
                v-model="item.role"
                size="md"
                :options="roleOptions"
                :class="{ 'is-invalid': submitted && $v.item.role.$error }"
              ></b-form-select>

              <div
                v-if="submitted && $v.item.role.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.item.role.required">
                  This value is required.
                </span>
              </div>
            </b-form-group>

            <b-form-group id="email-group" label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="item.email"
                name="email"
                type="email"
                placeholder="Enter email"
                :class="{ 'is-invalid': submitted && $v.item.email.$error }"
              ></b-form-input>

              <div v-if="submitted && $v.item.email.$error" class="invalid-feedback">
                <span v-if="!$v.item.email.required">
                  This value is required.
                </span>
                <span v-if="!$v.item.email.email">
                  This value should be a valid email.
                </span>
              </div>
            </b-form-group>

            <div class="mt-4">
              <b-button type="submit" variant="primary" class="btn-block col-md-2">
                Submit
              </b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
