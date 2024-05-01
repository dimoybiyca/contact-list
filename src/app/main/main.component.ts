import { Component, inject, OnInit } from '@angular/core';
import { ContactsListComponent } from '../shared/components/contacts-list/contacts-list.component';
import { MainStore } from './store/main.store';
import { SearchComponent } from '../shared/components/search/search.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from '../shared/components/contact-details/contact-details.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ContactsListComponent,
    SearchComponent,
    AddContactComponent,
    ContactDetailsComponent,
  ],
  providers: [MainStore],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  store = inject(MainStore);
  initialValue: string;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.initialValue = this.route.snapshot.queryParams['q'] ?? '';
    if (this.initialValue) {
      this.store.setSearchQuery(this.initialValue);
    }
  }

  onSearchInput($event: string): void {
    this.store.setSearchQuery($event);
    this.router.navigate([], $event ? { queryParams: { q: $event } } : {});
  }
}
