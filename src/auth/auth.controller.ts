import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User, Auth } from 'src/common/decorators';
import { User as UserEntity } from 'src/user/entities';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('login')
  login(@User() user: UserEntity) {
    const data = this.authService.login(user);
    return { message: 'Logged in successfully!', data };
  }

  @Auth()
  @Get('refresh')
  refresh(@User() user: UserEntity) {
    const data = this.authService.login(user);
    return { message: 'Refreshed token', data };
  }

  @Auth()
  @Get('profile')
  profile(@User() user: UserEntity) {
    delete user.password;
    return { message: 'Your profile', user };
  }
}
