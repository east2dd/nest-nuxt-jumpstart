import { ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'
import { SET_APARTMENT, SET_APARTMENTS } from '~/store/constants'
import * as ApartmentsApi from '~/plugins/apis/apartments'
import { alertSuccess, alertError } from './helper'
import { Pagination, PaginationMeta } from '../common/pagination'

const defaultPaginationMeta: PaginationMeta = {
  totalItems: 0,
  itemCount: 0,
  itemsPerPage: 0,
  totalPages: 0,
  currentPage: 1
}
export const state = () => ({
  items: { items: [], meta: defaultPaginationMeta } as Pagination,
  item: {} as any
})

export type TicketModuleState = ReturnType<typeof state>

export const mutations: MutationTree<TicketModuleState> = {
  [SET_APARTMENTS]: (state, items) => (state.items = items),
  [SET_APARTMENT]: (state, item) => (state.item = item)
}

export const actions: ActionTree<TicketModuleState, RootState> = {
  getApartments({ commit, dispatch }, params) {
    return ApartmentsApi.all(params)
      .then((res: any) => {
        commit(SET_APARTMENTS, res)
      })
      .catch((err: any) => {
        alertError('Something went wrong')

        throw err
      })
  },
  getApartment({ commit, dispatch }, id) {
    return ApartmentsApi.get(id)
      .then((item: any) => {
        commit(SET_APARTMENT, item)
      })
      .catch((err: any) => {
        alertError('Something went wrong')

        throw err
      })
  },
  createApartment({ dispatch }, params) {
    return ApartmentsApi.create(params)
      .then(() => {
        alertSuccess('Created Successfully')
      })
      .catch((err: any) => {
        alertError('Something went wrong')

        throw err
      })
  },
  updateApartment({ dispatch }, params) {
    return ApartmentsApi.update(params.id, params)
      .then(() => {
        alertSuccess('Updated Successfully')
      })
      .catch((err: any) => {
        alertError('Something went wrong')

        throw err
      })
  },
  deleteApartment({ dispatch }, id) {
    return ApartmentsApi.destroy(id)
      .then(() => {
        alertSuccess('Deleted Successfully')
      })
      .catch((err: any) => {
        alertError('Something went wrong')

        throw err
      })
  }
}
