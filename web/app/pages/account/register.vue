<template>
  <div class="container">
    <div>
      <Page />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Page from '../../page-views/account/register/index.vue'

export default Vue.extend({
  auth: 'guest',
  layout: 'guest',
  components: {
    Page
  }
})
</script>
