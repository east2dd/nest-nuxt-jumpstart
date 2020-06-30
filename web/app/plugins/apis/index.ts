import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ApartmentApiInterface } from './apartments/interfaces'
import { AuthApiInterface } from './auth/interfaces'

import * as apartmentEndpoints from './apartments/index'
import * as userEndpoints from './users/index'
import * as authEndPoints from './auth/index'

export interface ApiInterface {
  apartments: ApartmentApiInterface
  auth: AuthApiInterface
}

export const initApi = (axios: NuxtAxiosInstance): ApiInterface => {
  Object.assign(apartmentEndpoints.$axios, axios)
  Object.assign(userEndpoints.$axios, axios)
  Object.assign(authEndPoints.$axios, axios)

  return {
    apartments: apartmentEndpoints,
    auth: authEndPoints
  }
}
