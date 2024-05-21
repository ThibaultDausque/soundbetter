import { Album } from 'src/album/entities/album.entity';
import { Playlist } from 'src/playlist/entities/playlist.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('musics')
export class Music {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'music_title', length: 50 })
  musicTitle: string;

  @UpdateDateColumn({ name: 'post_date' })
  postDate: Date;

  @Column({ length: 50 })
  track: string;

  @Column({ length: 50 })
  cover: string;

  @ManyToOne(() => Album, (album) => album.musics)
  @JoinColumn({ name: 'album_id' })
  album: Album;

  @ManyToMany(() => Playlist, (playlist) => playlist.musics)
  playlists: Playlist[];
}
