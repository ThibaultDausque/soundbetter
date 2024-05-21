import { Music } from 'src/music/entities/music.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('playlists')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'playlist_title', length: 50 })
  playlistTitle: string;

  @CreateDateColumn({ name: 'post_date' })
  postDate: Date;

  @Column({ length: 50 })
  cover: string;

  @ManyToOne(() => User, (user) => user.playlists)
  @JoinColumn({ name: 'users_id' })
  user: User;

  @ManyToMany(() => Music, (music) => music.playlists)
  musics: Music[];
}
