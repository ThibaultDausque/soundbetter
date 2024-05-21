import { Controller, Get, UseGuards } from '@nestjs/common';
import { MusicService } from '../music.service/music.service';
import { Music } from '../entities/music.entity';
import { JwtAuthGuard } from 'src/auth/jwtAuthGuard';

@Controller()
export class MusicController {
  constructor(private musicService: MusicService) {}
  @UseGuards(JwtAuthGuard)
  @Get('musics')
  async findOne(): Promise<Music[]> {
    return this.musicService.findAll();
  }
}
