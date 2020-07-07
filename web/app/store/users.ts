import { ActionTree, MutationTree } from 'vuex'
import { alertError, alertSuccess } from './helper'
import { RootState } from '~/store'
import { SET_USER, SET_USERS } from '~/store/constants'
import * as UsersApi from '~/plugins/apis/users'

export const state = () => ({
  items: [] as any,
  item: {} as any
})

export type TicketModuleState = ReturnType<typeof state>

export const mutations: MutationTree<TicketModuleState> = {
  [SET_USERS]: (state, items) => (state.items = items),
  [SET_USER]: (state, item) => (state.item = item)
}

export const actions: ActionTree<TicketModuleState, RootState> = {
  getUsers({ commit }, params) {
    return UsersApi.all(params)
      .then((res: any) => {
        commit(SET_USERS, res)
      })
      .catch((err: any) => {
        alertError('Something went wrong')
        throw err
      })
  },
  getUser({ commit }, id) {
    return UsersApi.get(id)
      .then((item: any) => {
        commit(SET_USER, item)
      })
      .catch((err: any) => {
        alertError('Something went wrong')
        throw err
      })
  },
  createUser(_store, params) {
    return UsersApi.create(params)
      .then(() => {
        alertSuccess('Created Successfully')
      })
      .catch((err: any) => {
        alertError('Something went wrong')
        throw err
      })
  },
  updateUser(_store, params) {
    return UsersApi.update(params.id, params)
      .then(() => {
        alertSuccess('Updated Successfully')
      })
      .catch((err: any) => {
        alertError('Something went wrong')
        throw err
      })
  },
  deleteUser(_store, id) {
    return UsersApi.destroy(id)
      .then(() => {
        alertSuccess('Deleted Successfully')
      })
      .catch((err: any) => {
        alertError('Something went wrong')
        throw err
      })
  }
}
