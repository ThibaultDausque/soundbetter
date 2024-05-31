import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(user: User): Promise<User> {
    console.log(user.password);
    return this.userRepository.save(user);
  }

  async findOneByEmail(email: string): Promise<User | null> {
    console.log(email);
    const user = await this.userRepository.findOne({ where: { email } });

    return user;
  }

  async findById(id: number): Promise<User> {
     return this.userRepository.findOne({ where: { id } });
  }
}
