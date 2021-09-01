import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { CreateEntryDto, EditEntryDto } from './dtos';
import { EntryService } from './entry.service';

@Controller('entries') //ruta generada por el controller
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get()
  async getMany() {
    return await this.entryService.getMany();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.entryService.getOne(id);
  }

  @Post(':id')
  create(@Body() dto: CreateEntryDto) {
    return this.entryService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: EditEntryDto) {
    return this.entryService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.entryService.delete(id);
  }
}
