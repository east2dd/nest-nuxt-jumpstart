<script>
import Vue from 'vue'
import MetisMenu from 'metismenujs/dist/metismenujs'
import { mapState } from 'vuex'
import { USER_ADMIN } from '../../users/shared/constants'

export default Vue.extend({
  computed: {
    ...mapState(['auth'])
  },
  mounted() {
    document.body.setAttribute('data-sidebar', 'dark')
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const menuRef = new MetisMenu('#side-menu')
  },
  methods: {
    isAdmin() {
      return this.auth.user.role === USER_ADMIN
    }
  }
})
</script>

<template>
  <div id="sidebar-menu">
    <ul id="side-menu" class="metismenu list-unstyled">
      <li class="menu-title">Menu</li>
      <li>
        <nuxt-link to="/apartments" class="side-nav-link-ref">
          <i class="fas fa-home"></i>
          <span>Apartments</span>
        </nuxt-link>
      </li>

      <li v-if="isAdmin()">
        <nuxt-link to="/users" class="side-nav-link-ref">
          <i class="fas fa-user"></i>
          <span>Users</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
  #side-menu .nuxt-link-active, #side-menu .nuxt-link-active i {
    color: #fff !important;
  }
</style>
