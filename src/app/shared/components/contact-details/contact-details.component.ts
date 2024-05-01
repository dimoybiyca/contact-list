import { Component, Input } from '@angular/core';
import { TContact } from '../../types/contact.type';
import { IconComponent } from '../icon/icon.component';
import { TContactDetailsState } from '../../types/contact-details-state.type';
import { patchState, signalState } from '@ngrx/signals';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [IconComponent, RouterLink, DatePipe],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent {
  @Input() contact: TContact;
  @Input() isPreview = false;
  @Input() isShowControls = false;

  state = signalState<TContactDetailsState>({
    isConfirmDelete: false,
  });

  getName(): string {
    return `${this.contact?.firstName ?? ''} ${
      this.contact?.middleName ?? ''
    } ${this.contact.lastName ?? ''}`.trim();
  }

  onDelete(): void {
    patchState(this.state, (state) => ({ ...state, isConfirmDelete: true }));
  }

  onConfirmDelete(): void {}

  onMouseLeaveDelete(): void {
    patchState(this.state, (state) => ({ ...state, isConfirmDelete: false }));
  }
}
