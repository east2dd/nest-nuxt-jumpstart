<script>
import Vertical from './vertical'
import Alert from '~/components/alert'

export default {
  components: {
    Vertical,
    Alert
  },
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
    <Vertical>
      <Alert />
      <nuxt />
    </Vertical>
  </div>
</template>
