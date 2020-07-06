<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Apartment } from '../../shared/interfaces'
import { FIELDS } from '../constants'
import { canEdit } from '../policy'

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
      class="table table-centered mb-0 table-nowrap"
      thead-class="thead-light"
      :items="items"
      :fields="fields"
      responsive="sm"
      :per-page="100"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
    >
      <template v-slot:cell(name)="row">
        <h6
          id="popover-target-1"
          class="font-size-14 text-truncate m-0 cursor-pointer"
          role="button"
        >
          {{ row.item.name }}
        </h6>
        <b-popover target="popover-target-1" triggers="hover" placement="right">
          <template v-slot:title>Popover Title</template>
          I am popover <b>component</b> content!
        </b-popover>
      </template>
      <template v-slot:cell(pricePerMonth)="row">
        $ {{ row.item.pricePerMonth }}
      </template>

      <template v-slot:cell(actions)="row">
        <a
          href="javascript:void(0);"
          class="action-icon text-primary"
          title="Edit Details"
          v-b-tooltip.hover.top
          @click="openEditPage(row.item.id)"
        >
          <i class="mdi mdi-home-edit-outline" style="font-size:22px"></i>
        </a>
        <a
          href="javascript:void(0);"
          class="action-icon text-info ml-1"
          title="View On Map"
          v-b-tooltip.hover.top
        >
          <i class="mdi mdi-target" style="font-size:22px"></i>
        </a>
      </template>

      <template v-slot:cell(user)="row">
        {{ row.item.user.firstName }} {{ row.item.user.lastName }}
      </template>
    </b-table>
  </div>
</template>
