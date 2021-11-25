import { User } from 'src/user/entities';
import { Repository } from 'typeorm';
import { CreateEntryDto, EditEntryDto } from './dtos';
import { Entry } from './entities';
export declare class EntryService {
    private readonly entryRepository;
    constructor(entryRepository: Repository<Entry>);
    get(author?: User): Promise<Entry[]>;
    getOne(id: number, author?: User): Promise<Entry>;
    create(dto: CreateEntryDto, author: User): Promise<Entry>;
    update(id: number, dto: EditEntryDto, author?: User): Promise<Entry & EditEntryDto>;
    delete(id: number, author?: User): Promise<Entry>;
}
