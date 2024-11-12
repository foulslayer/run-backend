import { Injectable } from '@nestjs/common';
import { CreateHistorikDto } from './dto/create-historik.dto';
import { UpdateHistorikDto } from './dto/update-historik.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Historik } from './entities/historik.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HistorikService {
  @InjectRepository(Historik)
  private readonly historikRepository: Repository<Historik>;

  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async create(createHistorikDto: CreateHistorikDto, user: any) {
    const foundUser = await this.userRepository.findOne({
      where: { id: user.userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const historik = new Historik();
    historik.distance = createHistorikDto.distance;
    historik.averagespeed = createHistorikDto.averagespeed;
    historik.topspeed = createHistorikDto.topspeed;
    historik.time = createHistorikDto.time;
    historik.date = createHistorikDto.date;
    historik.user = foundUser;

    const savedHistorik = await this.historikRepository.save(historik);
    return savedHistorik;
  }

  async findAll(user: any) {
    const foundUser = await this.userRepository.findOne({
      where: { id: user.userId },
    });

    if (!foundUser) {
      throw new Error('User not found');
    }

    const historiks = await this.historikRepository.find({
      where: { user: foundUser },
      relations: ['user'],
    });

    return historiks;
  }

  async findOne(id: number) {
    const historiks = await this.historikRepository.find({
      select: [
        'id',
        'distance',
        'averagespeed',
        'topspeed',
        'time',
        'date',
        'user',
      ],
    });

    return historiks;
  }

  update(id: number, updateHistorikDto: UpdateHistorikDto) {
    return `This action updates a #${id} historik`;
  }

  remove(id: number) {
    return this.historikRepository.delete({ id: id });
  }
}
