export default function({ $axios, store }: any) {
  $axios.onRequest((config: any) => {
    store.dispatch('alerts/setAlert', { status: '', message: '' })
    store._vm.$nextTick(() => {
      if (!store._vm.$nuxt) return config

      store._vm.$nuxt.$loading.start()
      return config
    })
  })

  $axios.onResponse((response: any) => {
    store._vm.$nextTick(() => {
      if (!store._vm.$nuxt) return response

      store._vm.$nuxt.$loading.finish()
      return response
    })
  })

  $axios.onError((error: any) => {
    store._vm.$nextTick(() => {
      if (!store._vm.$nuxt) return error

      store._vm.$nuxt.$loading.finish()
      return Promise.reject(error)
    })
  })
}
