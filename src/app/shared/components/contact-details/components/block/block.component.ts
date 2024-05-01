import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../icon/icon.component';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss',
})
export class BlockComponent {
  @Input() iconName: string;
  @Input() title: string;
}
