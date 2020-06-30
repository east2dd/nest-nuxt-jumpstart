<script lang="ts">
import querystring from 'querystring'
import Vue from 'vue'
import { mapState } from 'vuex'
import { Apartment } from '../shared/interfaces'
import { PaginationMeta } from '../../../common/pagination'
import ApartmentFilter from './filter.vue'
import ApartmentTable from './table.vue'
import { canNew } from './policy'

export default Vue.extend({
  components: { ApartmentFilter, ApartmentTable },
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
      <b-col>
        <b-card>
          <b-row>
            <b-col xs="12" md="3">
              <ApartmentFilter />
            </b-col>
            <b-col xs="12" md="9">
              <ApartmentTable :items="items" />
              <b-row>
                <b-col>
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
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped></style>
