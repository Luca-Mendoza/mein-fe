import { Component, OnDestroy, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideModule } from '../../../shared/lucide/lucide.module';
import { MaterialModule } from '../../../shared/material/material.module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumsComponent } from '@shared/components/breadcrums/breadcrums.component';
import { NavigationComponent } from '@shared/components/navigation/navigation.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslationService, Language } from '@core/services/translation.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { LanguageSelectorComponent } from '@shared/components/language-selector/language-selector.component';
import { Subscription } from 'rxjs';
import { register } from 'swiper/element/bundle';

register();

interface DetailAction {
  href: string;
  label: string;
  icon: string;
  variant: 'primary' | 'secondary';
}

@Component({
  selector: 'app-details-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, LucideModule, BreadcrumsComponent, NavigationComponent, TranslatePipe, LanguageSelectorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './details-item.component.html',
  styleUrl: './details-item.component.scss'
})
export class DetailsItemComponent implements OnInit, OnDestroy {
  item: any;
  isExperience: boolean = true;
  currentIndex: number = 0;
  prevLink: any;
  nextLink: any;
  prevLabel: string = '';
  nextLabel: string = '';
  currentLanguage: Language = 'en';
  breadcrumbLinks: any[] = [];
  activeImageIndex: number = 0;
  isFullscreen: boolean = false;

  creativeEffectConfig = {
    prev: {
      shadow: true,
      translate: ['-20%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  };

  swiperStyles = [
    `
    :host {
      --swiper-navigation-color: #ffffff;
      --swiper-navigation-size: 40px;
      --swiper-navigation-sides-offset: 8px;
      --swiper-pagination-color: #ffffff;
      --swiper-pagination-bullet-inactive-color: #ffffff;
      --swiper-pagination-bullet-inactive-opacity: 0.3;
      --swiper-pagination-bottom: 12px;
    }

    .swiper-button-prev::after {
      content: '' !important;
      width: 40px;
      height: 40px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFFFFF"><circle cx="6" cy="12" r="1.5"/><circle cx="10" cy="8" r="1.5"/><circle cx="10" cy="16" r="1.5"/><circle cx="14" cy="4" r="1.5"/><circle cx="14" cy="12" r="1.5"/><circle cx="14" cy="20" r="1.5"/><circle cx="18" cy="8" r="1.5"/><circle cx="18" cy="16" r="1.5"/></svg>') !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      background-size: contain !important;
    }

    .swiper-button-next::after {
      content: '' !important;
      width: 40px;
      height: 40px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFFFFF"><circle cx="18" cy="12" r="1.5"/><circle cx="14" cy="8" r="1.5"/><circle cx="14" cy="16" r="1.5"/><circle cx="10" cy="4" r="1.5"/><circle cx="10" cy="12" r="1.5"/><circle cx="10" cy="20" r="1.5"/><circle cx="6" cy="8" r="1.5"/><circle cx="6" cy="16" r="1.5"/></svg>') !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      background-size: contain !important;
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      transform: scale(1.1);
    }

    .swiper-pagination-bullet-active {
      background: #ffffff !important;
      opacity: 1 !important;
    }
    `
  ];
  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private _snackBar: MatSnackBar,
    private translationService: TranslationService
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe(params => {
      this.loadItemById(params['id']);
    }));

    this.subscriptions.add(this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      const id = this.item?.id || this.route.snapshot.paramMap.get('id');
      if (id) {
        this.loadItemById(id);
      }
      this.updateBreadcrumbs();
    }));
    
