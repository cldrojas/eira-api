import { IsEnum, IsNumber, IsString } from 'class-validator';
import { EntryCategory } from '../enums/';

export class CreateEntryDto {
  @IsNumber()
  userID: number;

  @IsString()
  content: string;

  @IsEnum(EntryCategory, {
    message: 'Invalid category, only listed categories are allowed',
  })
  category: EntryCategory;

  @IsNumber()
  intensity: number;
}
