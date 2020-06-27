import { ApiInterface } from '../index'

declare module '@nuxt/types' {
  interface Context {
    $api: ApiInterface
  }
  interface NuxtAppOptions {
    $api: ApiInterface
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiInterface
  }
}
