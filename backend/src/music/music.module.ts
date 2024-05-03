import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musics } from './entities/music.entity';
import { MusicController } from './music.controller/music.controller';
import { MusicService } from './music.service/music.service';

@Module({
  imports: [TypeOrmModule.forFeature([Musics])],
  controllers: [MusicController],
  providers: [MusicService],
})
export class MusicModule {}
