import { initApi } from '~/plugins/apis'

export default ({ app }: any, inject: (name: string, object: any) => void) => {
  inject('api', initApi(app.$axios))
}
