import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Apartment } from './apartment.entity'
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) {}

  all(): Promise<Apartment[]> {
    return this.apartmentRepository.find()
  }

  find(id: number): Promise<Apartment> {
    return this.apartmentRepository.findOne(id)
  }

  findByUserId(userId: number): Promise<Apartment> {
    return this.apartmentRepository.findOne({ userId: userId })
  }

  create(params: CreateApartmentDto): Promise<Apartment> {
    return this.apartmentRepository.save(params)
  }

  async update(id, params: UpdateApartmentDto): Promise<Apartment> {
    const user = await this.find(id)
    Object.assign(user, params)

    return this.apartmentRepository.save(user)
  }

  async destroy(id): Promise<boolean>{
    this.apartmentRepository.delete({ id: id })

    return true
  }
}
