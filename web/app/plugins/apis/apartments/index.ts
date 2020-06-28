import {
  APARTMENTS_URL,
  APARTMENT_URL,
} from './constants'
import { CreateApartmentDto } from './dto'
import { apiUrl } from '~/helpers/api'

export * from './interfaces'

export const $axios: any = {}

export const all = (): Promise<any> => {
  return $axios.$get(apiUrl(APARTMENTS_URL))
}

export const get = (id: string): Promise<any> => {
  return $axios.$get(apiUrl(APARTMENT_URL, { id }))
}

export const create = (params: CreateApartmentDto) => {
  return $axios.$post(apiUrl(APARTMENTS_URL), params)
}

export const destroy = (id: string): Promise<any> => {
  return $axios.$put(apiUrl(APARTMENT_URL, { id }))
}
