import { Component, HostListener } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { GroupComponent } from '../group/group.component';
import { Group } from '../group/group.model';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-live-ticker',
  standalone: true,
  templateUrl: './live-ticker.component.html',
  styleUrl: './live-ticker.component.sass',
  imports: [
    MatTabsModule,
    GroupComponent,
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class LiveTickerComponent {
  GROUP_A: Group = {
    groupName: 'A',
    teams: ['VV Humann Essen', 'TV Hörde', 'SG Aachen', 'WVV-Auswahl'],
  };

  GROUP_B: Group = {
    groupName: 'B',
    teams: [
      'FCJ Köln',
      'SG VoR Paderborn/DjK Delbrück',
      'Rumelner TV',
      'TSC Gievenbeck',
    ],
  };

  GROUP_C: Group = {
    groupName: 'C',
    teams: [
      'Rhein-Sieg Volleys',
      'Dürener TV',
      'TuB Bocholt',
      'Meckenheimer SV',
    ],
  };

  GROUP_D: Group = {
    groupName: 'D',
    teams: [
      'TPSV Bielefeld',
      'Moerser SC',
      'DJK Rheinkraft Neuss',
      'VfL Telstar Bochum',
    ],
  };

  images = [
    {
      src: '/assets/spielplan_tag1.jpg',
      alt: 'Spielplan Tag 1',
      title: 'Spielplan Tag 1',
    },
    {
      src: '/assets/spielplan_tag2.jpg',
      alt: 'Spielplan Tag 2',
      title: 'Spielplan Tag 2',
    },
    {
      src: '/assets/spielplan_blanko.jpg',
      alt: 'Spielplan Blanko',
      title: 'Spielplan Blanko',
    },
  ];

  gridColumns = 3;
  selectedImage: string | null = null;

  openImage(src: string) {
    if (this.selectedImage === src) {
      // If the same image is clicked, hide the large view
      this.selectedImage = null;
    } else {
      // Show the clicked image
      this.selectedImage = src;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.selectedImage = null;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 600) {
      this.gridColumns = 2; // Adjust for small screens
    } else {
      this.gridColumns = 3; // Default
    }
  }
}
