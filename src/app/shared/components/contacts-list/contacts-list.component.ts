import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TContact } from '../../types/contact.type';
import { ContactsListItemComponent } from './components/contacts-list-item/contacts-list-item.component';
import { IconComponent } from '../icon/icon.component';
import { SortAlphabeticallyPipe } from '../../pipes/sort-alphabeticaly.pipe';
import { PersistenceService } from '../../services/persistence/persistence.service';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [ContactsListItemComponent, IconComponent, SortAlphabeticallyPipe],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent implements OnInit {
  @Input() contacts: TContact[];
  @Output() contactSelected = new EventEmitter<TContact>();

  selectedId: string | null = null;
  private persistentService: PersistenceService = inject(PersistenceService);

  ngOnInit(): void {
    const selectedContact = this.persistentService.get('selectedContact');
    if (selectedContact) {
      this.selectedId = selectedContact.id;
    }
  }

  onContactClick(contact: TContact): void {
    this.selectedId = contact.id;
    this.contactSelected.emit(contact);
  }
}
