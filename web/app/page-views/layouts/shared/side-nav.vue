<script>
import MetisMenu from 'metismenujs/dist/metismenujs'
import { mapState } from 'vuex'
import { USER_ADMIN } from '../../users/shared/constants'

export default {
  computed: {
    ...mapState(['auth'])
  },
  mounted() {
    document.body.setAttribute('data-sidebar', 'dark')

    const menuRef = new MetisMenu('#side-menu')
    const links = document.getElementsByClassName('side-nav-link-ref')
    let matchingMenuItem = null
    for (let i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i]
        break
      }
    }
  },
  methods: {
    isAdmin() {
      return this.auth.user.role == USER_ADMIN
    }
  }
}
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
