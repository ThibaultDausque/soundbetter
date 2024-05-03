import { IsNotEmpty } from 'class-validator';

export class createMusicDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  musicTitle: string;

  @IsNotEmpty()
  postDate: Date;

  @IsNotEmpty()
  track: string;

  @IsNotEmpty()
  cover: string;
}
