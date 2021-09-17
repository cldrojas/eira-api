import { IsNumber, IsString } from 'class-validator';

export class CreateEntryDto {
  @IsNumber()
  userID: number;

  @IsString()
  content: string;

  @IsString()
  category: string;

  @IsNumber()
  intensity: number;
}
