import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaylistService } from './playlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-playlist',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './new-playlist.component.html',
  styleUrl: './new-playlist.component.css'
})

export class NewPlaylistComponent implements OnInit {
  playlistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistForm = this.formBuilder.group({
      playlistTitle: "",
      Date: new Date()
    })
  }

  get title() {
    return this.playlistForm.get('playlistTitle');
  }

  onSubmit() {
    this.playlistService.postPlaylist(this.playlistForm.value).subscribe({
      next: () => {
        alert('Playlist created !');
      },
      error: () => {
        alert('retry');
      }
    });
  }

}
