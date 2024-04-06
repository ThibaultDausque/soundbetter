import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  register(@Body() registerDto: Record<string, any>) {
    const payload = {
      username: registerDto.username,
      email: registerDto.email,
      password: registerDto.password,
      creationDate: new Date(),
    };

    return this.authService.register(payload);
  }
}
