import { Module } from '@nestjs/common';
import { HistorikService } from './historik.service';
import { HistorikController } from './historik.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Historik } from './entities/historik.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Historik, User])], // Register the repository here

  controllers: [HistorikController],
  providers: [HistorikService],
})
export class HistorikModule {}
