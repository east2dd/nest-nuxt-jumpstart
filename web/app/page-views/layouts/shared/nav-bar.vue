<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['auth'])
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu()
    },
    openMyApartments() {
      this.$router.push('/apartments')
    },
    logout() {
      this.$auth.logout()
    }
  }
})
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <div class="navbar-brand-box">
          <a href="/" class="logo">
            TEST
          </a>
        </div>

        <button
          id="vertical-menu-btn"
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item"
          @click="toggleMenu"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>

      <div class="d-flex">
        <b-dropdown right variant="black" toggle-class="header-item">
          <template v-slot:button-content>
            <span class="d-none d-xl-inline-block ml-1">
              {{ auth.user.firstName }} {{ auth.user.lastName }}
            </span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <a
            class="dropdown-item"
            href="javascript: void(0);"
            @click="openMyApartments"
          >
            <i class="bx bx-home font-size-16 align-middle mr-1"></i>
            My Apartments
          </a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item text-danger"
            href="javascript: void(0);"
            @click="logout"
          >
            <i
              class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"
            ></i>
            Logout
          </a>
        </b-dropdown>
      </div>
    </div>
  </header>
</template>
