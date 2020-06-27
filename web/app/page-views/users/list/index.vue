<script lang="ts">
import Vue from 'vue'
import { User } from './interfaces'
import { FIELDS } from './constants'

export default Vue.extend({
  data() {
    return {
      fields: FIELDS,
      totalRows: 0,
      perPage: 5,
      pageOptions: [5, 10, 25, 50, 100],
      currentPage: 1,
      sortBy: 'name',
      sortDesc: true,
      filter: '',
      filterOn: ['name']
    }
  },
  computed: {
    items(): User[] {
      return this.$store.state.apartments.items
    },
    tableData(): User[] {
      const items: User[] = this.items

      this.onFiltered(items)

      return items
    },
    pageCount(): number {
      return Math.ceil(this.totalRows / this.perPage)
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      this.$store.dispatch('users/getUsers')
    },
    onFiltered(filteredItems: User[]) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    openShowPage(id: string) {
      this.$router.push(`/users/${id}`)
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
            <div class="col-md-12">
              <div class="card-title">
                <h2 class="text-warning">USERS</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body bg-light">
          <div>
            <div class="input-group">
              <input
                v-model="filter"
                type="text"
                class="form-control"
                placeholder="Enter Ticket # or Subject"
              />
              <div class="input-group-append">
                <button class="btn btn-info" type="button">Filter</button>
              </div>
            </div>
            <p class="small text-muted">
              {{ totalRows }} Records Found, Page {{ currentPage }} of
              {{ pageCount }}
            </p>
          </div>
          <div>
            <div class="table-responsive mb-0">
              <b-table
                :items="tableData"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              >
                <template v-slot:cell(subject)="row">
                  {{ '#' + row.item.tid + ' - ' + row.value }}
                </template>

                <template v-slot:cell(actions)="row">
                  <b-button
                    size="sm"
                    class="btn-info text-nowrap mr-1"
                    @click="openShowPage(row.item.id)"
                  >
                    View
                  </b-button>
                </template>
              </b-table>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div
                  class="dataTables_length h-100 d-inline-flex align-items-center"
                >
                  <label class="text-nowrap mb-0">
                    Results Per Page&nbsp;
                  </label>
                  <b-form-select
                    v-model="perPage"
                    size="sm"
                    :options="pageOptions"
                  ></b-form-select>
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="dataTables_paginate paging_simple_numbers d-flex justify-content-sm-end align-items-center"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
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
</template>

<style lang="scss" scoped></style>
