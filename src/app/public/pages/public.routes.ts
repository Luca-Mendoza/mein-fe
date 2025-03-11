import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';

export default [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',

        loadComponent: () =>
          import(
            './home/home.component'
          ).then((m) => m.HomeComponent),
      },
      {
        path: 'details',
        loadComponent: () =>
          import(
            './details-item/details-item.component'
          ).then((m) => m.DetailsItemComponent),
      },
    ],
  },


] as Routes;
