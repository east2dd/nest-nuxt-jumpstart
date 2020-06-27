<template>
  <div v-if="loading" class="loading-page">
    <i class="fas fa-spinner fa-spin fa-2x"></i>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
})
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1003;
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding-top: 10px;
}
</style>
