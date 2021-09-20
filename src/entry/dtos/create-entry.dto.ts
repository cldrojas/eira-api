import { IsNumber, IsString, IsEnum } from 'class-validator';
import { EnumToString } from 'src/common/helpers';
import { EntryCategory } from '../enums';

export class CreateEntryDto {
  @IsNumber()
  userID: number;

  @IsString()
  content: string;

  @IsEnum(EntryCategory, {
    message: `Invalid option. Categories are: ${EnumToString(EntryCategory)}`,
  })
  category: string;

  @IsNumber()
  intensity: number;
}
