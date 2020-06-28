import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../../common/base-entity'

@Entity({ name: "apartments" })
export class Apartment extends BaseEntity{
  @Column({
    unique: true
  })
  id: number

  @Column({
    unique: true
  })
  userId: number

  @Column({
    unique: true
  })
  name: string

  @Column()
  description: string

  @Column()
  floorAreaSize: number

  @Column()
  pricePerMonth: number

  @Column()
  numberOfRooms: number

  @Column({ default: 0 })
  state: number

  @Column({ type: 'float' })
  longitude: number

  @Column({ type: 'float' })
  latitude: number
}
