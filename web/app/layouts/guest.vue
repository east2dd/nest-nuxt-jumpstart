<script>
export default {
}
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <div class="main-content">
        <div class="page-content">
          <notifications group="main" position="bottom right"/>

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
