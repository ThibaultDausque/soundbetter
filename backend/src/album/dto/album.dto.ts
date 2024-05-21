import { IsNotEmpty } from 'class-validator';

export class createAlbumDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  albumTitle: string;

  @IsNotEmpty()
  cover: string;

  @IsNotEmpty()
  postDate: Date;
}
