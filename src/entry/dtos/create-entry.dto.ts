import { IsNumber, IsString } from 'class-validator';
import { EntryType } from '../enums/';

export class CreateEntryDto {
  @IsString()
  type: EntryType;
  @IsString()
  content: string;
  @IsNumber()
  intensity: number;
  @IsNumber()
  createdAt: number;
}
