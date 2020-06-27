<script lang="ts">
import Vue from 'vue'
import { Apartment } from './interfaces'

export default Vue.extend({
  computed: {
    item(): Apartment {
      return this.$store.state.apartments.item
    }
  },
  created() {
    this.getItem()
  },
  methods: {
    getItem() {
      const id = this.$route.params.id
      this.$store.dispatch('apartments/getApartment', id)
    },
    deleteItem() {
      const id = this.$route.params.id

      this.$store.dispatch('apartments/deleteApartment', id).then(() => {
        this.getItem()
      })
    },
    openList() {
      this.$router.push('/apartments')
    }
  }
})
</script>

<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <i class="far fa-play-circle fa-rotate-180 fa-lg mr-2"></i>
            <h2
              class="d-inline-block text-warning pr-4 mb-0 align-middle border-right"
            >
              MY APARTMENTS
            </h2>
            <h2 class="d-inline-block pl-4 mb-0 align-middle">
              VIEW APARTMENT #{{ item.id }}
            </h2>
          </div>
        </div>
      </div>
      <div class="card-body bg-light">
        <div class="row mb-4">
          <div class="col-12">
            <h4>
              <span v-if="!!item.name">-</span>
              {{ item.name }}
            </h4>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-xl-3 text-nowrap">
            <span class="font-weight-bold pr-2">Created:</span>
            {{ item.createdAt }}
          </div>
        </div>

        <hr class="mt-1" />

        <div v-if="hasReplies">
          <div class="row my-4">
            <div class="col-md-3 col-lg-3 col-xl-2">
              <button class="btn btn-info w-100" @click="openList">Back</button>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 mt-2 mt-md-0">
              <button
                class="btn btn-danger w-100"
                @click="deleteItem"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
