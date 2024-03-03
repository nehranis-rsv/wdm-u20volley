import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';
import { RSV, VVHE } from './teams.models';
import { CommonModule } from '@angular/common';

export type Position = 'MB' | 'AA' | 'Z' | 'D' | 'L' | 'AA/L' | 'Unbekannt';

export type Trainer = 'Trainer*in';
export type Betreuer = 'Betreuer*in';

export const trainer: Trainer = 'Trainer*in';
export const betreuer: Betreuer = 'Betreuer*in';

export interface Player {
  number: number;
  firstName: string;
  lastName: string;
  position: Position;
  year: number;
}

export interface Coach {
  firstName: string;
  lastName: string;
  role: Trainer | Betreuer;
}

export interface Team {
  name: string;
  logo: string;
  players: Player[];
  coaches: Coach[];
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatDialogModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.sass',
})
export class TeamsComponent {
  items = [VVHE, RSV];

  numCols = 3;

  constructor(public dialog: MatDialog) {}

  onResize(event: any) {
    // Adjust grid list cols based on window size for responsiveness
    const width = event.target.innerWidth;
    if (width <= 500) {
      this.numCols = 1;
    } else if (width > 500 && width <= 960) {
      this.numCols = 2;
    } else {
      this.numCols = 3;
    }
  }
  openDialog(item: Team): void {
    let dialogRefWidth = '80%'; // Default width
    const width = window.innerWidth; // Get current window width

    if (width <= 600) {
      dialogRefWidth = '90%'; // Take up more space on smaller screens
    } else if (width > 600 && width <= 960) {
      dialogRefWidth = '90%';
    } else {
      dialogRefWidth = '60%';
    }
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: dialogRefWidth,
      data: item, // Pass the clicked item's data
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
