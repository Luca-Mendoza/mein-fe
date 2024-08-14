import { isPlatformBrowser, CommonModule, DOCUMENT } from '@angular/common';
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
import { debounceTime, fromEvent, map } from 'rxjs';

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

  // Definir el enlace activo
  activeLink: string = 'About';
  pdfUrl: any = './../../../../assets/data/Luca-mendoza-Currículum.pdf';

  // Definir los enlaces de navegación
  navLinks = [
    { text: 'About', href: '#sectionAbout', id: 'sectionAbout' },
    { text: 'Experience', href: '#sectionExperience', id: 'sectionExperience' },
    { text: 'Projects', href: '#sectionProjects', id: 'sectionProjects' },
  ];

  constructor(
    @Inject(DOCUMENT) private _document: any,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.scrollEventSubscribe();
  }

  // Desplazamiento suave al hacer clic en un enlace de navegación
  scrollToSection(sectionId: string) {
    const offset = 80; // Ajusta este valor si es necesario
    const elemento = this._document.getElementById(sectionId);

    if (elemento) {
      // Obtener la posición relativa del elemento respecto al contenedor de scroll
      const containerRect =
        this.scrollContainer.nativeElement.getBoundingClientRect();
      const elementoRect = elemento.getBoundingClientRect();

      // Calcular la posición para el desplazamiento teniendo en cuenta el offset
      const elementoPosicion =
        elementoRect.top -
        containerRect.top +
        this.scrollContainer.nativeElement.scrollTop -
        offset;

      // Realizar el desplazamiento suave
      this.scrollContainer.nativeElement.scrollTo({
        top: elementoPosicion,
        behavior: 'smooth',
      });

      this.setActiveLink(
        this.navLinks.find((link) => link.id === sectionId)!.text
      );
    }
  }

  // Actualizar el enlace activo según el scroll
  private setupScrollEvent() {
    fromEvent(this.scrollContainer.nativeElement, 'scroll')
      .pipe(map(() => this.scrollContainer.nativeElement.scrollTop))
      .subscribe((scrollTop) => {
        this.updateActiveLink(scrollTop);
      });
  }

  private updateActiveLink(scrollTop: number) {
    // const sections = this.navLinks.map((link) =>
    //   this._document.getElementById(link.id)
    // );
    // if (sections.length) {
    //   const sectionPositions = sections.map((section) =>
    //     section
    //       ? section.getBoundingClientRect().top +
    //         this.scrollContainer.nativeElement.scrollTop
    //       : 0
    //   );
    //   const offset = 0; // Ajustar según sea necesario
    //   // Actualizar el enlace activo basado en la posición del scroll
    //   const currentIndex = sectionPositions.findIndex(
    //     (position, index) =>
    //       scrollTop >= position &&
    //       (index === sectionPositions.length - 1 ||
    //         scrollTop < sectionPositions[index + 1])
    //   );
    //   if (currentIndex !== -1) {
    //     this.setActiveLink(this.navLinks[currentIndex].text);
    //   }
    // }
  }

  // Función para establecer el enlace activo
  private setActiveLink(linkText: string) {
    this.activeLink = linkText;
  }

  private scrollEventSubscribe() {
    this.scrollEvent$ = fromEvent(
      this.scrollContainer.nativeElement,
      'scroll'
    ).pipe(
      map(() => this.scrollContainer.nativeElement.scrollTop),
      debounceTime(0) // Ajusta el tiempo según tus necesidades
    );

    let previousLink: string | null = null;

    this.scrollEvent$.subscribe((scrollTop: number) => {
      const container = this.scrollContainer.nativeElement;
      const containerHeight = container.clientHeight;
      const contentHeight = container.scrollHeight;

      let newLink: string | null = null;

      // Comprobar si se ha llegado al final del contenedor
      if (scrollTop + containerHeight >= contentHeight) {
        newLink = 'Projects';
      } else if (scrollTop < 30) {
        newLink = 'About';
      } else if (scrollTop > 291) {
        newLink = 'Projects';
      } else if (scrollTop > 200) {
        newLink = 'Experience';
      }

      // Solo actualiza el enlace activo si ha cambiado
      if (newLink && newLink !== previousLink) {
        this.setActiveLink(newLink);
        previousLink = newLink;
      }
    });
  }
}
