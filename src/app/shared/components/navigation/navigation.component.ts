import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Animations } from '@shared/animations';
import { LucideModule } from '@shared/lucide/lucide.module';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MaterialModule, LucideModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [Animations],
})
export class NavigationComponent {
  @Input() prevLabel: string = 'Proyecto Anterior';
  @Input() nextLabel: string = 'Proyecto Siguiente';
  // Usamos "any" para poder recibir rutas en formato array (para routerLink) o string
  @Input() prevLink: any = '#';
  @Input() nextLink: any = '#';
}
