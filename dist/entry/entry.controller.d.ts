import { RolesBuilder } from 'nest-access-control';
import { User as UserEntity } from 'src/user/entities';
import { CreateEntryDto, EditEntryDto } from './dtos';
import { EntryService } from './entry.service';
export declare class EntryController {
    private readonly entryService;
    private readonly rolesBuilder;
    constructor(entryService: EntryService, rolesBuilder: RolesBuilder);
    get(author: UserEntity): Promise<{
        data: import("./entities").Entry[];
    }>;
    getOne(id: number): Promise<{
        data: import("./entities").Entry;
    }>;
    create(dto: CreateEntryDto, author: UserEntity): Promise<{
        message: string;
        data: import("./entities").Entry;
    }>;
    update(id: number, dto: EditEntryDto, author: UserEntity): Promise<{
        message: string;
        data: any;
    }>;
    delete(id: number, author: UserEntity): Promise<{
        message: string;
        data: import("./entities").Entry;
    }>;
}
