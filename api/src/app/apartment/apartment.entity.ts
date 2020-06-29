import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from '../../common/base-entity'
import { User } from '../user/user.entity';

@Entity({ name: "apartments" })
export class Apartment extends BaseEntity{
  @Column({
    unique: true
  })
  id: number

  @Column()
  userId: number

  @Column()
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

  @ManyToOne(type => User, user => user.apartments)
  @JoinColumn({ name: 'user_id' })
  user: User
}
