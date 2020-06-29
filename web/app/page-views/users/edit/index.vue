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
    updateItem() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) return

      const data = { ...this.item }
      this.$store.dispatch('users/updateUser', data).then(() => {
        this.openList()
      })
    },
    deleteItem() {
      if (!confirm("Do you want to delete this user?")) return

      this.$store.dispatch('users/deleteUser', this.item.id).then(() => {
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
            <h2 class="d-inline-block text-warning align-middle mb-0 ml-2">
              EDIT USER
            </h2>
          </div>
        </div>
        <div class="card-body bg-light">
          <b-form @submit.prevent="updateItem">
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

            <div class="row mt-4">
              <div class="col-md-3 col-lg-3 col-xl-2">
                <b-button class="w-100" variant="secondary" @click="openList">
                  Cancel
                </b-button>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
                <b-button type="submit" class="w-100" variant="warning">
                  Submit
                </b-button>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
                <b-button class="w-100" variant="danger" @click="deleteItem">
                  Delete
                </b-button>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>
