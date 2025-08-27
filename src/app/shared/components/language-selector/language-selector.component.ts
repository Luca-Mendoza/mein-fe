import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '@core/services/translation.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-selector">
      <button
        (click)="toggleLanguage()"
        class="language-btn"
        [attr.aria-label]="'Switch to ' + (currentLanguage === 'en' ? 'Spanish' : 'English')"
        title="Cambiar idioma / Change language"
      >
        <span class="language-flag">
          {{ currentLanguage === 'en' ? '🇪🇸' : '🇺🇸' }}
        </span>
        <span class="language-code">
          {{ currentLanguage === 'en' ? 'ES' : 'EN' }}
        </span>
      </button>
    </div>
  `,
  styles: [`
    .language-selector {
      display: flex;
      align-items: center;
    }

    .language-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 13px;
      backdrop-filter: blur(15px);
      min-width: 65px;
      justify-content: center;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    }

    .language-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    }

    .language-btn:active {
      transform: translateY(0);
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.25);
    }

    .language-flag {
      font-size: 14px;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    }

    .language-code {
      font-weight: 600;
      letter-spacing: 0.5px;
      font-size: 12px;
      text-transform: uppercase;
    }

    @media (max-width: 768px) {
      .language-btn {
        padding: 6px 10px;
        min-width: 55px;
        gap: 4px;
        border-radius: 5px;
      }
      
      .language-code {
        font-size: 11px;
      }
      
      .language-flag {
        font-size: 13px;
      }
    }
  `]
})
export class LanguageSelectorComponent {
  currentLanguage: Language = 'en';

  constructor(private translationService: TranslationService) {
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }
}
