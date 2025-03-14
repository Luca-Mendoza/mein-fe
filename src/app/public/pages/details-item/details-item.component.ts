import { projects_ingles } from './../../../core/data/projects';
import { Component, OnInit } from '@angular/core';
import { LucideModule } from '../../../shared/lucide/lucide.module';
import { MaterialModule } from '../../../shared/material/material.module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumsComponent } from '@shared/components/breadcrums/breadcrums.component';
import { NavigationComponent } from '@shared/components/navigation/navigation.component';
import { experiences, experiences_ingles } from '@core/data/experiences';
import { projects } from '@core/data/projects';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Experience {
  id: string;
  // Add other properties as needed
}

interface Project {
  id: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-details-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, LucideModule, BreadcrumsComponent, NavigationComponent],
  templateUrl: './details-item.component.html',
  styleUrl: './details-item.component.scss'
})
export class DetailsItemComponent implements OnInit {
  experiences = experiences_ingles;
  projects = projects_ingles;
  item: any;
  isExperience: boolean = true;
  currentIndex: number = 0;
  prevLink: any;
  nextLink: any;
  prevLabel: string = '';
  nextLabel: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      // Buscar en experiences
      const foundExperience = this.experiences.find(exp => exp.id === id);
      if (foundExperience) {
        this.item = foundExperience;
        this.isExperience = true;
        this.currentIndex = this.experiences.findIndex(exp => exp.id === id);
        this.setNavigationLinks(this.experiences);
        this.prevLabel = 'Experiencia Anterior';
        this.nextLabel = 'Experiencia Siguiente';
        return;
      }

      // Buscar en projects
      const foundProject = this.projects.find(proj => proj.id === id);
      if (foundProject) {
        this.item = foundProject;
        this.isExperience = false;
        this.currentIndex = this.projects.findIndex(proj => proj.id === id);
        this.setNavigationLinks(this.projects);
        this.prevLabel = 'Proyecto Anterior';
        this.nextLabel = 'Proyecto Siguiente';
        return;
      }

      // Si no se encuentra en ninguno, redirigir a 404
      console.error('Elemento no encontrado con el id:', id);
      this.router.navigate(['/404']);
    });
  }

  setNavigationLinks(collection: any[]) {
    const total = collection.length;
    const prevIndex = this.currentIndex - 1;
    const nextIndex = this.currentIndex + 1;

    // Si existe un elemento previo, asignamos la ruta, de lo contrario dejamos null (o un valor que indique deshabilitado)
    this.prevLink = prevIndex >= 0 ? ['/d', collection[prevIndex].id] : null;

    // Si existe un elemento siguiente, asignamos la ruta
    this.nextLink = nextIndex < total ? ['/d', collection[nextIndex].id] : null;
  }


  copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      this._snackBar.open('¡Enlace copiado al portapapeles!', 'Cerrar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['custom-snackbar']
      });

    }).catch(err => {
      this._snackBar.open('Error al copiar al portapapeles: ' + err, 'Cerrar', { panelClass: ['!bg-cyan-700/50', 'custom-snackbar'] });

    });
  }
}