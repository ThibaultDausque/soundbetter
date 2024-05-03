import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Musics } from '../entities/music.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Musics)
    private musicRepository: Repository<Musics>,
  ) {}

  async findAll(): Promise<Musics[]> {
    return this.musicRepository.find();
  }
}
