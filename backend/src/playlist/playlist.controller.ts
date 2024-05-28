import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
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
    return this.playlistService.createOne(playlistDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('playlists')
  async find(): Promise<Playlist[]> {
    return this.playlistService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @Delete('deletePlaylist/:playlistTitle')
  async deletePlaylist(@Param('playlistTitle') playlistTitle: string) {
    try {
      await this.playlistService.deletePlaylist(playlistTitle);
      return {
        success: true,
        message: 'Playlist delete successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @Put('updatePlaylist/:playlistTitle')
  async updatePlaylist(
    @Param('playlistTitle') oldPlaylistTitle: string,
    @Body('playlistTitle') newPlaylistTitle: string,
  ) {
    try {
      await this.playlistService.updatePlaylist(
        newPlaylistTitle,
        oldPlaylistTitle,
      );
      return {
        success: true,
        message: 'Playlist updated successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
