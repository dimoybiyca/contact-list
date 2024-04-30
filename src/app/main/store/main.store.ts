import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialMainState } from './main.state';
import { inject } from '@angular/core';
import { ContactService } from '../../shared/services/contact/contact.service';

export const MainStore = signalStore(
  withState(initialMainState),
  withMethods((store, contactsService = inject(ContactService)) => ({
    loadContacts(): void {
      patchState(store, { contacts: contactsService.getAllContacts() });
    },
  })),
  withHooks({
    onInit: (store) => {
      store.loadContacts();
    },
  })
);
