import { CreateEntryDto, EditEntryDto } from './dtos';
import { EntryService } from './entry.service';
export declare class EntryController {
    private readonly entryService;
    constructor(entryService: EntryService);
    getMany(): Promise<import("./entities/entry.entity").Entry[]>;
    getOne(id: number): Promise<import("./entities/entry.entity").Entry>;
    create(dto: CreateEntryDto): Promise<import("./entities/entry.entity").Entry[]>;
    update(id: number, dto: EditEntryDto): Promise<import("./entities/entry.entity").Entry & EditEntryDto>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
