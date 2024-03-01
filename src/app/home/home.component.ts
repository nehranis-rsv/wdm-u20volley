import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { SamsApiService } from '../sams-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit, OnDestroy {
  countdown!:
    | { message: string }
    | { days: Number; hours: Number; minutes: Number; seconds: Number };
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

  private calculateCountdown(
    endDate: Date
  ):
    | { message: string }
    | { days: Number; hours: Number; minutes: Number; seconds: Number } {
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { message: 'Event has started' };
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  isMessage(countdown: any): countdown is { message: string } {
    return (countdown as any).message !== undefined;
  }

  isNumbers(countdown: any): countdown is {
    days: Number;
    hours: Number;
    minutes: Number;
    seconds: Number;
  } {
    return (countdown as any).days !== undefined;
  }
}
