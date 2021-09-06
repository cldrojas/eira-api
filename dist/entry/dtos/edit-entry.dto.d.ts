import { CreateEntryDto } from './create-entry.dto';
declare const EditEntryDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateEntryDto, "userID">>>;
export declare class EditEntryDto extends EditEntryDto_base {
}
export {};
