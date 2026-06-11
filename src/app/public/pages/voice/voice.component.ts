import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { TranslationService } from '@core/services/translation.service';
import { LucideModule } from '@shared/lucide/lucide.module';
import { LanguageSelectorComponent } from '@shared/components/language-selector/language-selector.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-voice',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslatePipe,
    LucideModule,
    LanguageSelectorComponent,
  ],
  templateUrl: './voice.component.html',
  styleUrl: './voice.component.scss',
})
export class VoiceComponent implements OnInit {
  pdfUrl = '';

  constructor(
    private translationService: TranslationService,
    private meta: Meta,
    private titleService: Title
  ) {
    this.updatePdfUrl();
  }

  ngOnInit(): void {
    const title = 'Voice Introduction — Luca D. Mendoza';
    const description =
      'A short introduction from Luca D. Mendoza, Senior Front-End Engineer and Angular specialist.';

    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: 'https://lucadmendoza.dev/voice' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  private updatePdfUrl(): void {
    const lang = this.translationService.getCurrentLanguage();
    this.pdfUrl =
      lang === 'es'
        ? './../../../../assets/data/luca_d_mendoza_es.pdf'
        : './../../../../assets/data/luca_d_mendoza_us.pdf';
  }

  openPdf(): void {
    if (this.pdfUrl) window.open(this.pdfUrl, '_blank');
  }
}
