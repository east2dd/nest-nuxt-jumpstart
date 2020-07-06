<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { GOOGLE_MAP_OPTIONS } from '../constants'

export default Vue.extend({
  props: {
    items: { type: Array }
  },
  data() {
    return {
      googleMapOptions: GOOGLE_MAP_OPTIONS
    }
  },
  computed: {
  },
  methods: {
  }
})
</script>

<template>
  <GmapMap
    id="map-canvas"
    :options="googleMapOptions"
    :center="{lat:10, lng:10}"
    :zoom="7"
  />
</template>

<style lang="css" scoped>
  #map-canvas{
    width: 100%;
    height: calc(100vh - 300px);
  }
</style>