import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    name: 'firstName',
    description: 'First name of User',
  })
  @IsString()
  @IsNotEmpty()
  public readonly firstName: string

  @ApiProperty({
    name: 'lastName',
    description: 'Last name of User',
  })
  @IsString()
  @IsNotEmpty()
  public readonly lastName: string

  @ApiProperty({
    name: 'email',
    description: 'Email of User',
  })
  @IsString()
  @IsNotEmpty()
  public readonly email: string

  @ApiProperty({
    name: 'password',
    description: 'Password of User',
  })
  @IsString()
  @IsNotEmpty()
  public readonly password: string

  @ApiProperty({
    name: 'role',
    description: 'Role of User',
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly role: number
}
