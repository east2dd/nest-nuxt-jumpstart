import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class CreateApartmentDto {
  @ApiProperty({
    name: 'name',
    description: 'Name of Apartment',
  })
  @IsString()
  @IsNotEmpty()
  public readonly name: string

  @ApiProperty({
    name: 'description',
    description: 'Description of Apartment',
  })
  @IsString()
  @IsOptional()
  public readonly description: string

  @ApiProperty({
    name: 'floorAreaSize',
    description: 'Floor area size of Apartment',
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly floorAreaSize: number

  @ApiProperty({
    name: 'pricePerMonth',
    description: 'Price per month of Apartment',
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly pricePerMonth: number

  @ApiProperty({
    name: 'numberOfRooms',
    description: 'Price per month of Apartment',
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly numberOfRooms: number

  @ApiProperty({
    name: 'latitude',
    description: 'Coordinate latitude of Apartment',
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly latitude: number

  @ApiProperty({
    name: 'longitude',
    description: 'Coordinate longitude of Apartment',
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly longitude: number
}
