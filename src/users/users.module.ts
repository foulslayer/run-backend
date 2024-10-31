import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import TypeORM with User entity
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService, TypeOrmModule], // Export both TypeOrmModule and UsersService if needed elsewhere
})
export class UsersModule {}
