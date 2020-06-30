<script lang="ts">
import Vue from 'vue'
import querystring from 'querystring'

import { Apartment } from '../shared/interfaces'
import { PaginationMeta } from '../../../common/pagination'
import ApartmentFilter from './filter.vue'
import ApartmentTable from './table.vue'

export default Vue.extend({
  components: { ApartmentFilter, ApartmentTable },
  computed: {
    items(): Apartment[] {
      return this.$store.state.apartments.items.items || []
    },
    paginationMeta(): PaginationMeta {
      return Object.assign({}, this.$store.state.apartments.items.meta)
    }
  },
  watch: {
    $route (to, from){
      this.fetchList()
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      let { page = 1 } = this.$route.query

      return this.$store.dispatch('apartments/getApartments', { ...this.$route.query, page })
    },
    openNewPage() {
      this.$router.push(`/apartments/new`)
    },
    openPage(page: number) {
      const query = {
        ...this.$route.query,
        page
      }

      this.$router.push(`/apartments?${querystring.stringify(query)}`)
    }
  }
})
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-9">
              <div class="card-title">
                <h2 class="text-warning">APARTMENTS</h2>
              </div>
            </div>
            <div class="col-md-3 text-md-right my-auto">
              <button class="btn btn-warning" @click="openNewPage">
                New Apartment
              </button>
            </div>
          </div>
        </div>
        <div class="card-body bg-light">
          <div class="row">
            <div class="col-md-3">
              <ApartmentFilter></ApartmentFilter>
            </div>
            <div class="col-md-9">
              <ApartmentTable v-bind:items="items"></ApartmentTable>
              <div class="row">
                <div class="col-sm-6">
                  <div class="paging_simple_numbers">
                    <ul class="pagination pagination-rounded mb-0">
                      <b-pagination
                        :total-rows="paginationMeta.totalItems"
                        :per-page="paginationMeta.itemsPerPage"
                        @change="openPage"
                      ></b-pagination>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
