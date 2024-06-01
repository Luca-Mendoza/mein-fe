import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';

export default [
  {
    path: '',
    component: PublicComponent,
    children: [{ path: '', component: HomeComponent }],
  },
] as Routes;
