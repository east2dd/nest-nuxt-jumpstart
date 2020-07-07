<script lang="ts">
import querystring from 'querystring'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      pricePerMonth: [0, 5000],
      floorAreaSize: [0, 1000],
      numberOfRooms: [0, 20]
    }
  },
  methods: {
    applyFilters() {
      const query = {
        ...this.$route.query,
        pricePerMonth: this.pricePerMonth.join(','),
        floorAreaSize: this.floorAreaSize.join(','),
        numberOfRooms: this.numberOfRooms.join(',')
      }

      this.$router.push(`/apartments?${querystring.stringify(query)}`)
    },
    resetFilters() {
      this.pricePerMonth = [0, 5000]
      this.floorAreaSize = [0, 1000]
      this.numberOfRooms = [0, 20]

      this.$router.push(`/apartments`)
    }
  }
})
</script>

<template>
  <b-row>
    <b-col class="">
      <div class="mb-3">
        <div>Price Per Month</div>
        <vue-slider
          class="pl-2 pr-2"
          v-model="pricePerMonth"
          :enable-cross="false"
          :min="0"
          :max="5000"
        ></vue-slider>
        <div>{{ pricePerMonth[0] }} ~ {{ pricePerMonth[1] }} ($)</div>
      </div>
      <div class="mb-3">
        <div>Floor Area Size</div>
        <vue-slider
          class="pl-2 pr-2"
          v-model="floorAreaSize"
          :enable-cross="false"
          :min="0"
          :max="1000"
        ></vue-slider>
        <div>{{ floorAreaSize[0] }} ~ {{ floorAreaSize[1] }} (m x m)</div>
      </div>
      <div class="mb-3">
        <div>Number Or Rooms</div>
        <vue-slider
          class="pl-2 pr-2"
          v-model="numberOfRooms"
          :enable-cross="false"
          :min="0"
          :max="20"
        ></vue-slider>
        <div>{{ numberOfRooms[0] }} ~ {{ numberOfRooms[1] }}</div>
      </div>
      <div class="mb-3">
        <b-button
          size="sm"
          class="btn-info text-nowrap mr-1"
          @click="applyFilters()"
        >
          Apply
        </b-button>
        <b-button
          size="sm"
          class="btn-danger text-nowrap mr-1"
          @click="resetFilters()"
        >
          Reset
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>
