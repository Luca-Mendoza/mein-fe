import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
