import { ActionTree, MutationTree } from 'vuex'
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
  getUsers({ commit, dispatch }) {
    return UsersApi.all()
      .then((res: any) => {
        commit(SET_USERS, res)
      })
      .catch((err: any) => {
        dispatch('alerts/alertError', 'Something went wrong', {
          root: true
        })
        throw err
      })
  },
  getUser({ commit, dispatch }, id) {
    return UsersApi.get(id)
      .then((item: any) => {
        commit(SET_USER, item)
      })
      .catch((err: any) => {
        dispatch('alerts/alertError', 'Something went wrong', {
          root: true
        })
        throw err
      })
  },
  createUser({ dispatch }, params) {
    return UsersApi.create(params)
      .then(() => {
        dispatch('alerts/alertSuccess', 'Created Successfully', {
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
  updateUser({ dispatch }, params) {
    return UsersApi.update(params.id, params)
      .then(() => {
        dispatch('alerts/alertSuccess', 'Updated Successfully', {
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
  deleteUser({ dispatch }, id) {
    return UsersApi.destroy(id)
      .then(() => {
        dispatch('alerts/alertSuccess', 'Deleted Successfully', {
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
