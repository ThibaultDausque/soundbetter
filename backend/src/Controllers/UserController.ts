import { Body, Controller, Post } from '@nestjs/common';
import { registerDTO } from 'src/Dto/register';
import { UserService } from 'src/Services/UserService';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  addUser(@Body() register: registerDTO) {
    console.log(register);
  }
}