    this.updateBreadcrumbs();
  }

  get displayImages(): string[] {
    return this.item?.images || [];
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private loadItemById(id: string) {
    this.activeImageIndex = 0;
    // Cargar datos basados en el idioma actual
    if (id === 'event_loop_club') {
      this.loadEventLoopClubData();
    } else if (id === 'siete_ideas') {
      this.loadSieteIdeasData();
    } else if (id === 'xtech') {
      this.loadXtechData();
    } else if (id === 'portfolio') {
      this.loadPortfolioData();
    } else if (id === 'gamezonia') {
      this.loadGamezoniaData();
    } else {
      console.error('Element not found with id:', id);
      this.router.navigate(['/404']);
    }
  }

  private loadEventLoopClubData() {
    // Obtener datos del TranslationService
    const challenges = this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.DETAILED_PAGE.CHALLENGES');
    const learnings = this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.DETAILED_PAGE.LEARNINGS');
    const technologies = this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.DETAILED_PAGE.TECHNOLOGIES');
    
    this.item = {
      id: 'event_loop_club',
      type: this.detailCopy('Experience', 'Experiencia'),
      company: 'Event Loop',
      title: this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.TITLE'),
      date: '2023 - PRESENT',
      duration: this.translationService.translate('DETAILS.PART_TIME'),
      summary: this.detailCopy(
        'Angular ticketing platform for event producers, focused on reusable UI, SSR, dashboard workflows and production-ready frontend delivery.',
        'Plataforma Angular de ticketing para productores de eventos, enfocada en UI reutilizable, SSR, flujos de dashboard y entrega frontend lista para producción.'
      ),
      focus: [
        this.detailCopy('Frontend architecture', 'Arquitectura frontend'),
        'SSR',
        this.detailCopy('Reusable components', 'Componentes reutilizables'),
        this.detailCopy('Team collaboration', 'Colaboración de equipo')
      ],
      highlights: [
        this.detailCopy('Led Angular frontend delivery and component structure.', 'Lideré el desarrollo frontend Angular y la estructura de componentes.'),
        this.detailCopy('Improved producer workflows for event publishing and management.', 'Mejoré flujos para publicación y gestión de eventos.'),
        this.detailCopy('Collaborated closely with design and backend teams.', 'Colaboré de cerca con diseño y backend.')
      ],
      description: this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.DETAILED_PAGE.ROLE_AND_RESPONSIBILITIES.DESCRIPTION'),
      project_description: this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.DETAILED_PAGE.PROJECT_DESCRIPTION.DESCRIPTION'),
      challenges: challenges,
      learnings: learnings,
      technologies: technologies,
      images: this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.DETAILED_PAGE.IMAGES'),
      links: {
        name: 'Eventloop.ar',
        link: 'https://eventloop.ar/',
        assets: 'assets/imgs/eventloop_logo.webp'
      }
    };
    this.isExperience = true;
    this.currentIndex = 0;
    this.setNavigationLinks(['event_loop_club', 'siete_ideas']);
    this.prevLabel = this.translationService.translate('DETAILS.PREVIOUS_EXPERIENCE');
    this.nextLabel = this.translationService.translate('DETAILS.NEXT_EXPERIENCE');
  }

  private loadSieteIdeasData() {
    // Obtener datos del TranslationService
    const challenges = this.translationService.translate('HOME.EXPERIENCE_SECTION.SIETE_IDEAS.DETAILED_PAGE.CHALLENGES');
    const learnings = this.translationService.translate('HOME.EXPERIENCE_SECTION.SIETE_IDEAS.DETAILED_PAGE.LEARNINGS');
    const technologies = this.translationService.translate('HOME.EXPERIENCE_SECTION.SIETE_IDEAS.DETAILED_PAGE.TECHNOLOGIES');
    
    this.item = {
      id: 'siete_ideas',
      type: this.detailCopy('Experience', 'Experiencia'),
      company: 'Siete Ideas',
      title: this.translationService.translate('HOME.EXPERIENCE_SECTION.SIETE_IDEAS.TITLE'),
      date: '2022 - 2026',
      duration: this.translationService.translate('DETAILS.FULL_TIME'),
      summary: this.detailCopy(
        'Production Angular work focused on migrations, maintainability, reusable UI and reliable REST integrations in business applications.',
        'Trabajo Angular en producción enfocado en migraciones, mantenibilidad, UI reutilizable e integraciones REST confiables en aplicaciones de negocio.'
      ),
      focus: [
        this.detailCopy('Angular migrations', 'Migraciones Angular'),
        this.detailCopy('Reusable UI', 'UI reutilizable'),
        this.detailCopy('REST integration', 'Integración REST'),
        this.detailCopy('Performance', 'Performance')
      ],
      highlights: [
        this.detailCopy('Modernized Angular/Fuse codebases across major version upgrades.', 'Modernicé bases Angular/Fuse en migraciones importantes de versión.'),
        this.detailCopy('Built and maintained responsive production features.', 'Construí y mantuve funcionalidades responsivas en producción.'),
        this.detailCopy('Strengthened testing, performance and delivery practices.', 'Fortalecí prácticas de testing, performance y entrega.')
      ],
      description: this.translationService.translate('HOME.EXPERIENCE_SECTION.SIETE_IDEAS.DETAILED_PAGE.ROLE_AND_RESPONSIBILITIES.DESCRIPTION'),
      project_description: this.translationService.translate('HOME.EXPERIENCE_SECTION.SIETE_IDEAS.DETAILED_PAGE.PROJECT_DESCRIPTION.DESCRIPTION'),
      challenges: challenges,
      learnings: learnings,
      technologies: technologies,
      links: {
        name: 'Siete Ideas',
        link: 'https://www.sieteideas.com.ar/',
        assets: 'assets/imgs/7ideas_logo_dark.svg'
      }
    };
    this.isExperience = true;
    this.currentIndex = 1;
    this.setNavigationLinks(['event_loop_club', 'siete_ideas']);
    this.prevLabel = this.translationService.translate('DETAILS.PREVIOUS_EXPERIENCE');
    this.nextLabel = this.translationService.translate('DETAILS.NEXT_EXPERIENCE');
  }

  private loadXtechData() {
    const challenges = this.translationService.translate('HOME.EXPERIENCE_SECTION.XTECH.DETAILED_PAGE.CHALLENGES');
    const learnings = this.translationService.translate('HOME.EXPERIENCE_SECTION.XTECH.DETAILED_PAGE.LEARNINGS');
    const technologies = this.translationService.translate('HOME.EXPERIENCE_SECTION.XTECH.DETAILED_PAGE.TECHNOLOGIES');

    this.item = {
      id: 'xtech',
      type: this.detailCopy('Experience', 'Experiencia'),
      company: 'XTECHARG',
      title: this.translationService.translate('HOME.EXPERIENCE_SECTION.XTECH.TITLE'),
      date: '2024 - PRESENT',
      duration: this.translationService.translate('DETAILS.FULL_TIME'),
      summary: this.detailCopy(
        'B2B SaaS platform built from scratch as co-founder and technical lead, covering Angular architecture, NestJS APIs, payments, security and deployment.',
        'Plataforma SaaS B2B construida desde cero como cofundador y líder técnico, cubriendo arquitectura Angular, APIs NestJS, pagos, seguridad y despliegue.'
      ),
      focus: [
        this.detailCopy('Technical leadership', 'Liderazgo técnico'),
        this.detailCopy('Angular architecture', 'Arquitectura Angular'),
        'NestJS',
        this.detailCopy('Payments and security', 'Pagos y seguridad')
      ],
      highlights: [
        this.detailCopy('Designed the full-stack architecture from zero.', 'Diseñé la arquitectura full-stack desde cero.'),
        this.detailCopy('Implemented modular APIs, RBAC, auth flows and payment providers.', 'Implementé APIs modulares, RBAC, autenticación y proveedores de pago.'),
        this.detailCopy('Led code reviews, roadmap decisions and production delivery.', 'Lideré code reviews, decisiones de roadmap y entregas a producción.')
      ],
      description: this.translationService.translate('HOME.EXPERIENCE_SECTION.XTECH.DETAILED_PAGE.ROLE_AND_RESPONSIBILITIES.DESCRIPTION'),
      project_description: this.translationService.translate('HOME.EXPERIENCE_SECTION.XTECH.DETAILED_PAGE.PROJECT_DESCRIPTION.DESCRIPTION'),
      challenges: challenges,
      learnings: learnings,
      technologies: technologies,
      links: {
        name: 'xtech.com.ar',
        link: 'https://xtech.com.ar/',
        assets: 'assets/imgs/xtecharg.jpeg'
      }
    };
    this.isExperience = true;
    this.currentIndex = 2;
    this.setNavigationLinks(['event_loop_club', 'siete_ideas', 'xtech']);
    this.prevLabel = this.translationService.translate('DETAILS.PREVIOUS_EXPERIENCE');
    this.nextLabel = this.translationService.translate('DETAILS.NEXT_EXPERIENCE');
  }

  private loadPortfolioData() {
    // Obtener datos del TranslationService
    const challenges = this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.CHALLENGES');
    const learnings = this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.LEARNINGS');
    const technologies = this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.TECHNOLOGIES');
    const softSkills = this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.SOFT_SKILLS');
    
    this.item = {
      id: 'portfolio',
      type: this.detailCopy('Project', 'Proyecto'),
      company: 'Portfolio Web',
      title: this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.TITLE'),
      date: '2024',
      duration: 'Personal Project',
      summary: this.detailCopy(
        'Personal portfolio built as a professional product surface: bilingual content, Angular SSR, case-study pages, SEO and responsive UI.',
        'Portfolio personal construido como superficie profesional: contenido bilingue, Angular SSR, paginas de caso, SEO y UI responsiva.'
      ),
      focus: [
        'Angular SSR',
        'SEO',
        this.detailCopy('Bilingual UX', 'UX bilingue'),
        this.detailCopy('Responsive UI', 'UI responsiva')
      ],
      highlights: [
        this.detailCopy('Centralized professional experience into readable case studies.', 'Centralicé la experiencia profesional en casos de estudio legibles.'),
        this.detailCopy('Optimized metadata, social previews and GitHub Pages deployment.', 'Optimicé metadata, previews sociales y deploy en GitHub Pages.'),
        this.detailCopy('Built a focused interface for recruiters and technical reviewers.', 'Construí una interfaz enfocada en recruiters y revisores técnicos.')
      ],
      description: this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.ROLE_AND_RESPONSIBILITIES.DESCRIPTION'),
      project_description: this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.PROJECT_DESCRIPTION.DESCRIPTION'),
      challenges: challenges,
      learnings: learnings,
      soft_skills: softSkills,
      technologies: technologies,
      links: {
        name: 'Portfolio',
        link: 'https://lucadmendoza.dev/',
        assets: 'assets/imgs/porfolio_web.png',
        github: ''
      }
    };
    this.isExperience = false;
    this.currentIndex = 0;
    this.setNavigationLinks(['portfolio', 'gamezonia']);
    this.prevLabel = this.translationService.translate('DETAILS.PREVIOUS_PROJECT');
    this.nextLabel = this.translationService.translate('DETAILS.NEXT_PROJECT');
  }

  private loadGamezoniaData() {
    // Obtener datos del TranslationService
    const challenges = this.translationService.translate('HOME.PROJECTS_SECTION.GAMEZONIA.DETAILED_PAGE.CHALLENGES');
    const learnings = this.translationService.translate('HOME.PROJECTS_SECTION.GAMEZONIA.DETAILED_PAGE.LEARNINGS');
    const technologies = this.translationService.translate('HOME.PROJECTS_SECTION.GAMEZONIA.DETAILED_PAGE.TECHNOLOGIES');
    
    this.item = {
      id: 'gamezonia',
      type: this.detailCopy('Project', 'Proyecto'),
      company: 'Gamezonia',
      title: this.translationService.translate('HOME.PROJECTS_SECTION.GAMEZONIA.TITLE'),
      date: '2023',
      duration: 'Personal Project',
      summary: this.detailCopy(
        'MEAN+GraphQL e-commerce project with admin workflows, authentication, payments, email notifications and cloud deployment.',
        'Proyecto ecommerce MEAN+GraphQL con panel administrativo, autenticación, pagos, notificaciones por email y despliegue cloud.'
      ),
      focus: [
        'Angular',
        'GraphQL',
        this.detailCopy('E-commerce', 'Ecommerce'),
        this.detailCopy('Cloud deployment', 'Deploy cloud')
      ],
      highlights: [
        this.detailCopy('Built the storefront and admin panel flows.', 'Construí flujos de tienda y panel administrativo.'),
        this.detailCopy('Integrated JWT authentication, Stripe and Nodemailer.', 'Integré autenticación JWT, Stripe y Nodemailer.'),
        this.detailCopy('Deployed frontend, backend and database on cloud platforms.', 'Desplegué frontend, backend y base de datos en plataformas cloud.')
      ],
      description: this.translationService.translate('HOME.PROJECTS_SECTION.GAMEZONIA.DETAILED_PAGE.ROLE_AND_RESPONSIBILITIES.DESCRIPTION'),
      project_description: this.translationService.translate('HOME.PROJECTS_SECTION.GAMEZONIA.DETAILED_PAGE.PROJECT_DESCRIPTION.DESCRIPTION'),
      challenges: challenges,
      learnings: learnings,
      technologies: technologies,
      links: {
        name: 'Gamezonia',
        link: 'https://luca-mendoza.github.io/Frontend-meang-online-shop/#/',
        assets: 'assets/imgs/gamezonia.png',
        github_frontend: 'https://github.com/Luca-Mendoza/Frontend-meang-online-shop',
        github_backend: 'https://github.com/Luca-Mendoza/Backend-meang-online-shop'
      }
    };
    this.isExperience = false;
    this.currentIndex = 1;
    this.setNavigationLinks(['portfolio', 'gamezonia']);
    this.prevLabel = this.translationService.translate('DETAILS.PREVIOUS_PROJECT');
    this.nextLabel = this.translationService.translate('DETAILS.NEXT_PROJECT');
  }

  setNavigationLinks(collection: string[]) {
    const total = collection.length;
    const prevIndex = this.currentIndex - 1;
    const nextIndex = this.currentIndex + 1;

    // Si existe un elemento previo, asignamos la ruta, de lo contrario dejamos null
    this.prevLink = prevIndex >= 0 ? ['/d', collection[prevIndex]] : null;

    // Si existe un elemento siguiente, asignamos la ruta
    this.nextLink = nextIndex < total ? ['/d', collection[nextIndex]] : null;
  }


  copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      this._snackBar.open(this.translationService.translate('DETAILS.COPY_URL'), 'Cerrar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['custom-snackbar']
      });

    }).catch(err => {
      this._snackBar.open('Error copying to clipboard: ' + err, 'Cerrar', { panelClass: ['!bg-cyan-700/50', 'custom-snackbar'] });

    });
  }

  private updateBreadcrumbs() {
    this.breadcrumbLinks = [
      { 
        label: this.translationService.translate('COMMON.HOME'), 
        path: '', 
        icon: 'arrow-left' 
      }
    ];
  }

  getVisibleLinks(): DetailAction[] {
    if (!this.item?.links) {
      return [];
    }

    const links = this.item.links;
    const actions: DetailAction[] = [];

    if (links.link) {
      actions.push({
        href: links.link,
        label: `${this.translationService.translate('COMMON.GO_TO')} ${links.name}`,
        icon: 'external-link',
        variant: 'primary'
      });
    }

    if (links.github) {
      actions.push({
        href: links.github,
        label: this.translationService.translate('COMMON.GO_TO_GITHUB'),
        icon: 'github',
        variant: 'secondary'
      });
    }

    if (links.github_frontend) {
      actions.push({
        href: links.github_frontend,
        label: this.translationService.translate('COMMON.GO_TO_GITHUB_FRONTEND'),
        icon: 'github',
        variant: 'secondary'
      });
    }

    if (links.github_backend) {
      actions.push({
        href: links.github_backend,
        label: this.translationService.translate('COMMON.GO_TO_GITHUB_BACKEND'),
        icon: 'github',
        variant: 'secondary'
      });
    }

    return actions;
  }

  parseBulletPoints(text: string | undefined): string[] {
    if (!text) return [];
    if (text.includes('•')) {
      return text
        .split('•')
        .map(item => item.trim())
        .filter(item => item.length > 0);
    }
    return [text];
  }

  trackByText(index: number, value: string): string {
    return value || `${index}`;
  }

  trackByChallenge(index: number, challenge: { title: string }): string {
    return challenge?.title || `${index}`;
  }

  prevImage() {
    if (!this.item?.images?.length) return;
    this.activeImageIndex = (this.activeImageIndex - 1 + this.item.images.length) % this.item.images.length;
  }

  nextImage() {
    if (!this.item?.images?.length) return;
    this.activeImageIndex = (this.activeImageIndex + 1) % this.item.images.length;
  }

  selectImage(index: number) {
    if (!this.item?.images?.length) return;
    if (index >= 0 && index < this.item.images.length) {
      this.activeImageIndex = index;
    }
  }

  openFullscreen() {
    this.isFullscreen = true;
  }

  closeFullscreen() {
    this.isFullscreen = false;
  }

  private detailCopy(en: string, es: string): string {
    return this.currentLanguage === 'es' ? es : en;
  }
}
