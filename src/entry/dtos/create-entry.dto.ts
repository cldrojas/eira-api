import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { EntryCategory } from '../enums/';

export class CreateEntryDto {
  @IsNumber()
  userID: number;

  @IsString()
  content: string;

  @IsEnum(EntryCategory, {
    message: 'Invalid option, only listed options are allowed',
  })
  category: EntryCategory;

  @IsNumber()
  intensity: number;

  @IsDate()
  createdAt: Date;
}
