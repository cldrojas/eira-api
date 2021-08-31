import { IsEnum, IsNumber, IsString } from 'class-validator';
import { EntryCategory } from '../enums/';

export class CreateEntryDto {
  @IsEnum(EntryCategory, {
    message: 'Invalid option, only listed options are allowed',
  })
  type: EntryCategory;
  @IsString()
  content: string;
  @IsNumber()
  intensity: number;
  @IsNumber()
  createdAt: number;
}
