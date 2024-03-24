import { Component, Input } from '@angular/core';
import { Group } from './group.model';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Team } from '../teams/teams.component';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';
import { teamMap } from '../teams/teams.models';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.sass',
})
export class GroupComponent {
  @Input() group!: Group;
  teams = teamMap;

  constructor(public dialog: MatDialog) {}

  openDialog(item?: Team): void {
    let dialogRefWidth = '99%'; // Default width
    const width = window.innerWidth; // Get current window width

    if (width <= 600) {
      dialogRefWidth = '99%'; // Take up more space on smaller screens
    } else if (width > 600 && width <= 960) {
      dialogRefWidth = '80%';
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
