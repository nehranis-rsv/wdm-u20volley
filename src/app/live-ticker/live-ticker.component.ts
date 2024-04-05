import { Component, HostListener } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { GroupComponent } from '../group/group.component';
import { Group } from '../group/group.model';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TwitchStreamComponent } from '../twitch-stream/twitch-stream.component';

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
    TwitchStreamComponent,
  ],
})
export class LiveTickerComponent {
  currentChannel: string = 'RSVFeld1';
  GROUP_A: Group = {
    groupName: 'A',
    teams: [
      { teamName: 'VV Humann Essen', teamSlag: 'VVHE' },
      { teamName: 'TV Hörde', teamSlag: 'TVH' },
      { teamName: 'SG Aachen', teamSlag: 'SGA' },
      { teamName: 'WVV-Auswahl', teamSlag: 'WVV' },
    ],
  };

  GROUP_B: Group = {
    groupName: 'B',
    teams: [
      { teamName: 'FCJ Köln', teamSlag: 'FCJ' },
      { teamName: 'SG VoR Paderborn/DjK Delbrück', teamSlag: 'VRP' },
      { teamName: 'Rumelner TV', teamSlag: 'RTV' },
      { teamName: 'TSC Gievenbeck', teamSlag: 'TSC' },
    ],
  };

  GROUP_C: Group = {
    groupName: 'C',
    teams: [
      { teamName: 'Rhein-Sieg Volleys', teamSlag: 'RSV' },
      { teamName: 'Dürener TV', teamSlag: 'DTV' },
      { teamName: 'TuB Bocholt', teamSlag: 'TUB' },
      { teamName: 'Meckenheimer SV', teamSlag: 'MSV' },
    ],
  };

  GROUP_D: Group = {
    groupName: 'D',
    teams: [
      { teamName: 'TPSV Bielefeld', teamSlag: 'TPSVB' },
      { teamName: 'Moerser SC', teamSlag: 'MSC' },
      { teamName: 'DJK Rheinkraft Neuss', teamSlag: 'DJKRN' },
      { teamName: 'VfL Telstar Bochum', teamSlag: 'TB' },
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

  onTabChange(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 0:
        this.currentChannel = 'RSVFeld1';
        break;
      case 1:
        this.currentChannel = 'RSVFeld2';
        break;
      case 2:
        this.currentChannel = 'RSVFeld3';
        break;
      case 3:
        this.currentChannel = 'RSVFeld4';
        break;
      default:
        this.currentChannel = 'RSVFeld1'; // Fallback channel
    }
    // You may want to reload the Twitch stream here if needed
  }
}
