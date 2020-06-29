import {
  LOGIN_URL,
  REGISTER_URL,
} from './constants'
import { LoginDto, RegisterDto } from './dto'
import { apiUrl } from '~/plugins/apis/helper'

export * from './interfaces'

export const $axios: any = {}

export const login = (params: LoginDto) => {
  return $axios.$post(apiUrl(LOGIN_URL), params)
}

export const register = (params: RegisterDto) => {
  return $axios.$post(apiUrl(REGISTER_URL), params)
}
