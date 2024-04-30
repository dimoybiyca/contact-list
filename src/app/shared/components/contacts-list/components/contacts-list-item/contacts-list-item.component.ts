import { Component, Input } from '@angular/core';
import { TContact } from '../../../../types/contact.type';
import { IconComponent } from '../../../icon/icon.component';
import { patchState, signalState } from '@ngrx/signals';
import { TContactListItemState } from '../../types/contacts-list-item-state.type';

@Component({
  selector: 'app-contacts-list-item',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './contacts-list-item.component.html',
  styleUrl: './contacts-list-item.component.scss',
})
export class ContactsListItemComponent {
  @Input() contact: TContact;

  state = signalState<TContactListItemState>({
    isConfirmDelete: false,
    isHovered: false,
  });

  onDelete(): void {
    patchState(this.state, (state) => ({ ...state, isConfirmDelete: true }));
  }

  onConfirmDelete(): void {}

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
}
