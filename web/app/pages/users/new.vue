<template>
  <div class="container">
    <div>
      <Page />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Page from '../../page-views/users/new/index.vue'

export default Vue.extend({
  layout: 'default',
  components: {
    Page
  }
})
</script>
