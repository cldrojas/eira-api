import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dtos';
import { EditEntryDto } from './dtos/edit-entry.dto';

@Injectable()
export class EntryService {
  getMany() {
    return { ok: 'getMany' };
  }
  getOne(id: number) {
    return { ok: 'getOne', id };
  }
  create(dto: CreateEntryDto) {
    return { message: 'created: ', dto };
  }
  update(id: number, dto: EditEntryDto) {
    return { ok: 'update', id, dto: dto };
  }
  delete(id: number) {
    return { ok: 'delete', id };
  }
}
