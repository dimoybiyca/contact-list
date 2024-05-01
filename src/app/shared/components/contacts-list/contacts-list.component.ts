import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TContact } from '../../types/contact.type';
import { ContactsListItemComponent } from './components/contacts-list-item/contacts-list-item.component';
import { IconComponent } from '../icon/icon.component';
import { SortAlphabeticallyPipe } from '../../pipes/sort-alphabeticaly.pipe';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [ContactsListItemComponent, IconComponent, SortAlphabeticallyPipe],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent {
  @Input() contacts: TContact[];
  @Output() contactSelected = new EventEmitter<TContact>();

  onContactClick(contact: TContact): void {
    this.contactSelected.emit(contact);
  }
}
