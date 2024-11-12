import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsNumber,
  IsDate,
} from 'class-validator';

export class CreateHistorikDto {
  @IsNumber()
  readonly distance: number;

  @IsNumber({ maxDecimalPlaces: 2, allowInfinity: false, allowNaN: false })
  readonly averagespeed: number;

  @IsNumber({ maxDecimalPlaces: 2, allowInfinity: false, allowNaN: false })
  readonly topspeed: number;

  @IsNumber()
  readonly time: number;

  @IsDate()
  @IsNotEmpty()
  readonly date: Date;
}
