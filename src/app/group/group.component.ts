import { Component, Input } from '@angular/core';
import { Group } from './group.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.sass',
})
export class GroupComponent {
  @Input() group!: Group;
}
