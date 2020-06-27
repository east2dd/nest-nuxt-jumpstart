<template>
  <div class="container">
    <div>
      <Page />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Page from '../../../page-views/apartments/show/index.vue'

export default Vue.extend({
  components: {
    Page
  }
})
</script>
