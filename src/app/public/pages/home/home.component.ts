import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ButtonArrowComponent } from '../../components/button-arrow/button-arrow.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonArrowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Definir el enlace activo
  activeLink: string = 'About';

  // Definir los enlaces de navegación
  navLinks = [
    { text: 'About', href: '#sectionAbout' },
    { text: 'Experience', href: '#sectionExperience' },
    { text: 'Projects', href: '#sectionProjects' },
  ];

  // Método para establecer el enlace activo
  setActiveLink(link: any) {
    this.activeLink = link.text;

    console.log({ activeLink: this.activeLink });
  }

  sectionAbout() {
    const elemento = document.getElementById('sectionAbout');

    console.log({ elemento });

    // if (elemento) {
    //   elemento.scrollIntoView({ behavior: 'smooth' });
    // }

    if (elemento) {
      // (offset) Ajustar la posición del scroll.
      const offset = 80;
      // Calculamos la posición del elemento con respecto a la ventana de visualización.
      // getBoundingClientRect(): Este método devuelve un objeto DOMRect que contiene información sobre el tamaño y la posición de un elemento.
      const elementoPosicion =
        elemento.getBoundingClientRect().top + window.scrollY;
      // Realizamos un desplazamiento suave hacia la posición del elemento, ajustando la posición con el offset.
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: elementoPosicion - offset, behavior: 'smooth' });
      }
    }
  }

  sectionExperience() {
    const elemento = document.getElementById('sectionExperience');

    // if (elemento) {
    //   elemento.scrollIntoView({ behavior: 'smooth' });
    // }

    if (elemento) {
      // (offset) Ajustar la posición del scroll.
      const offset = 80;
      // Calculamos la posición del elemento con respecto a la ventana de visualización.
      // getBoundingClientRect(): Este método devuelve un objeto DOMRect que contiene información sobre el tamaño y la posición de un elemento.
      const elementoPosicion =
        elemento.getBoundingClientRect().top + window.scrollY;
      // Realizamos un desplazamiento suave hacia la posición del elemento, ajustando la posición con el offset.
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: elementoPosicion - offset, behavior: 'smooth' });
      }
    }
  }

  sectionProjects() {
    const elemento = document.getElementById('sectionProjects');

    // if (elemento) {
    //   elemento.scrollIntoView({ behavior: 'smooth' });
    // }

    if (elemento) {
      // (offset) Ajustar la posición del scroll.
      const offset = 80;
      // Calculamos la posición del elemento con respecto a la ventana de visualización.
      // getBoundingClientRect(): Este método devuelve un objeto DOMRect que contiene información sobre el tamaño y la posición de un elemento.
      const elementoPosicion =
        elemento.getBoundingClientRect().top + window.scrollY;
      // Realizamos un desplazamiento suave hacia la posición del elemento, ajustando la posición con el offset.
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: elementoPosicion - offset, behavior: 'smooth' });
      }
    }
  }
}
