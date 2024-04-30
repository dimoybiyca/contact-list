import { inject, Injectable } from '@angular/core';
import { TContact } from '../../types/contact.type';
import { contactsMockData } from '../../data/contacts-mock-data';
import { PersistenceService } from '../persistence/persistence.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  persistenceService: PersistenceService = inject(PersistenceService);

  public getAllContacts(): TContact[] {
    return contactsMockData;
  }

  getContactById(id: string): TContact {
    return contactsMockData.find((contact) => contact.id === id);
  }
}
