import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { LiveTickerComponent } from './live-ticker/live-ticker.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { inject } from '@angular/core';

const redirectToDeepLink: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const target = route.queryParams['target'];
  if (target) {
    const UrlTree = inject(Router).createUrlTree(['/' + target]);
    return UrlTree;
  }
  return true;
};

export const routes: Routes = [
  {
    path: '',
    canActivate: [redirectToDeepLink],
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'live-ticker', component: LiveTickerComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'grußworte', component: GreetingsComponent },
];
