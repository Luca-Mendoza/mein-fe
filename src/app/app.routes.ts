import { Routes } from '@angular/router';
import { PublicComponent } from './public/pages/public.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./../app/public/pages/public.routes'),
      },
    ],
  },
];
