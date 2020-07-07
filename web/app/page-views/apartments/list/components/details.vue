<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    item: { type: Object }
  },
})
</script>

<template>
  <b-popover
    triggers="hover" 
    placement="right"
    variant="info"
    :target="'popover-target-' + item.id" 
  >
    <template v-slot:title>{{ item.name }}</template>
    <div class="table-responsive m-0">
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
                v-html="item.description">
              </p>
            </td>
          </tr>
          <tr>
            <td>Price per month :</td>
            <td>
              $ {{ item.pricePerMonth }}
            </td>
          </tr>
          <tr>
            <td>Number of rooms :</td>
            <td>{{ item.numberOfRooms }}</td>
          </tr>
          <tr>
            <td>Price per Month :</td>
            <td>$ {{ item.pricePerMonth }}</td>
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
  .apartment-description{
    white-space: pre;
  }
</style>