import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { CreateEntryDto } from './dtos';

@Controller('entry') //ruta generada por el controller
export class EntryController {
  @Get()
  getMany() {
    return 'OK';
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return {
      'id-resivido': id,
    };
  }

  @Post(':id')
  create(@Body() dto: CreateEntryDto) {
    return dto;
  }

  @Put(':id')
  update(@Param('id') id: number) {
    //Update the correct object
    return id;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      'id-resivido': id,
    };
  }
}
