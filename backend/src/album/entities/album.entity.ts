import { Music } from 'src/music/entities/music.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('album')
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'album_title', length: 50 })
  albumTitle: string;

  @Column()
  cover: string;

  @Column({ name: 'post_date' })
  postDate: Date;

  musics: Music;
}
