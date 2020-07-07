<script lang="ts">
import querystring from 'querystring'
import Vue from 'vue'
import { PaginationMeta } from '../../../../common/pagination'

export default Vue.extend({
  computed: {
    paginationMeta(): PaginationMeta {
      return Object.assign({}, this.$store.state.apartments.items.meta)
    },
  },
  methods: {
    openPage(page: number) {
      const query = {
        ...this.$route.query,
        page
      }

      this.$router.push(`/apartments?${querystring.stringify(query)}`)
    },
  }
})
</script>

<template>
  <div class="dataTables_paginate paging_simple_numbers float-right">
    <ul class="pagination pagination-rounded mb-0">
      <b-pagination
        v-model="paginationMeta.currentPage"
        :total-rows="paginationMeta.totalItems"
        :per-page="paginationMeta.itemsPerPage"
        @change="openPage"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
