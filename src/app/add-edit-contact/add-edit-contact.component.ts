import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TContact } from '../shared/types/contact.type';
import { ContactService } from '../shared/services/contact/contact.service';
import { NgFor } from '@angular/common';
import { IconComponent } from '../shared/components/icon/icon.component';
import { ContactDetailsComponent } from '../shared/components/contact-details/contact-details.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputPhoneNumberComponent } from './components/input-phone-number/input-phone-number.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputValidationComponent } from '../shared/components/input-validation/input-validation.component';

@Component({
  selector: 'app-add-edit-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    InputEmailComponent,
    InputPhoneNumberComponent,
    InputDateComponent,
    IconComponent,
    ContactDetailsComponent,
    InputValidationComponent,
  ],
  templateUrl: './add-edit-contact.component.html',
  styleUrl: './add-edit-contact.component.scss',
})
export class AddEditContactComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  contactService: ContactService = inject(ContactService);

  contactForm: FormGroup;
  isEdit: boolean;
  isExpandedName = false;
  private contactId: string;
  private contact: TContact;

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

  get dates(): FormArray {
    return this.contactForm.get('dates') as FormArray;
  }

  get organization(): FormControl {
    return this.contactForm.get('organization') as FormControl;
  }

  get address(): FormControl {
    return this.contactForm.get('address') as FormControl;
  }

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.url.toString().includes('edit');

    if (this.isEdit) {
      this.contactId = this.route.snapshot.paramMap.get('id');
    }

    this.contact = this.contactService.getContactById(this.contactId);

    this.initForm();
  }

  initForm(): void {
    let phonesArray: FormArray;
    let emailsArray: FormArray;
    let datesArray: FormArray;

    if (this.contact?.phones[0]?.number) {
      phonesArray = this.fb.array(
        this.contact.phones.map((phone) => new FormControl(phone))
      );
    } else {
      phonesArray = this.fb.array([new FormControl({ number: '', label: '' })]);
    }

    if (this.contact?.emails[0]?.email) {
      emailsArray = this.fb.array(
        this.contact.emails.map((email) => new FormControl(email))
      );
    } else {
      emailsArray = this.fb.array([new FormControl({ email: '', label: '' })]);
    }

    if (this.contact?.dates[0]?.date) {
      datesArray = this.fb.array(
        this.contact.dates.map((date) => new FormControl(date))
      );
    } else {
      datesArray = this.fb.array([new FormControl({ date: '', label: '' })]);
    }

    this.contactForm = this.fb.group({
      firstName: [
        this.contact?.firstName ?? '',
        [Validators.required, Validators.maxLength(32)],
      ],
      lastName: [this.contact?.lastName ?? '', Validators.maxLength(32)],
      organization: [
        this.contact?.organization ?? '',
        Validators.maxLength(32),
      ],
      address: [this.contact?.address ?? '', Validators.maxLength(100)],
      phones: phonesArray,
      emails: emailsArray,
      dates: datesArray,
    });

    if (this.contact?.middleName) {
      this.onExpandName();
    }
  }

  onExpandName(): void {
    this.isExpandedName = !this.isExpandedName;

    if (this.isExpandedName) {
      this.contactForm.addControl(
        'middleName',
        new FormControl(
          this.contact?.middleName ?? '',
          Validators.maxLength(20)
        )
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

  onAddDate(): void {
    this.dates.push(new FormControl(''));
  }

  onRemoveDate(id: number): void {
    this.dates.removeAt(id);
  }

  onSubmit(): void {
    this.isEdit
      ? this.contactService.updateContact({
          ...this.contactForm.value,
          id: this.contact.id,
          createdAt: this.contact.createdAt,
        })
      : this.contactService.addContact(this.contactForm.value);
    this.router.navigate(['/']);
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
