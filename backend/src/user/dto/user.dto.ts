import { IsDate, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'username must have atleast 3 characters.' })
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsDate()
  creationDate: Date;
}
