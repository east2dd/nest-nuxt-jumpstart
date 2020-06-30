import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { CreateApartmentDto, UpdateApartmentDto } from './dto'

export interface ApartmentApiInterface {
  $axios: NuxtAxiosInstance

  all(): Promise<any>
  get(id: number): Promise<any>
  create(params: CreateApartmentDto): void
  update(id: number, params: UpdateApartmentDto): void
  destroy(id: number): Promise<any>
}
