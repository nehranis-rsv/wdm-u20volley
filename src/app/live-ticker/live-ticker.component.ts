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
}
