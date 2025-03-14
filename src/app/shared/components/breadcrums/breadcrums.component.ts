import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Animations } from '@shared/animations';
import { LucideModule } from '@shared/lucide/lucide.module';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  standalone: true,
  imports: [CommonModule, MaterialModule, LucideModule, RouterModule],
  animations: [Animations],
})
export class BreadcrumsComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() breadcrumbLinks: { label: string; path: string; icon?: string }[] = [];

  constructor() { }
}
