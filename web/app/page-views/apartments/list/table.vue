<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Apartment } from '../shared/interfaces'
import { FIELDS } from './constants'
import { canEdit } from './policy'

export default Vue.extend({
  props: {
    items: { type: Array }
  },
  data() {
    return {
      fields: FIELDS,
      sortBy: 'name',
      sortDesc: false
    }
  },
  computed: {
    ...mapState(['auth'])
  },
  methods: {
    openEditPage(id: string) {
      this.$router.push(`/apartments/${id}/edit`)
    },
    showEdit(apartment: Apartment): boolean {
      return canEdit(this.auth.user, apartment)
    }
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
          v-if="showEdit(row.item)"
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
