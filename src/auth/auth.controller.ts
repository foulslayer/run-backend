import {
  Body,
  Controller,
  Get,
  HttpException,
  Req,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { get } from 'http';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() reg: Request) {
    console.log('inside Auth controlller staus method');
    console.log(reg.user);
    reg.user;
  }
}
