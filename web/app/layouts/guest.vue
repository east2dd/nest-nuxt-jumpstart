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
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content{
  margin-left: 0!important;
}
</style>
