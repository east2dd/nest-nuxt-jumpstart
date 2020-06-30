<script>
import NavBar from './shared/nav-bar'
import SideBar from './shared/side-bar'

export default {
  components: { NavBar, SideBar },
  data() {
    return {
      isMenuCondensed: false
    }
  },
  created: () => {
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle('sidebar-enable')

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        document.body.classList.toggle('vertical-collpsed')
      } else {
        // eslint-disable-next-line no-unused-vars
        document.body.classList.remove('vertical-collpsed')
      }
      this.isMenuCondensed = !this.isMenuCondensed
    }
  }
}
</script>

<template>
  <div id="layout-wrapper">
    <NavBar />
    <SideBar :is-condensed="isMenuCondensed" />
    <div class="main-content">
      <div class="page-content">
        <notifications group="main" position="bottom right" />

        <div class="container-fluid">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
