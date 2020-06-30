import { ApartmentRepository } from '../apartment.repository'
import { Apartment } from '../apartment.entity';
import { Pagination, paginate, IPaginationOptions } from 'nestjs-typeorm-paginate'
import { UserRepository } from 'src/app/user/user.repository'
export class ApartmentPaginateService{
  constructor(
    private apartmentRepository: ApartmentRepository,
    private userRepository: UserRepository,
    private options: IPaginationOptions,
    private params: any
  ) {}

  public async call(): Promise<Pagination<Apartment>> {    
    const queryBuilder = this.buildQuery()
    const results = await paginate<Apartment>(queryBuilder, this.options)
 
    return new Pagination(
      await Promise.all(results.items.map(async (item: Apartment) => {
        const user = await this.userRepository.findOne({ id: item.userId })
        item.user = user
    
        return item
      })),
      results.meta,
      results.links,
    )
  }

  private buildQuery() {
    const { pricePerMonth, floorAreaSize, numberOfRooms } = this.params
    const queryBuilder = this.apartmentRepository.createQueryBuilder('apartments')

    this.filterByFieldRange(queryBuilder, 'price_per_month', pricePerMonth)
    this.filterByFieldRange(queryBuilder, 'floor_area_size', floorAreaSize)
    this.filterByFieldRange(queryBuilder, 'number_of_rooms', numberOfRooms)
    queryBuilder.getMany()

    return queryBuilder
  }

  private filterByFieldRange(queryBuilder, column: string, range: string) {
    if (!range) return

    const [ min, max ] = range.split(',')
    if(!min || !max) return

    return queryBuilder
      .andWhere(`${column} >= ${parseInt(min)}`)
      .andWhere(`${column} <= ${parseInt(max)}`)
  }
}
