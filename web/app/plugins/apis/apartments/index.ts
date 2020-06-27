import {
  APARTMENTS_URL,
  APARTMENT_URL,
} from './constants'
import { CreateApartmentDto } from './dto'
import { apiUrl } from '~/helpers/api'

export * from './interfaces'

export const $axios: any = {}

export const fetchApartments = (): Promise<any> => {
  return $axios.$get(apiUrl(APARTMENTS_URL))
}

export const fetchApartment = (id: string): Promise<any> => {
  return $axios.$get(apiUrl(APARTMENT_URL, { id }))
}

export const createApartment = (params: CreateApartmentDto) => {
  return $axios.$post(apiUrl(APARTMENTS_URL), params, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const deleteApartment = (id: string): Promise<any> => {
  return $axios.$put(apiUrl(APARTMENT_URL, { id }))
}
