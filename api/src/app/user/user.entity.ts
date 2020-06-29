import { Entity, Column, OneToMany } from 'typeorm'
import { BaseEntity } from '../../common/base-entity'
import { Apartment } from '../apartment/apartment.entity';

@Entity({ name: "users" })
export class User extends BaseEntity{
  @Column({
    unique: true
  })
  id: number

  @Column({
    unique: true
  })
  email: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ length: 100, nullable: true })
  passwordHash: string

  @Column({ default: 0 })
  role: number

  @OneToMany(type => Apartment, apartment => apartment.user)
  apartments: Apartment[]
}
