import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { Auth } from 'src/common/decorators';
import { CreateEntryDto, EditEntryDto } from './dtos';
import { EntryService } from './entry.service';

@Controller('entries') //ruta generada por el controller
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Auth()
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

  @Auth()
  @Post()
  async create(@Body() dto: CreateEntryDto) {
    const data = await this.entryService.create(dto);
    return { message: 'Entry created', data };
  }

  @Auth()
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: EditEntryDto) {
    const data = await this.entryService.update(id, dto);
    return { message: 'Entry updated', data };
  }

  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: number) {
    const data = await this.entryService.delete(id);
    return { message: 'Entry deleted', data };
  }
}
