import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  validate(username: string, password: string) {
    console.log(
      'order of bening call first when use fx login (inside localStategy)',
      2,
    );
    const user = this.authService.validateUser({ username, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
