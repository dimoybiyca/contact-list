import { Component, Input } from '@angular/core';
import { TContact } from '../../types/contact.type';
import { ContactsListItemComponent } from './components/contacts-list-item/contacts-list-item.component';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [ContactsListItemComponent],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent {
  @Input() contacts: TContact[];
}
