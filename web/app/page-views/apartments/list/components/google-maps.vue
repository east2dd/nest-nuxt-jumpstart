<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { GOOGLE_MAP_OPTIONS } from '../constants'
import { Apartment } from '../../shared/interfaces'

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
        content: this.getInfoContent(item)
      }
    },
    getInfoContent(item: Apartment): string {
      return `
          <div class="table-responsive table-sm table-borderless m-0">
            <table class="table mb-0">
              <tbody>
                <tr>
                  <td>
                    <strong>Name :</strong>
                  </td>
                  <td>
                    <strong>
                      ${item.name}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>State :</td>
                  <td>
                    <span class="text-success">
                      Available
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Description :</td>
                  <td>
                    <p class="m-0" style="white-space: pre !important;">${item.description}</p>
                  </td>
                </tr>
                <tr>
                  <td>Price per month :</td>
                  <td>
                    $ ${ item.pricePerMonth }
                  </td>
                </tr>
                <tr>
                  <td>Number of rooms :</td>
                  <td>${item.numberOfRooms}</td>
                </tr>
                <tr>
                  <td>Price per Month :</td>
                  <td>$ ${item.pricePerMonth}</td>
                </tr>
                <tr>
                  <td>Position :</td>
                  <td>
                    ${item.latitude}, ${item.longitude}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
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

<style lang="css" scoped>
  #map-canvas{
    width: 100%;
    height: calc(100vh - 300px);
  }
</style>