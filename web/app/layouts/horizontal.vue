<script>
import HorizontalTopbar from '~/components/horizontal-topbar'
import HorizontalNav from '~/components/horizontal-nav'
import RightBar from '~/components/right-bar'
import Footer from '~/components/footer'

export default {
  components: {
    HorizontalTopbar,
    HorizontalNav,
    Footer,
    RightBar
  },
  data() {
    return {}
  },
  created: () => {
    document.body.setAttribute('data-layout', 'horizontal')
    document.body.setAttribute('data-topbar', 'dark')
    document.body.removeAttribute('data-sidebar', 'dark')
    document.body.removeAttribute('data-layout-size', 'boxed')
  },
  methods: {
  }
}
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <HorizontalNav />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <slot />
          </div>
        </div>
        <Footer />
      </div>
    </div>
    <RightBar />
  </div>
</template>
