import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { MusicModule } from './music/music.module';
import { AlbumModule } from './album/album.module';
import { PlaylistModule } from './playlist/playlist.module';
import { Music } from './music/entities/music.entity';
import { Playlist } from './playlist/entities/playlist.entity';
import { Album } from './album/entities/album.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', //driver protocole propriétaire
      host: 'localhost',
      port: 5433,
      username: 'myuser',
      password: 'mypassword',
      database: 'my_database',
      entities: [User, Music, Playlist, Album],
      synchronize: false,
      autoLoadEntities: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
    MusicModule,
    AlbumModule,
    PlaylistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
