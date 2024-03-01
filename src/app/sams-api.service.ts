import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cacheable } from 'ts-cacheable';
import { Observable } from 'rxjs';
import { Match } from './gameplan.interface';

@Injectable({
  providedIn: 'root',
})
export class SamsApiService {
  constructor(private http: HttpClient) {}

  matchDataUrl =
    'https://wvv.sams-server.de/xml/matches.xhtml?apiKey=7918ffc8-933c-46fb-b684-e26773f46370&matchSeriesId=52773225';

  @Cacheable({
    maxAge: 1000,
  })
  getMatchData(): Observable<Match[]> {
    const headers = new HttpHeaders().set('Accept', 'application/xml');
    return this.http.get<Match[]>(this.matchDataUrl, { headers });
  }
}
