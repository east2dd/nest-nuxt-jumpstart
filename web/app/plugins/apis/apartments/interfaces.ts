import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { CreateApartmentDto } from './dto'

export interface ApartmentApiInterface {
  $axios: NuxtAxiosInstance

  fetchApartments(): Promise<any>
  fetchApartment(id: string): Promise<any>
  createApartment(params: CreateApartmentDto): void
  deleteApartment(id: string): Promise<any>
}
