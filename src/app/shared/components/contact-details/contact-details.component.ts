import { Component, Input } from '@angular/core';
import { TContact } from '../../types/contact.type';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent {
  @Input() contact: TContact;
  @Input() isPreview = false;

  getName(): string {
    return `${this.contact?.firstName ?? ''} ${
      this.contact?.middleName ?? ''
    } ${this.contact.lastName ?? ''}`.trim();
  }
}
