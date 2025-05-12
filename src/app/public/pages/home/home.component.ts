import { isPlatformBrowser, CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { ButtonArrowComponent } from '../../components/button-arrow/button-arrow.component';
import { RouterModule } from '@angular/router';
import { debounceTime, fromEvent, map } from 'rxjs';
import { LucideModule } from '@shared/lucide/lucide.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonArrowComponent, LucideModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;
  private observer: IntersectionObserver | null = null;

  // Definir el enlace activo
  activeLink: string = 'About';
  pdfUrl: any = './../../../../assets/data/luca_d_mendoza.pdf';
  technologies: string[] = [
    // 🏗 Frontend
    "Angular 9 → 19",
    "Angular Material",
    "Tailwind CSS",
    "CSS",
    "SCSS",
    "HTML",
    "JavaScript",
    "TypeScript",
    "RxJS",

    // 🖥 Backend
    "Node.js",
    "NestJS",
    "GraphQL",

    // 🚀 DevOps & Herramientas
    "Docker",
    "CI/CD (GitHub Actions)",
    "Git",
    "GitHub",
    "DBeaver",

    // 📌 Gestión de proyectos
    "ClickUp",
    "Jira",
    "Trello",
    "Scrum",

    // 🛠 Extensiones y otros
    "GitGraph (VS Code)"
  ];


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
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: this.scrollContainer.nativeElement,
      rootMargin: '-10% 0px -70% 0px', // Adjusted margins for better detection
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] // Multiple thresholds for more accurate detection
    };

    this.observer = new IntersectionObserver((entries) => {
      // Sort entries by intersection ratio to find the most visible section
      const visibleEntry = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        const sectionId = visibleEntry.target.id;
        const link = this.navLinks.find(link => link.id === sectionId);
        if (link) {
          this.setActiveLink(link.text);
        }
      }
    }, options);

    // Observe all sections
    this.navLinks.forEach(link => {
      const section = this._document.getElementById(link.id);
      if (section) {
        this.observer?.observe(section);
      }
    });
  }

  // Update scrollToSection to use smooth scrolling with better positioning
  scrollToSection(sectionId: string) {
    const section = this._document.getElementById(sectionId);
    if (section) {
      const container = this.scrollContainer.nativeElement;
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      
      // Calculate the position to scroll to, considering the container's scroll position
      const scrollPosition = sectionRect.top - containerRect.top + container.scrollTop - 40; // Increased offset for better positioning
      
      container.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });

      // Update active link immediately when clicking
      const link = this.navLinks.find(link => link.id === sectionId);
      if (link) {
        this.setActiveLink(link.text);
      }
    }
  }

  // Remove the old scroll event handling methods since we're using Intersection Observer
  private scrollEventSubscribe() {
    // This method can be removed as we're using Intersection Observer
  }

  private updateActiveLink(scrollTop: number) {
    // This method can be removed as we're using Intersection Observer
  }

  // Función para establecer el enlace activo
  private setActiveLink(linkText: string) {
    this.activeLink = linkText;
  }

  openPdf() {

    if (this.pdfUrl) {
      window.open(this.pdfUrl, '_blank');
    }


    else {
      console.error('PDF URL is not provided.');
    }
  }

  ngOnDestroy() {
    // Clean up the observer when component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
