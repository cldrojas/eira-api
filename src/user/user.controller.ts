import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRolesBuilder, RolesBuilder } from 'nest-access-control';

import { AppResources, AppRoles } from 'src/app.roles';
import { Auth, User } from 'src/common/decorators';
import { CreateUserDto, EditUserDto } from './dtos';
import { RegisterUserDto } from './dtos/register-user.dto';
import { User as UserEntity } from './entities';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectRolesBuilder()
    private readonly rolesBuilder: RolesBuilder,
  ) {}

  @Get()
  async get() {
    const data = await this.userService.getAll();
    return { data };
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const data = await this.userService.findById(id);
    return { data };
  }

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    const data = await this.userService.create({
      ...dto,
      roles: [AppRoles.AUTHOR],
    });
    return { message: 'User registered', data };
  }

  @Auth({ possession: 'any', action: 'create', resource: AppResources.USER })
  @Post()
  async create(@Body() dto: CreateUserDto) {
    const data = await this.userService.create(dto);
    return { message: 'User created', data };
  }

  @Auth({ possession: 'own', action: 'update', resource: AppResources.USER })
  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() dto: EditUserDto,
    @User() user: UserEntity,
  ) {
    let data;
    if (
      this.rolesBuilder.can(user.roles).updateAny(AppResources.USER).granted
    ) {
      //Admin privileges
      data = await this.userService.edit(id, dto);
    } else {
      //Author privileges
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { roles, ...rest } = dto;
      data = await this.userService.edit(id, rest, user);
    }

    return { message: 'User edited', data };
  }

  @Auth({ action: 'delete', possession: 'own', resource: AppResources.USER })
  @Delete(':id')
  async delete(@Param('id') id: number, @User() user: UserEntity) {
    let data;
    if (
      this.rolesBuilder.can(user.roles).updateAny(AppResources.USER).granted
    ) {
      //Admin privileges
      data = await this.userService.delete(id);
    } else {
      //Author privileges
      data = await this.userService.delete(id, user);
    }

    return { message: 'User deleted', data };
  }
}
