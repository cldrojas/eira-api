import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from '.';

export class EditUserDto extends PartialType(
  OmitType(CreateUserDto, ['roles'] as const),
) {}
