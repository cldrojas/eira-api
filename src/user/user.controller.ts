import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ACGuard, UseRoles } from 'nest-access-control';
import { AppResources } from 'src/app.roles';
import { Auth } from 'src/common/decorators';
import { CreateUserDto, EditUserDto } from './dtos';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

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

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const data = await this.userService.create(dto);
    return { message: 'User created', data };
  }

  @UseGuards(ACGuard)
  @UseRoles({
    possession: 'any',
    action: 'create',
    resource: AppResources.USER,
  })
  @Auth()
  @Put(':id')
  async edit(@Param('id') id: number, @Body() dto: EditUserDto) {
    const data = await this.userService.edit(id, dto);
    return { message: 'User edited', data };
  }

  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: number) {
    const data = await this.userService.delete(id);
    return { message: 'User deleted', data };
  }
}
