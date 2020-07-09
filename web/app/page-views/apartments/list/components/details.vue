<script lang="ts">
import Vue from 'vue'
import { nlToBr } from '../helper'

export default Vue.extend({
  props: {
    item: { type: Object }
  },
  methods: {
    nlToBr(string: string): string {
      return nlToBr(string)
    }
  }
})
</script>

<template>
  <b-popover
    triggers="hover" 
    placement="righttop"
    variant="info"
    :target="'popover-target-' + item.id" 
  >
    <template v-slot:title>{{ item.name }}</template>
    <div class="table-responsive m-0 apartment-popover-details-wrapper">
      <table class="table mb-0">
        <tbody>
          <tr>
            <td>State :</td>
            <td>
              <span :class="`${item.state == 0 ? 'text-success' : 'text-danger'}`">
                {{ item.state == 0 ? 'Available' : 'Rented' }}
              </span>
            </td>
          </tr>
          <tr>
            <td>Description :</td>
            <td>
              <p 
                class="m-0 apartment-description"
                v-html="nlToBr(item.description)">
              </p>
            </td>
          </tr>
          <tr>
            <td>Price per month :</td>
            <td>
              <strong>$ {{ item.pricePerMonth }}</strong>
            </td>
          </tr>
          <tr>
            <td>Number of rooms :</td>
            <td>
              <strong>{{ item.numberOfRooms }}</strong>
            </td>
          </tr>
          <tr>
            <td>Floor area size :</td>
            <td>
              <strong>
                {{ item.floorAreaSize }} m<sup>2</sup>
              </strong>
            </td>
          </tr>
          <tr>
            <td>Position :</td>
            <td>
              <a 
                :href="`https://maps.google.com/?q=${item.latitude},${item.longitude}`"
                target="_blank"
              >
              {{ item.latitude }}, {{ item.longitude }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </b-popover>
</template>
<style lang="css" scoped>
  .popover {
		min-width: 350px !important;
	}
  .apartment-popover-details-wrapper table {
    max-width: 100% !important;
  }
  .apartment-popover-details-wrapper table tr td:first-child{
    width: 120px !important;
  }
  .apartment-popover-details-wrapper .apartment-description{
    word-break: break-word;
  }
</style>