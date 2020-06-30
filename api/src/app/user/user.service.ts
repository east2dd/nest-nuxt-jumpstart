import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import AuthRegisterService from '../auth/service/auth.register.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  all(): Promise<User[]> {
    return this.userRepository.find()
  }

  find(id: number): Promise<User> {
    return this.userRepository.findOne(id)
  }

  findByEmail(email: string): Promise<User>{
    return this.userRepository.findOne({ email: email })
  }

  create(params: CreateUserDto): Promise<User> {
    const registerService = new AuthRegisterService(this.userRepository)

    return registerService.call(params)
  }

  async update(id: number, params: UpdateUserDto): Promise<User> {
    const user = await this.find(id)
    Object.assign(user, params)

    return this.userRepository.save(user)
  }

  async destroy(id: number): Promise<boolean>{
    this.userRepository.delete({ id: id })

    return true
  }
}
