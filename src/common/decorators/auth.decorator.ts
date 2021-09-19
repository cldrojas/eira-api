import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards';

export function Auth() {
  return applyDecorators(UseGuards(JwtGuard), ApiBearerAuth());
}
