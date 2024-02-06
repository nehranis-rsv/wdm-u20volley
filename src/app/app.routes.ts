import { Routes } from '@angular/router';
import { LiveTickerComponent } from './live-ticker/live-ticker.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { GreetingsComponent } from './greetings/greetings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'live-ticker', component: LiveTickerComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'grußworte', component: GreetingsComponent },
];
