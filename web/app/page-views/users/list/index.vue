<script lang="ts">
import querystring from 'querystring'
import Vue from 'vue'
import { User } from '../shared/interfaces'
import { USER_ROLES } from '../shared/constants'
import { PaginationMeta } from '../../../common/pagination'
import { FIELDS, ITEMS_PER_PAGE } from './constants'

export default Vue.extend({
  data() {
    return {
      fields: FIELDS,
      totalRows: 0,
      itemsPerPage: ITEMS_PER_PAGE,
      pageOptions: [10, 25, 50, 100],
      currentPage: 1,
      sortBy: 'name',
      sortDesc: true,
      userRoles: USER_ROLES
    }
  },
  computed: {
    items(): User[] {
      return this.$store.state.users.items.items || []
    },
    paginationMeta(): PaginationMeta {
      return Object.assign({}, this.$store.state.users.items.meta)
    }
  },
  watch: {
    $route(_to, _from) {
      this.fetchList()
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      const { page = 1, limit = this.itemsPerPage } = this.$route.query

      return this.$store.dispatch('users/getUsers', {
        ...this.$route.query,
        page,
        limit
      })
    },
    openNewPage() {
      this.$router.push(`/users/new`)
    },
    openPage(page: number) {
      const query = {
        ...this.$route.query,
        page
      }

      this.$router.push(`/users?${querystring.stringify(query)}`)
    },
    openEditPage(id: string) {
      this.$router.push(`/users/${id}/edit`)
    }
  }
})
</script>

<template>
  <div>
    <b-row class="mb-2">
      <b-col>
        <h3 class="d-inline">USERS</h3>
        <b-button 
          class="btn btn-warning float-right"
          @click="openNewPage"
        >
          New User
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="12">
        <b-card>
          <div>
            <div class="table-responsive mb-0">
              <b-table
                thead-class="thead-light"
                :items="items"
                :fields="fields"
                :per-page="itemsPerPage"
                responsive="sm"
              >
                <template v-slot:cell(name)="row">
                  {{ row.item.firstName + ' ' + row.item.lastName }}
                </template>
                <template v-slot:cell(role)="row">
                  {{ userRoles[row.value] }}
                </template>

                <template v-slot:cell(actions)="row">
                  <a
                    href="javascript:void(0);"
                    class="action-icon text-primary"
                    title="Edit User"
                    v-b-tooltip.hover.top
                    @click="openEditPage(row.item.id)"
                  >
                    <i class="mdi mdi-account-edit-outline" style="font-size:22px"></i>
                  </a>
                </template>
              </b-table>
            </div>
            <b-row>
              <b-col>
                <div class="d-flex justify-content-sm-end align-items-center">
                  <ul class="pagination pagination-rounded mb-0">
                    <b-pagination
                      v-model="paginationMeta.currentPage"
                      :total-rows="paginationMeta.totalItems"
                      :per-page="paginationMeta.itemsPerPage"
                      @change="openPage"
                    />
                  </ul>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped></style>
