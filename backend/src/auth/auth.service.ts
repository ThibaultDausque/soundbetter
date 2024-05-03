import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(username);
    const isMatch = await bcrypt.compare(pass, user?.password);
    console.log(user, pass);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return token;
  }

  async register(user: createUserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser: User = {
      username: user.username,
      email: user.email,
      password: hashedPassword,
      creationDate: user.creationDate,
      id: user.id,
    };
    const User = await this.userService.createUser(newUser);
    return User;
  }
}
