<script lang="ts">
import Vue from 'vue'
import { required, numeric } from 'vuelidate/lib/validators'
import { Apartment } from '../shared/interfaces'

export default Vue.extend({
  data() {
    return {
      submitted: false
    }
  },
  validations: {
    item: {
      name: {
        required
      },
      floorAreaSize: {
        required,
        numeric
      },
      numberOfRooms: {
        required,
        numeric
      },
      pricePerMonth: {
        required,
        numeric
      },
      latitude: {
        required,
        numeric
      },
      longitude: {
        required,
        numeric
      },
    }
  },
  created() {
    this.fetchItem()
  },
  computed: {
    item(): Apartment {
      return this.$store.state.apartments.item
    }
  },
  methods: {
    fetchItem() {
      this.$store.dispatch('apartments/getApartment', this.$route.params.id).then(() => {
        this.openList()
      })
    },
    updateApartment() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) return

      this.$store.dispatch('apartments/updateApartment', this.item).then(() => {
        this.openList()
      })
    },
    deleteItem(id: number) {
      this.$store.dispatch('apartments/deleteApartment', id).then(() => {
        this.openList()
      })
    },
    openList() {
      this.$router.push('/apartments')
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
              EDIT APARTMENT
            </h2>
          </div>
        </div>
        <div class="card-body bg-light">
          <b-form ref="create-apartment" @submit.prevent="updateApartment">
            <div class="row mt-2">
              <div class="col-md-6">
                <b-form-input
                  id="name"
                  v-model="item.name"
                  name="name"
                  type="text"
                  placeholder="Name"
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

            <div class="row mt-2">
              <div class="col-md-6">
                <b-form-textarea
                  id="description"
                  v-model="item.description"
                  name="description"
                  placeholder="Description"
                ></b-form-textarea>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-6">
                <b-form-input
                  id="floorAreaSize"
                  v-model.number="item.floorAreaSize"
                  name="floorAreaSize"
                  type="text"
                  placeholder="Floor area size"
                  :class="{
                    'is-invalid': submitted && $v.item.floorAreaSize.$error
                  }"
                ></b-form-input>

                <div
                  v-if="submitted && $v.item.floorAreaSize.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.item.floorAreaSize.required">
                    Required
                  </span>
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-6">
                <b-form-input
                  id="numberOfRooms"
                  v-model.number="item.numberOfRooms"
                  name="numberOfRooms"
                  type="number"
                  placeholder="Number of rooms"
                  :class="{
                    'is-invalid': submitted && $v.item.numberOfRooms.$error
                  }"
                ></b-form-input>

                <div
                  v-if="submitted && $v.item.numberOfRooms.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.item.numberOfRooms.required">
                    Required
                  </span>
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-6">
                <b-form-input
                  id="pricePerMonth"
                  v-model.number="item.pricePerMonth"
                  name="pricePerMonth"
                  type="text"
                  placeholder="Price per month"
                  :class="{
                    'is-invalid': submitted && $v.item.pricePerMonth.$error
                  }"
                ></b-form-input>

                <div
                  v-if="submitted && $v.item.pricePerMonth.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.item.pricePerMonth.required">
                    Required
                  </span>
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-3">
                <b-form-input
                  id="latitude"
                  v-model.number="item.latitude"
                  name="latitude"
                  type="text"
                  placeholder="Latitude"
                  :class="{
                    'is-invalid': submitted && $v.item.latitude.$error
                  }"
                ></b-form-input>

                <div
                  v-if="submitted && $v.item.latitude.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.item.latitude.required">
                    Required
                  </span>
                </div>
              </div>
              <div class="col-md-3">
                <b-form-input
                  id="longitude"
                  v-model.number="item.longitude"
                  name="longitude"
                  type="text"
                  placeholder="Longitude"
                  :class="{
                    'is-invalid': submitted && $v.item.longitude.$error
                  }"
                ></b-form-input>

                <div
                  v-if="submitted && $v.item.longitude.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.item.longitude.required">
                    Required
                  </span>
                </div>
              </div>
            </div>

            <hr class="my-4" />

            <div class="row">
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
