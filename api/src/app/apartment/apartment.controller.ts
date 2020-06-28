import { Controller, Get, Req, UseGuards, Body, Post, BadRequestException, Param, Put, Delete } from '@nestjs/common'
import { Request } from '../../common/request'
import {
  ApiOperation,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger'
import { ApartmentService } from './apartment.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';

@ApiBearerAuth()
@ApiTags('Apartment')
@Controller()
@UseGuards(JwtAuthGuard)
export class ApartmentController {
  constructor(
    private readonly userService: ApartmentService,
  ) {}

  @Get('')
  @ApiOperation({ description: 'Get apartment list'})
  public async index(@Req() req: Request) {
    try {
      return await this.userService.all()
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  @Post('')
  @ApiOperation({ description: 'Create a apartment'})
  public async create(@Req() req: Request, @Body() params: CreateApartmentDto) {
    try {
      Object.assign(params, { userId: req.user.id })

      console.log(req.user)

      return await this.userService.create(params)
    } catch (e) {
      throw new BadRequestException(e.message)
    }    
  }

  @Put(':id')
  @ApiOperation({ description: 'Update a apartment'})
  public async update(
    @Req() req: Request,
    @Param('id') id: number,
    @Body() params: UpdateApartmentDto
  ) {
    try {
      return await this.userService.update(id, params)
    } catch (e) {
      throw new BadRequestException(e.message)
    }    
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete a apartment'})
  public async destroy(
    @Req() req: Request,
    @Param('id') id: number
  ) {
    try {
      return await this.userService.destroy(id)
    } catch (e) {
      throw new BadRequestException(e.message)
    }    
  }
}
