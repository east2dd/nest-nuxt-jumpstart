import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { CreateUserDto } from './dto'
import { UpdateUserDto } from './dto/update-user.dto';

export interface UserApiInterface {
  $axios: NuxtAxiosInstance

  all(): Promise<any>
  get(id: number): Promise<any>
  create(params: CreateUserDto): void
  update(id: number, params: UpdateUserDto): void
  destroy(id: number): Promise<any>
}
