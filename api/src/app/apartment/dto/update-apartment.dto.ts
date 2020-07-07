import { IsString, IsNumber, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateApartmentDto {
  @ApiProperty({
    name: 'name',
    description: 'Name of Apartment',
  })
  @IsString()
  @IsOptional()
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
  @IsOptional()
  public readonly floorAreaSize: number

  @ApiProperty({
    name: 'pricePerMonth',
    description: 'Price per month of Apartment',
  })
  @IsNumber()
  @IsOptional()
  public readonly pricePerMonth: number

  @ApiProperty({
    name: 'numberOfRooms',
    description: 'Price per month of Apartment',
  })
  @IsNumber()
  @IsOptional()
  public readonly numberOfRooms: number

  @ApiProperty({
    name: 'latitude',
    description: 'Coordinate latitude of Apartment',
  })
  @IsNumber()
  @IsOptional()
  public readonly latitude: number

  @ApiProperty({
    name: 'longitude',
    description: 'Coordinate longitude of Apartment',
  })
  @IsNumber()
  @IsOptional()
  public readonly longitude: number

  @ApiProperty({
    name: 'state',
    description: 'State of Apartment. 0: Available, 1: Rented',
  })
  @IsNumber()
  @IsOptional()
  public readonly state: number
}

