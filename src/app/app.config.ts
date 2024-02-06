import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { LiveTickerComponent } from './live-ticker/live-ticker.component';
import { LocationComponent } from './location/location.component';
import { TeamsComponent } from './teams/teams.component';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    HomeComponent,
    LiveTickerComponent,
    TeamsComponent,
    LocationComponent,
  ],
};
