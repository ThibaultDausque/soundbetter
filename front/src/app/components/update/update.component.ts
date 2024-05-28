import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UpdateService } from './update.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  playlistForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private updateService: UpdateService, @Inject(MAT_DIALOG_DATA) public data: { playlist: string }) {}

  ngOnInit(): void {
    this.playlistForm = this.formBuilder.group({ 
      playlistTitle: "",
      Date: new Date()
    })
  }

  get title() {
    return this.playlistForm.get('playlistTitle');
  }


  close() {
    this.dialog.closeAll();
  }

  updatePlaylist() {
    console.log(this.data);
    const oldPlaylistTitle = this.data?.playlist;
    const newPlaylistTitle  = this.playlistForm.value;
    console.log(oldPlaylistTitle);
    this.updateService.updatePlaylist(oldPlaylistTitle, newPlaylistTitle).subscribe({
      next: response => {
        console.log('updated successful', response);
      },
      error: error => {
        console.error('Error updating playlist', error);
      }
    });
  }

}
