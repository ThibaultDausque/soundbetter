import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './entities/music.entity';
import { MusicController } from './music.controller/music.controller';
import { MusicService } from './music.service/music.service';

@Module({
  imports: [TypeOrmModule.forFeature([Music])],
  controllers: [MusicController],
  providers: [MusicService],
})
export class MusicModule {}
