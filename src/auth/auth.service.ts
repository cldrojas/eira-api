import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { User } from 'src/user/entities';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && compare(password, user.password)) {
      delete user.password;
      return user;
    }
    return null;
  }

  login(user: User) {
    const { id } = user;
    const payload = { sub: id };
    return { user, accessToken: this.jwtService.sign(payload) };
  }
}
