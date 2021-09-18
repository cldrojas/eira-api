import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntryDto, EditEntryDto } from './dtos';

import { Entry } from './entities';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry)
    private readonly entryRepository: Repository<Entry>,
  ) {}

  async get() {
    return await this.entryRepository.find();
  }

  async getOne(id: number) {
    const entry = await this.entryRepository.findOne(id);
    if (!entry) throw new NotFoundException("There's no entry with that id");
    return entry;
  }
  async create(dto: CreateEntryDto) {
    const entry = this.entryRepository.create(dto);
    return await this.entryRepository.save(entry);
  }
  async update(id: number, dto: EditEntryDto) {
    const entry = await this.entryRepository.findOne(id);
    const editedEntry = Object.assign(entry, dto);
    return await this.entryRepository.save(editedEntry);
  }
  async delete(id: number) {
    return await this.entryRepository.delete(id);
  }
}
