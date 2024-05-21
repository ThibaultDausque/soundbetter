import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Music } from '../entities/music.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>,
  ) {}

  async findAll(): Promise<Music[]> {
    return this.musicRepository.find();
  }
}
