import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { initialMainState } from './main.state';
import { computed, inject } from '@angular/core';
import { ContactService } from '../../shared/services/contact/contact.service';
import { TContact } from '../../shared/types/contact.type';
import { pipe, switchMap, tap } from 'rxjs';

export const MainStore = signalStore(
  withState(initialMainState),
  withMethods((store, contactsService = inject(ContactService)) => ({
    loadContacts: rxMethod<void>(
      pipe(
        switchMap(() => {
          patchState(store, { isLoading: true });
          return contactsService.loadContacts().pipe(
            tap((contacts) => {
              patchState(store, { contacts, isLoading: false });
            })
          );
        })
      )
    ),
    selectContact(contact: TContact): void {
      patchState(store, { selectedContact: contact });
    },
    setSearchQuery(searchQuery: string): void {
      patchState(store, { searchQuery });
    },
  })),
  withComputed((store) => ({
    filteredContacts: computed(() =>
      store.contacts().filter((contact) => {
        const searchQuery = store.searchQuery().toLowerCase();
        return (
          contact.firstName.toLowerCase().includes(searchQuery) ||
          contact.lastName.toLowerCase().includes(searchQuery) ||
          contact.phones.some((phone) => phone.number.includes(searchQuery)) ||
          contact.emails.some((email) => email.email.includes(searchQuery)) ||
          contact.organization?.toLowerCase().includes(searchQuery) ||
          contact.address?.toLowerCase().includes(searchQuery)
        );
      })
    ),
  })),
  withHooks({
    onInit: (store) => {
      store.loadContacts();
    },
  })
);
