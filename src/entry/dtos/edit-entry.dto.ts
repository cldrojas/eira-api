import { PartialType } from '@nestjs/swagger';
import { CreateEntryDto } from './create-entry.dto';

export class EditEntryDto extends PartialType(CreateEntryDto) {}
