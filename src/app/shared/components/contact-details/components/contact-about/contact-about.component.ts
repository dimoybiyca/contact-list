import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../icon/icon.component';
import { TContact } from '../../../../types/contact.type';
import { FilterEmptyPipe } from '../../../../pipes/filter-empthy.pipe';

@Component({
  selector: 'app-contact-about',
  standalone: true,
  imports: [IconComponent, FilterEmptyPipe],
  templateUrl: './contact-about.component.html',
  styleUrl: './contact-about.component.scss',
})
export class ContactAboutComponent {
  @Input() contact: TContact;
}
