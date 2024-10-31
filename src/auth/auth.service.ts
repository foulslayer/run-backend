import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
  {
    id: 1,
    username: 'john',
    password: 'changeme',
    role: 'admin',
  },
  {
    id: 2,
    username: 'maria',
    password: 'guess',
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => user.username === username);

    if (!findUser) {
      return null;
    }

    if (password === findUser.password) {
      // Exclude password from the user object using destructuring
      const { password, ...user } = findUser;
      // Return a signed JWT token with the user data
      return this.jwtService.sign(user);
    }
  }
}
