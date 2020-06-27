<script>
import simplebar from 'simplebar-vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    simplebar
  },
  methods: {
    toggleMenu() {
      // eslint-disable-next-line prefer-const
      let element = document.getElementById('topnav-menu-content')
      element.classList.toggle('show')
    }
  }
}
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="/" class="logo logo-dark">
            NUXT JUMPSTART
          </a>

          <a href="/" class="logo logo-light">
            NUXT JUMPSTART
          </a>
        </div>

        <button
          id="toggle"
          type="button"
          class="btn btn-sm mr-2 font-size-16 d-lg-none header-item"
          @click="toggleMenu"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
</template>
