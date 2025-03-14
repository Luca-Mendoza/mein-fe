import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';

export default [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'd/:id',
        loadComponent: () =>
          import('./details-item/details-item.component').then(
            (m) => m.DetailsItemComponent
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  // Ruta para manejar cualquier ruta no encontrada (404)
  {
    path: '**',
    loadComponent: () =>
      import('./error-404/error-404.component').then(
        (m) => m.Error404Component
      ),
  },
] as Routes;
