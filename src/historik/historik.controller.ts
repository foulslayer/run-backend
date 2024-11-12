import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Req,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { HistorikService } from './historik.service';
import { CreateHistorikDto } from './dto/create-historik.dto';
import { UpdateHistorikDto } from './dto/update-historik.dto';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { use } from 'passport';

@Controller('historik')
export class HistorikController {
  constructor(private readonly historikService: HistorikService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Req() req: Request, @Body() createHistorikDto: CreateHistorikDto) {
    return this.historikService.create(createHistorikDto, req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: Request) {
    console.log(req.user);
    return this.historikService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.historikService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistorikDto: UpdateHistorikDto,
  ) {
    return this.historikService.update(+id, updateHistorikDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historikService.remove(+id);
  }
}
