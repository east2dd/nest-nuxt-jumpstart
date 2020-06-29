import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { CreateApartmentDto } from './dto'
import { UpdateApartmentDto } from './dto/update-apartment.dto';

export interface ApartmentApiInterface {
  $axios: NuxtAxiosInstance

  all(): Promise<any>
  get(id: number): Promise<any>
  create(params: CreateApartmentDto): void
  update(id: number, params: UpdateApartmentDto): void
  destroy(id: number): Promise<any>
}
