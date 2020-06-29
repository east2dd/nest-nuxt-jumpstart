<script lang="ts">
import Vue from 'vue'
import { User } from '../shared/interfaces'
import { USER_ROLES } from '../shared/constants';
import { FIELDS } from './constants'

export default Vue.extend({
  data() {
    return {
      fields: FIELDS,
      totalRows: 0,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      currentPage: 1,
      sortBy: 'name',
      sortDesc: true,
      userRoles: USER_ROLES
    }
  },
  computed: {
    items(): User[] {
      return this.$store.state.users.items
    },
    tableData(): User[] {
      this.totalRows = this.items.length

      return this.items
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
    openNewPage() {
      this.$router.push(`/users/new`)
    },
    openEditPage(id: string) {
      this.$router.push(`/users/${id}/edit`)
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
                <h2 class="text-warning">USERS</h2>
              </div>
            </div>
            <div class="col-md-3 text-md-right my-auto">
              <button class="btn btn-warning" @click="openNewPage">
                New User
              </button>
            </div>
          </div>
        </div>
        <div class="card-body bg-light">
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
              >
                <template v-slot:cell(role)="row">
                  {{ userRoles[row.value] }}
                </template>

                <template v-slot:cell(actions)="row">
                  <b-button
                    size="sm"
                    class="btn-info text-nowrap mr-1"
                    @click="openEditPage(row.item.id)"
                  >
                    Edit
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
