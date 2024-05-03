DROP TABLE IF EXISTS
        musics_playlists, playlists, musics, albums, users;

CREATE TABLE users (
        id serial,
        username VARCHAR(50) UNIQUE NOT NULL,
        creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(62) NOT NULL, -- attention hash
        CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE albums (
        id serial,
        album_title VARCHAR(50) UNIQUE NOT NULL,
        cover VARCHAR(255),
        post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        user_id INT,     
        CONSTRAINT albums_pk PRIMARY KEY (id),
        CONSTRAINT album_user_fk
                FOREIGN key (user_id)
                REFERENCES users(id)       
);

CREATE TABLE musics (
        id serial,
        music_title VARCHAR(50) UNIQUE NOT NULL,
        post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        track VARCHAR(255) NOT NULL,
        cover VARCHAR(255) NOT NULL,
        album_id INT,
        user_id INT,
        CONSTRAINT musics_pk PRIMARY KEY (id),
        CONSTRAINT music_user_fk
                FOREIGN KEY (user_id)
                REFERENCES users(id),
        CONSTRAINT music_album_id_fk 
                FOREIGN KEY (album_id)
                REFERENCES albums(id)
);

CREATE TABLE playlists (
        id serial,
        playlist_title VARCHAR(50) UNIQUE NOT NULL,
        post_date DATE NOT NULL,
        cover VARCHAR(255) NOT NULL,
        users_id INT NOT NULL,
        CONSTRAINT playlist_pk PRIMARY KEY (id),
        CONSTRAINT playlist_user_fk 
                FOREIGN KEY (users_id)
                REFERENCES users(id)
);


CREATE TABLE musics_playlists (
        music_id INT REFERENCES musics(id),
        playlist_id INT REFERENCES playlists(id),
        PRIMARY key (music_id, playlist_id),
        CONSTRAINT musics_playlists_music_title_fk
                FOREIGN KEY (music_id)
                REFERENCES musics(id),
        CONSTRAINT musics_playlists_playlist_title_fk
                FOREIGN KEY (playlist_id)
                REFERENCES playlists(id)
);