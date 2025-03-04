import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { DataApiService } from '@iq-app/api-services';
import { DataModel } from '@iq-app/models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly dataApiService = inject(DataApiService);

  readonly data: WritableSignal<DataModel[]> = signal([]);

  getData(): Observable<DataModel[]> {
    return this.dataApiService.getData().pipe(
      tap(data => {
        this.data.set(data);
      }),
    );
  }
}
