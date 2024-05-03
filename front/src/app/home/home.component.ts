import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { MUSIC_DATA } from './music';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private audio = new Audio('/Users/thibault/Desktop/work/soundbetter/Music/TRAPNANANA_W:MYTHIC/TRAPNANANA W MYTHIC.mp3');
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
