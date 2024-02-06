import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit, OnDestroy {
  countdown: string = '';
  private subscription!: Subscription;

  ngOnInit() {
    const endDate = new Date('2024-04-06T09:00:00'); // Set your specific date here
    this.subscription = interval(1000).subscribe((x) => {
      this.countdown = this.calculateCountdown(endDate);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private calculateCountdown(endDate: Date): string {
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();

    if (diff <= 0) {
      return 'Event has started';
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    return `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;
  }
}
