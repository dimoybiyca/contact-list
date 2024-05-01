import { inject, Injectable } from '@angular/core';
import { TContact } from '../../types/contact.type';
import { contactsMockData } from '../../data/contacts-mock-data';
import { PersistenceService } from '../persistence/persistence.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  persistenceService: PersistenceService = inject(PersistenceService);

  private contactsSubject: BehaviorSubject<TContact[]>;
  private contacts: TContact[];

  constructor() {
    const savedContacts = this.persistenceService.get('contacts');

    if (savedContacts) {
      this.contacts = savedContacts;
    } else {
      this.contacts = contactsMockData;
      this.persistenceService.set('contacts', this.contacts);
    }
    this.contactsSubject = new BehaviorSubject(this.contacts);
  }

  public loadContacts(): Observable<TContact[]> {
    return this.contactsSubject.asObservable();
  }

  public getContactById(id: string): TContact {
    return this.contacts.find((contact) => contact.id === id);
  }

  public updateContact(contact: TContact): void {
    this.contacts = this.contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    this.persistenceService.set('contacts', this.contacts);
    this.contactsSubject.next(this.contacts);
  }

  public addContact(contact: TContact): void {
    const id: string = uuidv4().toString();
    console.log(id);

    this.contacts.push({ ...contact, id });
    this.persistenceService.set('contacts', this.contacts);
    this.contactsSubject.next(this.contacts);
  }

  public deleteContact(id: string): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.persistenceService.set('contacts', this.contacts);
    this.contactsSubject.next(this.contacts);
  }
}
