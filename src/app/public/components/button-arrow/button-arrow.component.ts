import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-arrow',
  standalone: true,
  templateUrl: './button-arrow.component.html',
  styleUrl: './button-arrow.component.scss',
})
export class ButtonArrowComponent {

  private _router = inject(Router);

  @Input() text!: string;
  @Input() pdfUrl!: string; // URL del PDF
  @Input() link!: string;


  openPdf() {

    if (this.pdfUrl) {
      window.open(this.pdfUrl, '_blank');
    }

    if (this.link) {
      this._router.navigate([this.link]);
    }

    else {
      console.error('PDF URL is not provided.');
    }
  }


  goToDetails() {
    console.log({ pdfUrl: this.pdfUrl });

    this._router.navigate([`d/${this.link}`]);
  }


}
