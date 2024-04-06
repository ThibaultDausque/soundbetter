import { IsDate, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'pseudo must have atleast 3 characters.' })
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsDate()
  creationDate: Date;
}
