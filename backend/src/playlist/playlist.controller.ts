import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { createPlaylistDto } from './dto/playlist.dto';
import { JwtAuthGuard } from 'src/auth/jwtAuthGuard';
import { Playlist } from './entities/playlist.entity';

@Controller()
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @Post('newPlaylist')
  async newPlaylist(@Body() playlistDto: createPlaylistDto, @Req() req: any) {
    console.log(req.user);
    return this.playlistService.createOne(playlistDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('playlists')
  async find(): Promise<Playlist[]> {
    return this.playlistService.findAll();
  }
}
