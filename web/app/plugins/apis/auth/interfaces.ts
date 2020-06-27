import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { LoginDto, RegisterDto } from './dto'

export interface AuthApiInterface {
  $axios: NuxtAxiosInstance

  login(params: LoginDto): void
  register(params: RegisterDto): void
}
