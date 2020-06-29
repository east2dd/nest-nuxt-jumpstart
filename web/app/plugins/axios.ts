export default function({ $axios, store }: any) {
  $axios.onRequest((config: any) => {
    store._vm.$nextTick(() => {
      return config
    })
  })

  $axios.onResponse((response: any) => {
    store._vm.$nextTick(() => {
      return response
    })
  })

  $axios.onError((error: any) => {
    store._vm.$nextTick(() => {
      return Promise.reject(error)
    })
  })
}
