import { IsEmail, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsInt()
  ins_user: number; 

  @IsInt()
  upd_user: number; 

  @IsInt()
  type: number; 

}
