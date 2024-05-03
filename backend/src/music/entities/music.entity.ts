import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('musics')
export class Musics {
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
}
