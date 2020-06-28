import { Controller, Get, Req, UseGuards, Body, Post, BadRequestException, Param, Put, Delete } from '@nestjs/common'
import { Request } from '../../common/request'
import {
  ApiOperation,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger'
import { UserService } from './user.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiBearerAuth()
@ApiTags('User')
@Controller()
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('me')
  @ApiOperation({ description: 'Get user profile' })
  public async me(@Req() req: Request) {
    return this.userService.find(req.user.id)
  }

  @Post('')
  @ApiOperation({ description: 'Create a user'})
  public async create(@Req() req: Request, @Body() params: CreateUserDto) {
    try {
      return await this.userService.create(params)
    } catch (e) {
      throw new BadRequestException(e.message)
    }    
  }

  @Put(':userId')
  @ApiOperation({ description: 'Update a user'})
  public async update(
    @Req() req: Request,
    @Param('userId') userId: number,
    @Body() params: UpdateUserDto
  ) {
    try {
      return await this.userService.update(userId, params)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  @Delete(':userId')
  @ApiOperation({ description: 'Delete a user'})
  public async destroy(
    @Req() req: Request,
    @Param('userId') userId: number
  ) {
    try {
      return await this.userService.destroy(userId)
    } catch (e) {
      throw new BadRequestException(e.message)
    }    
  }
}
