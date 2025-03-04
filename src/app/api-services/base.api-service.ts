import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  protected readonly httpClient = inject(HttpClient);
  protected readonly apiUrl: string = '';
}
