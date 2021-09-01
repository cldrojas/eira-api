import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateEntryDto } from './create-entry.dto';

export class EditEntryDto extends PartialType(
  OmitType(CreateEntryDto, ['userID'] as const),
) {}
