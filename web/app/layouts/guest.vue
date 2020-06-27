<script>
import Horizontal from './horizontal'

export default {
  components: { Horizontal },
  data() {
    return {}
  },
  computed: {
    layoutType() {
      return this.$root.layoutType
    }
  },
  methods: {}
}
</script>

<template>
  <div>
    <Horizontal>
      <nuxt />
    </Horizontal>
  </div>
</template>
