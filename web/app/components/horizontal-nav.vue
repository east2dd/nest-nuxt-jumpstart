<script>
export default {
  mounted() {
    // this.coloredHeader();
  },
  methods: {
    onMenuClick(event) {
      event.preventDefault()
      const nextEl = event.target.nextSibling
      if (nextEl && !nextEl.classList.contains('show')) {
        const parentEl = event.target.parentNode
        if (parentEl) {
          parentEl.classList.remove('show')
        }
        nextEl.classList.add('show')
      } else if (nextEl) {
        nextEl.classList.remove('show')
      }
      return false
    },
    topbarLight() {
      document.body.setAttribute('data-topbar', 'light')
      document.body.removeAttribute('data-layout-size', 'boxed')
    },
    boxedWidth() {
      document.body.setAttribute('data-layout-size', 'boxed')
      document.body.removeAttribute('data-topbar', 'light')
      document.body.setAttribute('data-topbar', 'dark')
    },
    coloredHeader() {
      document.body.setAttribute('data-topbar', 'colored')
      document.body.removeAttribute('data-layout-size', 'boxed')
    }
  }
}
</script>
<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
        <div id="topnav-menu-content" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/dashboard">
                <i class="bx bx-home-circle mr-2"></i>Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
