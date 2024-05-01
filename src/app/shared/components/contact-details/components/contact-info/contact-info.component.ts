import { Component, Input } from '@angular/core';
import { TContact } from '../../../../types/contact.type';
import { IconComponent } from '../../../icon/icon.component';
import { FilterEmptyPipe } from '../../../../pipes/filter-empthy.pipe';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [IconComponent, FilterEmptyPipe],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})
export class ContactInfoComponent {
  @Input() contact: TContact;
}
