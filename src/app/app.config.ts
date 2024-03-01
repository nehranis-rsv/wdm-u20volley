import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { LiveTickerComponent } from './live-ticker/live-ticker.component';
import { LocationComponent } from './location/location.component';
import { TeamsComponent } from './teams/teams.component';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SamsApiService } from './sams-api.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    HomeComponent,
    LiveTickerComponent,
    TeamsComponent,
    LocationComponent,
    provideAnimationsAsync(),
  ],
};
