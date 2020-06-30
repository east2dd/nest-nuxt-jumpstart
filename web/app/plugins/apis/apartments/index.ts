import querystring from 'querystring'
import { APARTMENTS_URL, APARTMENT_URL } from './constants'
import { CreateApartmentDto, UpdateApartmentDto } from './dto'
import { apiUrl } from '~/plugins/apis/helper'

export * from './interfaces'

export const $axios: any = {}

export const all = (params = {}): Promise<any> => {
  return $axios.$get(
    apiUrl(APARTMENTS_URL, { query: '?' + querystring.stringify(params) })
  )
}

export const get = (id: number): Promise<any> => {
  return $axios.$get(apiUrl(APARTMENT_URL, { id }))
}

export const create = (params: CreateApartmentDto) => {
  return $axios.$post(apiUrl(APARTMENTS_URL, { query: "" }), params)
}

export const update = (id: number, params: UpdateApartmentDto) => {
  return $axios.$put(apiUrl(APARTMENT_URL, { id }), params)
}

export const destroy = (id: number): Promise<any> => {
  return $axios.$delete(apiUrl(APARTMENT_URL, { id }))
}
