import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ApartmentController } from './apartment.controller'
import { ApartmentRepository } from './apartment.repository'
import { ApartmentService } from './apartment.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([ApartmentRepository]),
  ],
  controllers: [ApartmentController],
  providers: [ApartmentService],
  exports: [ApartmentService]
})
export class ApartmentModule {}
