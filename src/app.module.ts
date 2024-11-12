import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { Historik } from './historik/entities/historik.entity';
import * as cors from 'cors';
import { use } from 'passport';
import { HistorikModule } from './historik/historik.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // Or 'mysql', 'mariadb', etc.
      host: 'localhost',
      port: 5432, // Change based on your database
      username: 'postgres',
      password: 'Datait2024!',
      database: 'runDB',
      //  entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [User, Historik],
      synchronize: true, // Set to false in production
    }),
    UsersModule,
    AuthModule,
    HistorikModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors({ origin: 'http://localhost:8081' })).forRoutes('*');
  }
}
