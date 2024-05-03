import { Controller, Get } from '@nestjs/common';
import { MusicService } from '../music.service/music.service';
import { Musics } from '../entities/music.entity';

@Controller()
export class MusicController {
  constructor(private musicService: MusicService) {}

  @Get('musics')
  async findOne(): Promise<Musics[]> {
    console.log(Musics);
    return this.musicService.findAll();
  }
}
