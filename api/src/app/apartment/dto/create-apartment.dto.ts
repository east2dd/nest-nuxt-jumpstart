import { IsString, IsNotEmpty, IsOptional, IsNumber, IsIn, Min, Max, IsInt } from 'class-validator';
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
  @IsInt()
  @IsNotEmpty()
  public readonly numberOfRooms: number

  @ApiProperty({
    name: 'latitude',
    description: 'Coordinate latitude of Apartment',
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(-90)
  @Max(90)
  public readonly latitude: number

  @ApiProperty({
    name: 'longitude',
    description: 'Coordinate longitude of Apartment',
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(-180)
  @Max(180)
  public readonly longitude: number

  @ApiProperty({
    name: 'state',
    description: 'State of Apartment. 0: Available, 1: Rented',
  })
  @IsIn([0, 1])
  @IsNotEmpty()
  public readonly state: number
}
