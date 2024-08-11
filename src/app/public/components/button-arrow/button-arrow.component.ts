import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-arrow',
  standalone: true,
  templateUrl: './button-arrow.component.html',
  styleUrl: './button-arrow.component.scss',
})
export class ButtonArrowComponent {
  @Input() text!: string;
  @Input() pdfUrl!: string; // URL del PDF

  openPdf() {
    if (this.pdfUrl) {
      window.open(this.pdfUrl, '_blank');
    } else {
      console.error('PDF URL is not provided.');
    }
  }
}
