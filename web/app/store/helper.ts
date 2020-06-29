import Vue from 'vue'

export const alertSuccess = (message: string) => {
  Vue.notify({
    group: 'main',
    type: 'success',
    text: message
  })
}

export const alertError = (message: string) => {
  Vue.notify({
    group: 'main',
    type: 'danger',
    text: message
  })
}
