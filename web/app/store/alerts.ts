import { ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'
import { SET_ALERT } from '~/store/constants'

export const state = () => ({
  status: '',
  message: ''
})

export type AlertModuleState = ReturnType<typeof state>

export const mutations: MutationTree<AlertModuleState> = {
  [SET_ALERT]: (state, alert) => {
    state.status = alert.status
    state.message = alert.message
  }
}

export const actions: ActionTree<AlertModuleState, RootState> = {
  setAlert({ commit }, alert) {
    commit(SET_ALERT, alert)
  },
  alertSuccess({ commit }, message) {
    commit(SET_ALERT, {
      status: 'success',
      message
    })
  },
  alertError({ commit }, message) {
    commit(SET_ALERT, {
      status: 'error',
      message
    })
  }
}
