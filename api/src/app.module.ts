import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { RouterModule, Routes } from 'nest-router'
import { TYPE_ORM_MODULE_OPTIONS } from './config/database'
import { UserModule } from './app/user/user.module'
import { AuthModule } from './app/auth/auth.module'
import { ApartmentModule } from './app/apartment/apartment.module'

const routes: Routes = [
  {
    path: '/v1',
    children: [
      {
        path: '/auth',
        module: AuthModule
      },
      {
        path: '/users',
        module: UserModule
      },
      {
        path: '/apartments',
        module: ApartmentModule
      },
    ]
  }
]

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TYPE_ORM_MODULE_OPTIONS),
    AuthModule,
    UserModule,
    ApartmentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
