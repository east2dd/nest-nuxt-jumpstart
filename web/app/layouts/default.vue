<script>
import Vertical from '../page-views/layouts/vertical'

export default {
  components: {
    Vertical
  }
}
</script>

<template>
  <div>
    <Vertical>
      <transition name="fade">
      <nuxt />
      </transition>
    </Vertical>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
