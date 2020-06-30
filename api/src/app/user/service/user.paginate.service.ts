import { Pagination, paginate, IPaginationOptions } from 'nestjs-typeorm-paginate'
import { UserRepository } from 'src/app/user/user.repository'
import { User } from '../user.entity';

export class UserPaginateService{
  constructor(
    private userRepository: UserRepository,
    private options: IPaginationOptions,
    private params: any
  ) {}

  public async call(): Promise<Pagination<User>> {    
    const queryBuilder = this.buildQuery()
    const results = await paginate<User>(queryBuilder, this.options)
 
    return new Pagination(
      results.items,
      results.meta,
      results.links,
    )
  }

  private buildQuery() {
    const queryBuilder = this.userRepository.createQueryBuilder('users')

    queryBuilder.getMany()

    return queryBuilder
  }
}
