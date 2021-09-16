import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, EditUserDto } from './dtos';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async get() {
    const data = await this.userService.get();
    return { data };
  }
  @Get(':id')
  async getOne(@Param('id') id: number) {
    const data = await this.userService.getOne(id);
    return { data };
  }
  @Post()
  async create(@Body() dto: CreateUserDto) {
    const data = await this.userService.create(dto);
    return { message: 'User created', data };
  }
  @Put(':id')
  async edit(@Param('id') id: number, @Body() dto: EditUserDto) {
    const data = await this.userService.edit(id, dto);
    return { message: 'User edited', data };
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    const data = await this.userService.delete(id);
    return { message: 'User deleted', data };
  }
}
