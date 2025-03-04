import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataModel } from '@iq-app/models';
import { DataService } from '@iq-app/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<DataModel[]> {
  private readonly dataService = inject(DataService);

  resolve(): Observable<DataModel[]> {
    return this.dataService.getData();
  }
}
