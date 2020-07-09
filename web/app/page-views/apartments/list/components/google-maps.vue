<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { GOOGLE_MAP_OPTIONS } from '../constants'
import { Apartment } from '../../shared/interfaces'
import { getInfoWindowContent, nlToBr } from '../helper'

export default Vue.extend({
  props: {
    items: { type: Array as () => Apartment[] },
    selectApartmentAction: { type: Function }
  },
  data() {
    return {
      googleMapOptions: GOOGLE_MAP_OPTIONS,
      mapCenter: {lat: 10, lng: 10}
    }
  },
  watch : {
    'items.length' : 'mapFitBounds',
  },
  computed: {
    selectedItemId(): number {
      return this.$store.state.apartments.selectedItemId || 0
    }
  },
  methods: {
    selectApartment(itemId: number): void {
      this.selectApartmentAction(itemId)
    },
    mapFitBounds(): void{
      if (this.items.length == 0) return;
      
      this.$refs.map.$mapPromise.then((map: any) => {
        this.fit(map)
      })
    },
    fit(map: any): void {
      const bounds = new google.maps.LatLngBounds()
      this.items.forEach((item) => {
        const itemCoords = new google.maps.LatLng(item.latitude, item.longitude)
        bounds.extend(itemCoords)
      })
      map.fitBounds(bounds)
    },
    getPosition(item: Apartment): any {
      return { lat: item.latitude, lng: item.longitude }
    },
    getInfoOptions(item: Apartment): object {
      return {
        pixelOffset: {
          width: 0,
          height: -35
        },
        content: getInfoWindowContent(item)
      }
    },
    moveCenter(position: any): void {
      this.$refs.map.$mapPromise.then((map: any) => {
        map.setCenter(position)
      })
    }
  },
  mounted() {
    this.selectApartment(0)
    this.mapFitBounds()
  }
})
</script>

<template>
  <gmap-map
    id="map-canvas"
    ref="map"
    :zoom="7"
    :options="googleMapOptions"
    :center="mapCenter"
  >
    <gmap-marker
      v-for="(item, index) in items"
      :key="`item-marker-${index}`"
      :position="getPosition(item)"
      :clickable="true"
      @click="selectApartment(item.id)"
    />
    <gmap-info-window
      v-for="(item, index) in items"
      :key="`item-info-window-${index}`"
      :position="getPosition(item)"
      :opened="selectedItemId == item.id"
      :options="getInfoOptions(item)"
      @closeclick="selectApartment(0)"
    />
  </gmap-map>
</template>

<style lang="css">
  #map-canvas{
    width: 100%;
    height: 100%;
  }
  #map-canvas .info-window-wrapper{
    max-width: 400px;
  }
  #map-canvas .info-window-wrapper table tr td:first-child{
    width: 120px;
  }
</style>