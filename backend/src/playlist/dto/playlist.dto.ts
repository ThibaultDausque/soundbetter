import { IsDate, IsNotEmpty } from 'class-validator';

export class createPlaylistDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  playlistTitle: string;

  @IsNotEmpty()
  @IsDate()
  postDate: Date;

  @IsNotEmpty()
  cover: string;
}
