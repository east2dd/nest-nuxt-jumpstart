<script>
import Vertical from './vertical'
import Alert from '~/components/alert'

export default {
  components: {
    Vertical,
    Alert
  }
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
