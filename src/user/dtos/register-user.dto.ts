import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from '.';

export class RegisterUserDto extends OmitType(CreateUserDto, [
  'roles',
] as const) {}
