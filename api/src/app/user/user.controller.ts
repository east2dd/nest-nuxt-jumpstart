import {
  Controller,
  Get,
  Req,
  UseGuards,
  Body,
  Post,
  BadRequestException,
  Param,
  Put,
  Delete,
  Query
} from '@nestjs/common'
import { Request } from '../../common/request'
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { UserService } from './user.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserGuard } from './user.guard'

@ApiBearerAuth()
@ApiTags('User')
@Controller()
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @ApiOperation({ description: 'Get user profile' })
  public async me(@Req() req: Request) {
    return await this.userService.find(req.user.id)
  }

  @Get('')
  @ApiOperation({ description: 'Get user list' })
  @UseGuards(new UserGuard('canRead'))
  public async index(
    @Req() req: Request,
    @Query('page') page = 1,
    @Query('limit') limit = 15,
  ) {
    try {
      return await this.userService.paginate({ page, limit }, req.query)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  @Post('')
  @ApiOperation({ description: 'Create a user' })
  @UseGuards(new UserGuard('canCreate'))
  public async create(@Req() req: Request, @Body() params: CreateUserDto) {
    try {
      return await this.userService.create(params)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  @Get(':id')
  @ApiOperation({ description: 'Get a user detail' })
  @UseGuards(new UserGuard('canUpdate'))
  public async show(@Req() req: Request, @Param('id') id: number) {
    try {
      return await this.userService.find(id)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  @Put(':id')
  @ApiOperation({ description: 'Update a user' })
  @UseGuards(new UserGuard('canUpdate'))
  public async update(
    @Req() req: Request,
    @Param('id') id: number,
    @Body() params: UpdateUserDto,
  ) {
    try {
      return await this.userService.update(id, params);
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete a user' })
  @UseGuards(new UserGuard('canDelete'))
  public async destroy(@Req() req: Request, @Param('id') id: number) {
    try {
      return await this.userService.destroy(id)
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }
}
