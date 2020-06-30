
<script lang="ts">
import Vue from 'vue'
import { FIELDS } from './constants'

export default Vue.extend({
  props: {
    items: { type: Array }
  },
  data() {
    return {
      fields: FIELDS,
      sortBy: 'name',
      sortDesc: true
    }
  },
  methods: {
    openEditPage(id: string) {
      this.$router.push(`/apartments/${id}/edit`)
    },
  }
})
</script>

<template>
  <div class="table-responsive mb-0">
    <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
      :per-page="100"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
    >
      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          class="btn-info text-nowrap mr-1"
          @click="openEditPage(row.item.id)"
        >
          Edit
        </b-button>
      </template>

      <template v-slot:cell(user)="row">
        {{ row.item.user.firstName }} {{ row.item.user.lastName }}
      </template>
    </b-table>
  </div>
</template>
