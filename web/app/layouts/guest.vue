<script>
import Footer from '~/components/footer'

export default {
  components: {
    Footer,
  }
}
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <nuxt />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
