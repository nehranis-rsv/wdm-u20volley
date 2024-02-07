import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.sass',
})
export class GreetingsComponent {}
