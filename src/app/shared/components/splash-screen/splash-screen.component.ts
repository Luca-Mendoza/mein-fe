import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SplashScreenService } from '@core/services/splash-screen.service';

import { Animations } from '@shared/animations';
import { LucideModule } from '@shared/lucide/lucide.module';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [
    CommonModule,
    LucideModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './splash-screen.component.html',
  animations: [Animations],
})
export class SplashScreenComponent {
  constructor(public _splashScreenService: SplashScreenService) { }
}

