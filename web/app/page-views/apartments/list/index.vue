<script lang="ts">
import querystring from 'querystring'
import Vue from 'vue'
import { mapState } from 'vuex'
import { Apartment } from '../shared/interfaces'
import { PaginationMeta } from '../../../common/pagination'
import ApartmentTable from './components/table.vue'
import ApartmentsOnMap from './components/google-maps.vue'
import ApartmentFilter from './components/filter.vue'
import { canNew } from './policy'

export default Vue.extend({
  components: { ApartmentTable, ApartmentsOnMap, ApartmentFilter },
  computed: {
    ...mapState(['auth']),
    items(): Apartment[] {
      return this.$store.state.apartments.items.items || []
    },
    paginationMeta(): PaginationMeta {
      return Object.assign({}, this.$store.state.apartments.items.meta)
    }
  },
  watch: {
    $route(_to, _from) {
      this.fetchList()
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      const { page = 1 } = this.$route.query

      return this.$store.dispatch('apartments/getApartments', {
        ...this.$route.query,
        page
      })
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
    },
    showNewButton(): boolean {
      return canNew(this.auth.user)
    }
  }
})
</script>

<template>
  <div>
    <b-row class="mb-2">
      <b-col>
        <h3 class="d-inline">APARTMENTS</h3>
        <b-button
          class="btn btn-warning float-right"
          v-if="showNewButton()"
          @click="openNewPage"
        >
          New Apartment
        </b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="5">
        <b-card>
          <b-row>
            <b-col cols="12">
              <b-button
                class="mb-1"
                v-b-toggle.collapse-filter 
                variant="primary"
              >
                Filter
              </b-button>
              <b-collapse id="collapse-filter" class="mt-2">
                <ApartmentFilter />
              </b-collapse>
            </b-col>
            <b-col cols="12">
              <ApartmentTable :items="items" />
            </b-col>
            <b-col cols="12">
              <div class="dataTables_paginate paging_simple_numbers float-right">
                <ul class="pagination pagination-rounded mb-0">
                  <b-pagination
                    :total-rows="paginationMeta.totalItems"
                    :per-page="paginationMeta.itemsPerPage"
                    @change="openPage"
                  />
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="7">
        <b-card>
          <ApartmentsOnMap :items="items" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped></style>
