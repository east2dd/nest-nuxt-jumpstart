import querystring from 'querystring'
import { USERS_URL, USER_URL } from './constants'
import { CreateUserDto, UpdateUserDto } from './dto'
import { apiUrl } from '~/plugins/apis/helper'

export * from './interfaces'

export const $axios: any = {}

export const all = (params = {}): Promise<any> => {
  return $axios.$get(
    apiUrl(USERS_URL, { query: '?' + querystring.stringify(params) })
  )
}

export const get = (id: string): Promise<any> => {
  return $axios.$get(apiUrl(USER_URL, { id }))
}

export const create = (params: CreateUserDto) => {
  return $axios.$post(apiUrl(USERS_URL, { query: "" }), params)
}

export const update = (id: string, params: UpdateUserDto): Promise<any> => {
  return $axios.$put(apiUrl(USER_URL, { id }), params, {})
}

export const destroy = (id: string): Promise<any> => {
  return $axios.$delete(apiUrl(USER_URL, { id }))
}
