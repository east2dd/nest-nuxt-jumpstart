<script lang="ts">
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import { Apartment } from './interfaces'

export default Vue.extend({
  data() {
    return {
      item: {} as Apartment,
      submitted: false
    }
  },
  validations: {
    item: {
      name: {
        required
      }
    }
  },
  methods: {
    updateItem() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) return

      const formData = new FormData(
        this.$refs['create-ticket'] as HTMLFormElement | undefined
      )

      this.$store.dispatch('users/updateUser', formData).then(() => {
        this.$router.push(`/users`)
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
          <b-form ref="create-ticket" @submit.prevent="createTicket">
            <div class="row mt-2">
              <div class="col-md-6">
                <b-form-input
                  id="name"
                  v-model="item.name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  :class="{
                    'is-invalid': submitted && $v.item.name.$error
                  }"
                ></b-form-input>

                <div
                  v-if="submitted && $v.item.name.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.item.name.required">
                    Required
                  </span>
                </div>
              </div>
            </div>

            <hr class="my-4" />

            <div class="row justify-content-end">
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
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
