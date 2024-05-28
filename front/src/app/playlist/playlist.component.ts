import { Component, Input } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../components/update/update.component';
import { DeleteComponent } from '../components/delete/delete.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

  playlists!: string[];
  selectedPlaylist!: string;

  constructor(private playlistService: PlaylistService, private dialog: MatDialog) {
    this.fetchPlaylist();
  }

  fetchPlaylist() {
    this.playlistService.getPlaylist().subscribe(data => {
      this.playlists = data.map(((item: { playlistTitle: string }) => item.playlistTitle))
    })
  }

  updateList(playlist: string) {
    this.selectedPlaylist = playlist;
    this.dialog.open(UpdateComponent, {
      width: '400px',
      height: '400px',
      data: { playlist: this.selectedPlaylist }
    });
  }

  deleteList(playlist: string) {
    this.selectedPlaylist = playlist;
    console.log(playlist);
    this.dialog.open(DeleteComponent, {
      width: '400px',
      height: '400px',
      data: { playlist: this.selectedPlaylist }
    });
  }
}
