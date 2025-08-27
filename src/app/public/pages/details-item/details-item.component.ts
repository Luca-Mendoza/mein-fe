import { Component, OnInit } from '@angular/core';
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
  imports: [CommonModule, RouterModule, MaterialModule, LucideModule, BreadcrumsComponent, NavigationComponent, TranslatePipe, LanguageSelectorComponent],
  templateUrl: './details-item.component.html',
  styleUrl: './details-item.component.scss'
})
export class DetailsItemComponent implements OnInit {
  item: any;
  isExperience: boolean = true;
  currentIndex: number = 0;
  prevLink: any;
  nextLink: any;
  prevLabel: string = '';
  nextLabel: string = '';
  currentLanguage: Language = 'en';
  breadcrumbLinks: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private _snackBar: MatSnackBar,
    private translationService: TranslationService
  ) { }

  ngOnInit() {
    // Suscribirse al idioma actual
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.loadItemData();
      this.updateBreadcrumbs();
    });

    // Cargar datos iniciales
    this.loadItemData();
    
    // Inicializar breadcrumbs
    this.updateBreadcrumbs();
  }

  private loadItemData() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadItemById(id);
    });
  }

  private loadItemById(id: string) {
    // Cargar datos basados en el idioma actual
    if (id === 'event_loop_club') {
      this.loadEventLoopClubData();
    } else if (id === 'siete_ideas') {
      this.loadSieteIdeasData();
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
      company: 'Event Loop Club',
      title: this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.TITLE'),
      date: '2023 - PRESENT',
      duration: this.translationService.translate('DETAILS.PART_TIME'),
      description: this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.DETAILED_PAGE.ROLE_AND_RESPONSIBILITIES.DESCRIPTION'),
      project_description: this.translationService.translate('HOME.EXPERIENCE_SECTION.EVENT_LOOP_CLUB.DETAILED_PAGE.PROJECT_DESCRIPTION.DESCRIPTION'),
      challenges: challenges,
      learnings: learnings,
      technologies: technologies,
      links: {
        name: 'Event Loop Club',
        link: 'https://eventloop.club/',
        assets: 'assets/imgs/event_loop_club.svg'
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
      company: 'Siete Ideas',
      title: this.translationService.translate('HOME.EXPERIENCE_SECTION.SIETE_IDEAS.TITLE'),
      date: '2022 - PRESENT',
      duration: this.translationService.translate('DETAILS.FULL_TIME'),
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

  private loadPortfolioData() {
    // Obtener datos del TranslationService
    const challenges = this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.CHALLENGES');
    const learnings = this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.LEARNINGS');
    const technologies = this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.TECHNOLOGIES');
    const softSkills = this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.DETAILED_PAGE.SOFT_SKILLS');
    
    this.item = {
      id: 'portfolio',
      company: 'Portfolio Web',
      title: this.translationService.translate('HOME.PROJECTS_SECTION.PORTFOLIO.TITLE'),
      date: '2024',
      duration: 'Personal Project',
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
      company: 'Gamezonia',
      title: this.translationService.translate('HOME.PROJECTS_SECTION.GAMEZONIA.TITLE'),
      date: '2023',
      duration: 'Personal Project',
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
      },
      { 
        label: this.translationService.translate('COMMON.DASHBOARD'), 
        path: '/dashboard', 
        icon: 'grid' 
      }
    ];
  }
}