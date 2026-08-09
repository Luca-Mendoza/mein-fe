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
import { Subscription } from 'rxjs';
import { LucideModule } from '@shared/lucide/lucide.module';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { LanguageSelectorComponent } from '@shared/components/language-selector/language-selector.component';
import { TranslationService } from '@core/services/translation.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonArrowComponent, LucideModule, TranslatePipe, LanguageSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;
  private observer: IntersectionObserver | null = null;
  private languageSubscription?: Subscription;

  // Definir el enlace activo
  activeLink: string = 'About';
  currentYear = new Date().getFullYear();
  pdfUrl: string = '';
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

  // Definir los enlaces de navegación (About apunta a la sección Intro / Quick introduction)
  navLinks = [
    { text: 'About', href: '#sectionIntro', id: 'sectionIntro' },
    { text: 'Experience', href: '#sectionExperience', id: 'sectionExperience' },
    { text: 'Projects', href: '#sectionProjects', id: 'sectionProjects' },
  ];

  constructor(
    @Inject(DOCUMENT) private _document: any,
    @Inject(PLATFORM_ID) private platformId: Object,
    private elRef: ElementRef,
    private translationService: TranslationService,
    private meta: Meta,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.setSeoMetadata();

    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
      this.updatePdfUrl();
      
      // Suscribirse a cambios de idioma para actualizar la URL del PDF
      this.languageSubscription = this.translationService.currentLanguage$.subscribe(() => {
        this.updatePdfUrl();
      });
    }
  }

  private setSeoMetadata(): void {
    const title = 'Luca D. Mendoza — Senior Front-End Engineer';
    const description =
      'Senior Front-End Engineer specialized in Angular, TypeScript, RxJS, NgRx and NestJS. Explore experience, projects and contact information.';

    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: 'https://lucadmendoza.dev/' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
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

  emailCopied = false;

  copyEmailToClipboard(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const email = 'mendoza.d.luca@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        this.showCopyToast();
      }).catch(() => {
        this.fallbackCopy(email);
      });
    } else {
      this.fallbackCopy(email);
    }
  }

  private showCopyToast(): void {
    this.emailCopied = true;
    setTimeout(() => {
      this.emailCopied = false;
    }, 2500);
  }

  private fallbackCopy(text: string): void {
    const textArea = this._document.createElement('textarea');
    textArea.value = text;
    this._document.body.appendChild(textArea);
    textArea.select();
    try {
      this._document.execCommand('copy');
      this.showCopyToast();
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    this._document.body.removeChild(textArea);
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
    
    // Clean up the language subscription
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updatePdfUrl(): void {
    const currentLanguage = this.translationService.getCurrentLanguage();
    if (currentLanguage === 'es') {
      this.pdfUrl = './../../../../assets/data/luca_d_mendoza_es.pdf';
    } else {
      this.pdfUrl = './../../../../assets/data/luca_d_mendoza_us.pdf';
    }
  }
}
