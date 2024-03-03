import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-team-dialog',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './team-dialog.component.html',
  styleUrl: './team-dialog.component.sass',
})
export class TeamDialogComponent {
  playerColumns: string[] = ['number', 'name', 'position', 'year'];
  coachColumns: string[] = ['name', 'role'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
