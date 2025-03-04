import { Routes } from '@angular/router';

import { IQ_ROUTES } from './constants/routes.constant';
import { DataResolver } from './resolvers/data.resolver';

export const routes: Routes = [
  {
    path: IQ_ROUTES.FORM,
    resolve: {
      data: DataResolver,
    },
    loadChildren: () => import('./pages/form/form.routes').then(m => m.ROUTES),
  },
  {
    path: IQ_ROUTES.EMPTY,
    pathMatch: 'full',
    redirectTo: IQ_ROUTES.FORM,
  },
  {
    path: IQ_ROUTES.WILD_CARD,
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent),
  },
];
