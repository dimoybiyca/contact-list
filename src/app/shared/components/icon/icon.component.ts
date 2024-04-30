import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() size: string = '24px';
  @Input() viewBox: number = 24;
  @Input() iconName!: string;
  @Input() fill: string = 'none';
  @Input() stroke: string = '#fff';

  getViewBox(): string {
    return `0 0 ${this.viewBox} ${this.viewBox}`;
  }
}
