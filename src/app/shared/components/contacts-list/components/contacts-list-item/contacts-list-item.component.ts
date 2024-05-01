import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TContact } from '../../../../types/contact.type';
import { IconComponent } from '../../../icon/icon.component';
import { patchState, signalState } from '@ngrx/signals';
import { TContactListItemState } from '../../types/contacts-list-item-state.type';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../../../services/contact/contact.service';

@Component({
  selector: 'app-contacts-list-item',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './contacts-list-item.component.html',
  styleUrl: './contacts-list-item.component.scss',
})
export class ContactsListItemComponent {
  @Input() contact: TContact;
  @Output() contactClick = new EventEmitter<void>();

  contactService: ContactService = inject(ContactService);
  state = signalState<TContactListItemState>({
    isConfirmDelete: false,
    isHovered: false,
  });

  onDelete(): void {
    patchState(this.state, (state) => ({ ...state, isConfirmDelete: true }));
  }

  onConfirmDelete(): void {
    this.contactService.deleteContact(this.contact.id);
  }

  onMouseLeave(): void {
    patchState(this.state, (state) => ({
      ...state,
      isHovered: false,
      isConfirmDelete: false,
    }));
  }

  onMouseEnter(): void {
    patchState(this.state, (state) => ({ ...state, isHovered: true }));
  }

  onContactClick(): void {
    this.contactClick.emit();
  }
}
