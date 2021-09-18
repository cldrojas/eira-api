import { IsNumber, IsString, IsEnum } from 'class-validator';
import { EnumToString } from 'src/helpers/';
import { EntryCategory } from '../enums';

export class CreateEntryDto {
  @IsNumber()
  userID: number;

  @IsString()
  content: string;

  @IsEnum(EntryCategory, {
    message: `invalid option. categories are: ${EnumToString(EntryCategory)}`,
  })
  category: string;

  @IsNumber()
  intensity: number;
}
