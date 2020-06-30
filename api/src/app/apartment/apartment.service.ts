import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Apartment } from './apartment.entity';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApartmentRepository } from './apartment.repository';
import { UserRepository } from '../user/user.repository';
import { Brackets } from 'typeorm';
import { ApartmentPaginateService } from './service/apartment.paginate.service';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(ApartmentRepository)
    private apartmentRepository: ApartmentRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  all(): Promise<Apartment[]> {
    return this.apartmentRepository.find({relations: ["user"]})
  }

  async paginate(options: IPaginationOptions, params = {}): Promise<Pagination<Apartment>> {
    const service = new ApartmentPaginateService(this.apartmentRepository, this.userRepository, options, params)

    return await service.call()
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

  async update(id: number, params: UpdateApartmentDto): Promise<Apartment> {
    const user = await this.find(id)
    Object.assign(user, params)

    return this.apartmentRepository.save(user)
  }

  async destroy(id: number): Promise<boolean>{
    this.apartmentRepository.delete({ id: id })

    return true
  }
}
