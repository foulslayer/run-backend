import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(8)
  readonly password: string;

  @IsNumber()
  readonly points: number;
}
