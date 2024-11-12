import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorikDto } from './create-historik.dto';

export class UpdateHistorikDto extends PartialType(CreateHistorikDto) {}
