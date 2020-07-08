<script lang="ts">
import querystring from 'querystring'
import Vue from 'vue'
import { mapState } from 'vuex'
import { Apartment } from '../shared/interfaces'
import { PaginationMeta } from '../../../common/pagination'
import { ApartmentTable, ApartmentsOnMap, ApartmentFilter, ApartmentPagination } from './components'
import { canNew } from './policy'
import { ITEMS_PER_PAGE } from './constants'

export default Vue.extend({
  components: { ApartmentTable, ApartmentsOnMap, ApartmentFilter, ApartmentPagination },
  data() {
    return {
      itemsPerPage: ITEMS_PER_PAGE
    }
  },
  computed: {
    ...mapState(['auth']),
    items(): Apartment[] {
      return this.$store.state.apartments.items.items || []
    },
    paginationMeta(): PaginationMeta {
      return Object.assign({}, this.$store.state.apartments.items.meta)
    },
    selectedItemId(): number {
      return this.$store.state.apartments.selectedItemId || 0
    },
    selectedItem(): Apartment | undefined {
      return this.items.find((item) => {
        return item.id == this.selectedItemId
      })
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
      const { page = 1, limit = this.itemsPerPage } = this.$route.query

      return this.$store.dispatch('apartments/getApartments', {
        ...this.$route.query,
        page,
        limit
      })
    },
    openNewPage() {
      this.$router.push(`/apartments/new`)
    },
    showNewButton(): boolean {
      return canNew(this.auth.user)
    },
    selectApartment(itemId: number): void {
      this.$store.dispatch('apartments/selectApartment', itemId)
        .then(() => {
          if (this.selectedItem != undefined) {
            this.$refs.apartmentsMap.moveCenter({
              lat: this.selectedItem.latitude,
              lng: this.selectedItem.longitude
            })
          }
        })
    },
    showPagination(): boolean {
      return this.items.length > 0
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
                <i class="mdi mdi-filter"></i>Filter
              </b-button>
              <b-collapse id="collapse-filter" class="mt-2">
                <ApartmentFilter />
              </b-collapse>
            </b-col>
            <b-col cols="12">
              <ApartmentTable
                :items-per-page="itemsPerPage"
                :items="items"
                :selectApartmentAction="selectApartment"
              />
            </b-col>
            <b-col 
              cols="12"
              v-if="showPagination()"
            >
              <ApartmentPagination />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="7">
        <b-card>
          <ApartmentsOnMap
            ref="apartmentsMap"
            :items="items"
            :selectApartmentAction="selectApartment"
          />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped></style>
