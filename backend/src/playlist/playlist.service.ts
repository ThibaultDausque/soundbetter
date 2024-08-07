import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { Repository } from 'typeorm';
import { createPlaylistDto } from './dto/playlist.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist)
    private readonly playlistRepository: Repository<Playlist>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createOne(playlist: createPlaylistDto, userId: number) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    const newPlaylist: Playlist = {
      playlistTitle: playlist.playlistTitle,
      postDate: playlist.postDate,
      cover: playlist.cover,
      musics: [],
      id: playlist.id,
      user: user,
    };
    return this.playlistRepository.save(newPlaylist);
  }

  async findAll(): Promise<Playlist[]> {
    return this.playlistRepository.find();
  }

  async deletePlaylist(playlistTitle: string): Promise<void> {
    await this.playlistRepository.delete({ playlistTitle });
  }

  async updatePlaylist(
    newPlaylistTitle: string,
    oldPlaylistTitle: string,
  ): Promise<void> {
    const playlist = await this.playlistRepository.findOne({
      where: { playlistTitle: oldPlaylistTitle },
    });
    if (playlist) {
      playlist.playlistTitle = newPlaylistTitle;
      await this.playlistRepository.save(playlist);
    } else {
      throw new Error('Playlist not found');
    }
  }
}
