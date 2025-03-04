import { Injectable } from '@angular/core';
import { DataModel } from '@iq-app/models';
import { map, Observable } from 'rxjs';

import { BaseApiService } from './base.api-service';

@Injectable({
  providedIn: 'root',
})
export class DataApiService extends BaseApiService {
  private readonly path = '';

  getData(): Observable<DataModel[]> {
    return this.httpClient
      .get<DataModel[]>(`${this.apiUrl}${this.path}/data.json`)
      .pipe(map(data => data.map(item => new DataModel(item))));
  }
}
