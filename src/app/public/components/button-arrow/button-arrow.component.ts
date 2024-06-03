import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-arrow',
  standalone: true,
  templateUrl: './button-arrow.component.html',
  styleUrl: './button-arrow.component.scss',
})
export class ButtonArrowComponent {
  @Input() text!: string;
}
