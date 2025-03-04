import { Routes } from '@angular/router';

import { IQ_ROUTES } from '../../constants/routes.constant';

export const ROUTES: Routes = [
  {
    path: IQ_ROUTES.EMPTY,
    loadComponent: () => import('./form.component').then(m => m.FormComponent),
  },
];
