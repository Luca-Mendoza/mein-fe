import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { TranslationService } from '@core/services/translation.service';
import { LucideModule } from '@shared/lucide/lucide.module';
import { LanguageSelectorComponent } from '@shared/components/language-selector/language-selector.component';

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
export class VoiceComponent {
  pdfUrl = '';

  constructor(private translationService: TranslationService) {
    this.updatePdfUrl();
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
