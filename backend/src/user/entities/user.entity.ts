import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @UpdateDateColumn({ name: 'creation_date' })
  creationDate: Date;

  @Column()
  username: string;

  @Column()
  password: string;
}
