import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SetDanceOverview } from './models/set-dance-overview.model';
import { SetDance } from './models/set-dance.model';

/**
 * Service in charge of fetching Dances data.
 */
@Injectable()
export class DancesService {

  private source = './assets/data/set-dances';

  constructor (private http: HttpClient) {}

  /**
   * Fetches dances list.
   */
  getDancesList(): Observable<SetDanceOverview[]> {
    return this.http.get<SetDanceOverview[]>(`${this.source}/index.json`);
  }

  /**
   * Fetches a single dance with its details
   * @param danceId Unique identifier of the dance.
   */
  getDance(danceId: string): Observable<SetDance> {
    return this.http.get<SetDance>(`${this.source}/${danceId}.json`);
  }
}
