import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import AuthRegisterService from '../auth/service/auth.register.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

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

  async update(id, params: UpdateUserDto): Promise<User> {
    const user = await this.find(id)
    Object.assign(user, params)

    return this.userRepository.save(user)
  }
}
