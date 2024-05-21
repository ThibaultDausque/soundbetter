import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public_strategy';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { createUserDto } from 'src/user/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: LoginDto) {
    const token = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    return token;
  }

  @Post('register')
  addUser(@Body() user: createUserDto) {
    return this.authService.register(user);
  }
}
