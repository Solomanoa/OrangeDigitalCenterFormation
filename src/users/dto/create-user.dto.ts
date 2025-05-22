import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}