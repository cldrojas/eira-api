import { IsEnum, IsNumber, IsString } from 'class-validator';
import { EntryCategory } from '../enums/';

export class CreateEntryDto {
  @IsNumber()
  userID: number;

  @IsString()
  content: string;

  @IsNumber()
  createdAt: number;

  @IsEnum(EntryCategory, {
    message: 'Invalid option, only listed options are allowed',
  })
  category: EntryCategory;

  @IsNumber()
  intensity: number;
}
