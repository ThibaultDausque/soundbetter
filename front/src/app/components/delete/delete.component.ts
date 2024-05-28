import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DeleteService } from './delete.service';
import { FormGroup } from '@angular/forms';
import { newPlaylist } from '../../new-playlist/playlist';
import { error } from 'node:console';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  constructor(private dialog: MatDialog, private deleteService: DeleteService, @Inject(MAT_DIALOG_DATA) public data: { playlist: string }) {}

  close() {
    this.dialog.closeAll();
  }

  deletePlaylist() {
    this.deleteService.deletePlaylist(this.data.playlist).subscribe({
      next: response => {
        console.log('Delete successful', response);
      },
      error: error => {
        console.error('Error deleting playlist', error);
      }

    });
  }

}
