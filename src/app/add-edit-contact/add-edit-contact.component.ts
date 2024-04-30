import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TContact } from '../shared/types/contact.type';
import { ContactService } from '../shared/services/contact/contact.service';
import { InputPhoneNumberComponent } from './components/input-phone-number/input-phone-number.component';
import { NgFor } from '@angular/common';
import { IconComponent } from '../shared/components/icon/icon.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { ContactDetailsComponent } from '../shared/components/contact-details/contact-details.component';

@Component({
  selector: 'app-add-edit-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    InputPhoneNumberComponent,
    InputEmailComponent,
    IconComponent,
    ContactDetailsComponent,
  ],
  templateUrl: './add-edit-contact.component.html',
  styleUrl: './add-edit-contact.component.scss',
})
export class AddEditContactComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  route: ActivatedRoute = inject(ActivatedRoute);
  contactService: ContactService = inject(ContactService);

  contactForm: FormGroup;
  isEdit: boolean;
  isExpandedName = false;
  private contactId: string;
  private contact: TContact;

  onTest() {
    console.log(this.contactForm.value);
  }
  get firstName(): FormControl {
    return this.contactForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.contactForm.get('lastName') as FormControl;
  }

  get middleName(): FormControl {
    return this.contactForm.get('middleName') as FormControl;
  }

  get phones(): FormArray {
    return this.contactForm.get('phones') as FormArray;
  }

  get emails(): FormArray {
    return this.contactForm.get('emails') as FormArray;
  }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.url.toString().endsWith('edit');

    if (this.isEdit) {
      this.contactId = this.route.snapshot.paramMap.get('id');
    }

    this.contact = this.contactService.getContactById(this.contactId);
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      firstName: [
        this.contact?.firstName ?? 'Vasyl',
        [Validators.required, Validators.maxLength(50)],
      ],
      lastName: [this.contact?.lastName ?? '', Validators.maxLength(50)],
      organization: [
        this.contact?.organization ?? '',
        Validators.maxLength(50),
      ],
      phones: this.fb.array([new FormControl('')]),
      emails: this.fb.array([new FormControl('')]),
    });
  }

  onExpandName(): void {
    this.isExpandedName = !this.isExpandedName;

    if (this.isExpandedName) {
      this.contactForm.addControl(
        'middleName',
        new FormControl('', Validators.maxLength(50))
      );
    } else {
      this.contactForm.removeControl('middleName');
    }
  }

  onAddPhone(): void {
    this.phones.push(new FormControl(''));
  }

  onRemovePhone(id: number): void {
    this.phones.removeAt(id);
  }

  onRemoveEmail(id: number): void {
    this.emails.removeAt(id);
  }

  onAddEmail(): void {
    this.emails.push(new FormControl(''));
  }
}
