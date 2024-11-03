import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

//demo
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

  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async validateUser({ username, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => user.username === username); // demo
    /*  const findUser = await this.userRepository.findOne({
      where: { username, password },
    });*/
    if (!findUser) {
      return null;
    }
    return this.jwtService.sign({
      id: findUser.id,
      username: findUser.username,
    });
  }
}
