import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { CreateUserDto } from './dto'

export interface UserApiInterface {
  $axios: NuxtAxiosInstance

  all(): Promise<any>
  get(id: string): Promise<any>
  create(params: CreateUserDto): void
  destroy(id: string): Promise<any>
}
