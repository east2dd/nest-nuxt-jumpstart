import {
  APARTMENTS_URL,
  APARTMENT_URL,
} from './constants'
import { CreateApartmentDto } from './dto'
import { apiUrl } from '~/plugins/apis/helper'
import { UpdateApartmentDto } from './dto/update-apartment.dto';

export * from './interfaces'

export const $axios: any = {}

export const all = (): Promise<any> => {
  return $axios.$get(apiUrl(APARTMENTS_URL))
}

export const get = (id: number): Promise<any> => {
  return $axios.$get(apiUrl(APARTMENT_URL, { id }))
}

export const create = (params: CreateApartmentDto) => {
  return $axios.$post(apiUrl(APARTMENTS_URL), params)
}

export const update = (id: number, params: UpdateApartmentDto) => {
  return $axios.$put(apiUrl(APARTMENT_URL, { id }), params)
}

export const destroy = (id: number): Promise<any> => {
  return $axios.$delete(apiUrl(APARTMENT_URL, { id }))
}
