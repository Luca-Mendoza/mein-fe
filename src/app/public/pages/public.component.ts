import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {
  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
