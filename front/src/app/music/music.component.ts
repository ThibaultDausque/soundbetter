import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  id!: number;
  titles!: string[];

  constructor(private musicService: MusicService) {
    this.fetchMusic();
  }

  fetchMusic() {
    this.musicService.getMusic().subscribe(data => {
      this.titles = data.map(((item: { musicTitle: string; }) => item.musicTitle));
    });
  }

  private audio = new Audio();
  musicIndex = 0;
  isPlaying = false;
  playButton = document.getElementById('play');

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }

  playMusic() {
    this.isPlaying = true;
    this.audio.play();
  }

  pauseMusic() {
    this.isPlaying = false;
    this.audio.pause();
  }
}
