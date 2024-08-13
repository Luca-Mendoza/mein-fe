import { isPlatformBrowser, CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ButtonArrowComponent } from '../../components/button-arrow/button-arrow.component';
import { RouterModule } from '@angular/router';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonArrowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  scrollEvent$!: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.scrollEventSubscribe();
  }

  // Definir el enlace activo
  activeLink: string = 'About';
  pdfUrl: any = './../../../../assets/data/Luca-mendoza-Currículum.pdf';

  // Definir los enlaces de navegación
  navLinks = [
    { text: 'About', href: '#sectionAbout', id: 'sectionAbout' },
    { text: 'Experience', href: '#sectionExperience', id: 'sectionExperience' },
    { text: 'Projects', href: '#sectionProjects', id: 'sectionProjects' },
  ];

  private scrollEventSubscribe() {
    this.scrollEvent$ = fromEvent(
      this.scrollContainer.nativeElement,
      'scroll'
    ).pipe(map(() => this.scrollContainer.nativeElement.scrollTop));

    this.scrollEvent$.subscribe((scrollTop: number) => {
      if (scrollTop < 30) {
        this.setActiveLink({
          text: 'About',
          href: '#sectionAbout',
          id: 'sectionAbout',
        });
      }
      if (scrollTop > 200) {
        this.setActiveLink({
          text: 'Experience',
          href: '#sectionExperience',
          id: 'sectionExperience',
        });
      }

      if (scrollTop > 232) {
        this.setActiveLink({
          text: 'Projects',
          href: '#sectionProjects',
          id: 'sectionProjects',
        });
      }
    });
  }

  // Método para establecer el enlace activo
  setActiveLink(link: any) {
    this.activeLink = link.text;
    this.scrollToSection(link.id);
  }

  private scrollToSection(sectionId: string) {
    const elemento = document.getElementById(sectionId);

    if (elemento) {
      // (offset) Ajustar la posición del scroll.
      // Calculamos la posición del elemento con respecto a la ventana de visualización.
      // getBoundingClientRect(): Este método devuelve un objeto DOMRect que contiene información sobre el tamaño y la posición de un elemento.
      const elementoPosicion = window.scrollY;
      // Realizamos un desplazamiento suave hacia la posición del elemento, ajustando la posición con el offset.
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: elementoPosicion, behavior: 'smooth' });
      }
    }
  }
}
