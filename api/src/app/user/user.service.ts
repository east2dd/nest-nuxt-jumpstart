import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import AuthRegisterService from '../auth/service/auth.register.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate'
import { UserRepository } from './user.repository'
import { UserPaginateService } from './service/user.paginate.service'
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  all(): Promise<User[]> {
    return this.userRepository.find()
  }

  async paginate(options: IPaginationOptions, params = {}): Promise<Pagination<User>> {
    const service = new UserPaginateService( this.userRepository, options, params)

    return await service.call()
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
