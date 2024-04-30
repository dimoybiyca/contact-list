import { Component, inject } from '@angular/core';
import { ContactsListComponent } from '../shared/components/contacts-list/contacts-list.component';
import { MainStore } from './store/main.store';
import { SearchComponent } from '../shared/components/search/search.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ContactsListComponent, SearchComponent, AddContactComponent],
  providers: [MainStore],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  store = inject(MainStore);
}
