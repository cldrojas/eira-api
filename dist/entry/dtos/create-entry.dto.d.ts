import { EntryCategory } from '../enums/';
export declare class CreateEntryDto {
    userID: number;
    content: string;
    category: EntryCategory;
    intensity: number;
}
