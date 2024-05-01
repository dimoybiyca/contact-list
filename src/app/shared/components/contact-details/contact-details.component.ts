import { Component, inject, Input, OnInit } from '@angular/core';
import { TContact } from '../../types/contact.type';
import { IconComponent } from '../icon/icon.component';
import { TContactDetailsState } from '../../types/contact-details-state.type';
import { patchState, signalState } from '@ngrx/signals';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactAboutComponent } from './components/contact-about/contact-about.component';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [
    IconComponent,
    RouterLink,
    DatePipe,
    ContactInfoComponent,
    ContactAboutComponent,
  ],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact: TContact;
  @Input() isPreview = false;
  @Input() isShowControls = false;

  isDetailsPage: boolean;
  private route: ActivatedRoute = inject(ActivatedRoute);

  state = signalState<TContactDetailsState>({
    isConfirmDelete: false,
  });

  ngOnInit(): void {
    this.isDetailsPage = this.route.snapshot.url.toString().includes('details');
  }

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
