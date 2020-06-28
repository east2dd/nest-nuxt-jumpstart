import { IsString, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateUserDto {
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

  @IsString()
  @IsNotEmpty()
  public readonly email: string
}
