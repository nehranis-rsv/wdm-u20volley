import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  MediaObserver,
  MediaChange,
  FlexLayoutModule,
} from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
})
export class NavigationComponent implements OnInit, OnDestroy {
  isLargeScreen: boolean = true;
  breakPointSub!: Subscription;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakPointSub = this.breakpointObserver
      .observe(['(max-width: 650px)'])
      .subscribe((result) => {
        this.isLargeScreen = !result.matches;
      });
  }

  ngOnDestroy(): void {
    this.breakPointSub.unsubscribe();
  }
}
