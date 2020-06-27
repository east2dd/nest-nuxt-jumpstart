import { ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'
import { SET_APARTMENT, SET_APARTMENTS } from '~/store/constants'
import * as ApartmentsApi from '~/plugins/apis/apartments'

export const state = () => ({
  items: [] as any,
  item: {} as any
})

export type TicketModuleState = ReturnType<typeof state>

export const mutations: MutationTree<TicketModuleState> = {
  [SET_APARTMENTS]: (state, items) => (state.items = items),
  [SET_APARTMENT]: (state, item) => (state.item = item)
}

export const actions: ActionTree<TicketModuleState, RootState> = {
  getApartments({ commit, dispatch }) {
    return ApartmentsApi.fetchApartments()
      .then((res: any) => {
        commit(SET_APARTMENTS, res.apartments)
      })
      .catch((err: any) => {
        dispatch('alerts/alertError', 'Something went wrong', {
          root: true
        })
        throw err
      })
  },
  getTicket({ commit, dispatch }, id) {
    return ApartmentsApi.fetchApartment(id)
      .then((item: any) => {
        commit(SET_APARTMENT, item)
      })
      .catch((err: any) => {
        dispatch('alerts/alertError', 'Something went wrong', {
          root: true
        })
        throw err
      })
  },
  createApartment({ dispatch }, params) {
    return ApartmentsApi.createApartment(params)
      .then(() => {
        dispatch('alerts/alertSuccess', 'Apartment is successfully created', {
          root: true
        })
      })
      .catch((err: any) => {
        dispatch('alerts/alertError', 'Something went wrong', {
          root: true
        })
        throw err
      })
  },
  deleteApartment({ dispatch }, id) {
    return ApartmentsApi.deleteApartment(id)
      .then(() => {
        dispatch('alerts/alertSuccess', 'Apartment is successfully deleted', {
          root: true
        })
      })
      .catch((err: any) => {
        dispatch('alerts/alertError', 'Something went wrong', {
          root: true
        })
        throw err
      })
  }
}
