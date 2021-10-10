import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { InjectRolesBuilder, RolesBuilder } from 'nest-access-control';
import { AppResources } from 'src/app.roles';
import { Auth, User } from 'src/common/decorators';
import { User as UserEntity } from 'src/user/entities';
import { CreateEntryDto, EditEntryDto } from './dtos';
import { EntryService } from './entry.service';

@Controller('entries') //ruta generada por el controller
export class EntryController {
  constructor(
    private readonly entryService: EntryService,
    @InjectRolesBuilder()
    private readonly rolesBuilder: RolesBuilder,
  ) {}

  @Auth({ action: 'read', possession: 'own', resource: AppResources.ENTRY })
  @Get()
  async get() {
    const data = await this.entryService.get();
    return { data };
  }

  @Auth()
  @Get(':id')
  async getOne(@Param('id') id: number) {
    const data = await this.entryService.getOne(id);
    return { data };
  }

  @Auth({ action: 'create', possession: 'own', resource: AppResources.ENTRY })
  @Post()
  async create(@Body() dto: CreateEntryDto, @User() author: UserEntity) {
    const data = await this.entryService.create(dto, author);
    return { message: 'Entry created', data };
  }

  @Auth({ action: 'update', possession: 'own', resource: AppResources.ENTRY })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: EditEntryDto,
    @User() author: UserEntity,
  ) {
    let data;
    if (
      this.rolesBuilder.can(author.roles).updateAny(AppResources.ENTRY).granted
    ) {
      data = await this.entryService.update(id, dto);
    } else {
      data = await this.entryService.update(id, dto, author);
    }
    return { message: 'Entry updated', data };
  }

  @Auth({ action: 'delete', possession: 'own', resource: AppResources.ENTRY })
  @Delete(':id')
  async delete(@Param('id') id: number, @User() author: UserEntity) {
    const data = await this.entryService.delete(id, author);
    return { message: 'Entry deleted', data };
  }
}
