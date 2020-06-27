<script>
import MetisMenu from 'metismenujs/dist/metismenujs'

export default {
  components: {},
  mounted() {
    const sidebarLayout = localStorage.getItem('sidebar-layout')
    switch (sidebarLayout) {
      case 'light-sidebar':
        this.lightSidebar()
        break
      case 'compact-sidebar':
        this.compactSidebar()
        break
      case 'icon-sidebar':
        this.iconSidebar()
        break
      case 'colored-sidebar':
        this.coloredSidebar()
        break
      case 'boxed-layout':
        this.boxedLayout()
        break
      default:
        document.body.setAttribute('data-sidebar', 'dark')
        break
    }

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
    logout() {
      this.$auth.logout();
      this.$router.push("/login");
    },
    defaultSidebar() {
      localStorage.setItem('sidebar-layout', 'default-sidebar')
      document.body.setAttribute('data-sidebar', 'dark')
      document.body.removeAttribute('data-layout-size', 'boxed')
      document.body.removeAttribute('data-sidebar-size', 'small')
      document.body.removeAttribute('data-topbar', 'small')
      document.body.classList.remove('vertical-collpsed')
    },
    lightSidebar() {
      localStorage.setItem('sidebar-layout', 'light-sidebar')
      document.body.setAttribute('data-topbar', 'dark')
      document.body.removeAttribute('data-sidebar')
      document.body.removeAttribute('data-layout-size', 'boxed')
      document.body.removeAttribute('data-sidebar-size', 'small')
      document.body.classList.remove('vertical-collpsed')
    },
    compactSidebar() {
      localStorage.setItem('sidebar-layout', 'compact-sidebar')
      document.body.setAttribute('data-sidebar-size', 'small')
      document.body.setAttribute('data-sidebar', 'dark')
      document.body.removeAttribute('data-layout-size', 'boxed')
      document.body.classList.remove('vertical-collpsed')
      document.body.removeAttribute('data-topbar', 'dark')
    },
    iconSidebar() {
      localStorage.setItem('sidebar-layout', 'icon-sidebar')
      document.body.setAttribute('data-keep-enlarged', 'true')
      document.body.classList.add('vertical-collpsed')
      document.body.setAttribute('data-sidebar', 'dark')
      document.body.removeAttribute('data-topbar', 'dark')
      document.body.removeAttribute('data-layout-size', 'boxed')
    },
    boxedLayout() {
      localStorage.setItem('sidebar-layout', 'boxed-layout')
      document.body.setAttribute('data-keep-enlarged', 'true')
      document.body.classList.add('vertical-collpsed')
      document.body.setAttribute('data-layout-size', 'boxed')
      document.body.removeAttribute('data-sidebar', 'colored')
      document.body.setAttribute('data-sidebar', 'dark')
      document.body.removeAttribute('data-topbar', 'dark')
    },
    coloredSidebar() {
      localStorage.setItem('sidebar-layout', 'colored-sidebar')
      document.body.setAttribute('data-sidebar', 'colored')
      document.body.removeAttribute('data-layout-size', 'boxed')
      document.body.removeAttribute('data-sidebar-size', 'small')
      document.body.classList.remove('vertical-collpsed')
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
          Apartments
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/users" class="side-nav-link-ref">
          <i class="fas fa-user"></i>
          Users
        </nuxt-link>
      </li>

      <li>
        <a href="#" class="side-nav-link-ref" @click="logout">
          <i class="fas fa-power-off"></i>
          Log Out
        </a>
      </li>
    </ul>
  </div>
</template>
