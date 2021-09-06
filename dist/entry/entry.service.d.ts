import { Repository } from 'typeorm';
import { CreateEntryDto } from './dtos';
import { EditEntryDto } from './dtos/edit-entry.dto';
import { Entry } from './entities/entry.entity';
export declare class EntryService {
    private readonly entryRepository;
    constructor(entryRepository: Repository<Entry>);
    getMany(): Promise<Entry[]>;
    getOne(id: number): Promise<Entry>;
    create(dto: CreateEntryDto): Promise<Entry[]>;
    update(id: number, dto: EditEntryDto): Promise<Entry & EditEntryDto>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
