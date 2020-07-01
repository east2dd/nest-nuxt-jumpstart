<script lang="ts">
import Vue from 'vue'
import { User } from '../shared/interfaces'
import { USER_ROLE_OPTIONS } from '../shared/constants'
import { UPDATE_ITEM_VALIDATIONS } from './constants'

export default Vue.extend({
  data() {
    return {
      submitted: false,
      password: '',
      passwordConfirmation: '',
      roleOptions: USER_ROLE_OPTIONS
    }
  },
  validations: {
    item: UPDATE_ITEM_VALIDATIONS
  },
  computed: {
    item(): User {
      return Object.assign({}, this.$store.state.users.item)
    }
  },
  created() {
    this.fetchItem()
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
      if (!confirm('Do you want to delete this user?')) return

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
  <b-row>
    <b-col xs="12" md="6">
      <b-form @submit.prevent="updateItem">
        <b-card>
          <b-card-title>
              EDIT APARTMENT
          </b-card-title>
          <b-row>
            <b-col>
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

              <b-form-group id="role-group" label="Role" label-for="role">
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

              <b-form-group 
                id="email-group"
                label="Email"
                label-for="email">
                <b-form-input
                  id="email"
                  v-model="item.email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  :class="{ 'is-invalid': submitted && $v.item.email.$error }"
                ></b-form-input>

                <div
                  v-if="submitted && $v.item.email.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.item.email.required">
                    This value is required.
                  </span>
                  <span v-if="!$v.item.email.email">
                    This value should be a valid email.
                  </span>
                </div>
              </b-form-group>
            </b-col>
          </b-row>

          <b-form-group>
            <b-button 
              variant="danger" 
              @click="deleteItem"
            >
              Delete
            </b-button>
            <b-button
              class="float-right"
              type="submit"
              variant="warning"
            >
              Submit
            </b-button>
            <b-button
              class="float-right mr-2"
              variant="secondary"
              @click="openList"
            >
              Back
            </b-button>
          </b-form-group>
        </b-card>
      </b-form>
    </b-col>
  </b-row>
</template>
