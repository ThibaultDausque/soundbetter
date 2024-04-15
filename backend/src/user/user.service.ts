import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: createUserDto) {
    const user: User = new User();
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.creationDate = createUserDto.creationDate;

    await this.userRepository.save(user);
    return user;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    console.log(email);
    const user = await this.userRepository.findOne({ where: { email } });

    return user;
  }
}
