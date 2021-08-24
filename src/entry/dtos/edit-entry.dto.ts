import { PartialType } from '@nestjs/swagger';
import { CreateEntryDto } from './create-entry.dto';

// eslint-disable-next-line prettier/prettier
export class EditEntryDto extends PartialType(CreateEntryDto) { }
