import { Playlist } from 'src/playlist/entities/playlist.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  email: string;

  @UpdateDateColumn({ name: 'creation_date' })
  creationDate: Date;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 62 })
  password: string;

  @OneToMany(() => Playlist, (playlist) => playlist.user)
  playlists: Playlist[];
}
