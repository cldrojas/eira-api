import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities';
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

  async getOne(id: number, author?: User) {
    const entry = await this.entryRepository
      .findOne(id)
      .then((e) => (!author ? e : !!e && author.id === e.author.id ? e : null));
    if (!entry) throw new NotFoundException("There's no entry with that id");
    return entry;
  }

  async create(dto: CreateEntryDto, author: User) {
    const entry = this.entryRepository.create({ ...dto, author });
    return await this.entryRepository.save(entry);
  }

  async update(id: number, dto: EditEntryDto, author?: User) {
    const entry = await this.getOne(id, author);
    const editedEntry = Object.assign(entry, dto);
    return await this.entryRepository.save(editedEntry);
  }

  async delete(id: number, author?: User) {
    const entry = await this.getOne(id, author);
    return await this.entryRepository.remove(entry);
  }
}
