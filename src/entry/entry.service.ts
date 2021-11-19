import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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

  async get(author?: User) {
    const list = await this.entryRepository
      .createQueryBuilder('entry')
      .where('user_id')
      .getMany()
    return list;
    /* .then(entry => (!author ? entry : !!entry && author.id ===  ? p : null)); */
  }

  async getOne(id: number, author?: User) {
    const entry = await this.entryRepository
      .findOne(id)
      .then((e) => (!author ? e : !!e && author.id === e.author.id ? e : null));

    if (!author && !entry)
      throw new NotFoundException("There's no entry with that id"); //404

    if (author && !entry)
      throw new UnauthorizedException("You're not allowed to see that!");

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
