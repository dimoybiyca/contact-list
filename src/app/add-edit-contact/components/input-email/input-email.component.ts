import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { EmailLabels } from '../../data/email-labels';
import { Patterns } from '../../../shared/data/patterns';
import { TEmail } from '../../../shared/types/email.type';
import { InputValidationComponent } from '../../../shared/components/input-validation/input-validation.component';

@Component({
  selector: 'app-input-email',
  standalone: true,
  imports: [ReactiveFormsModule, InputValidationComponent],
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputEmailComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputEmailComponent,
    },
  ],
})
export class InputEmailComponent
  implements OnInit, ControlValueAccessor, Validator
{
  fb: FormBuilder = inject(FormBuilder);
  emailForm: FormGroup;
  labels = EmailLabels;

  private isTouched = false;
  private readonly phonePattern = Patterns.emptyOrNumbers;

  get email(): FormControl {
    return this.emailForm.get('email') as FormControl;
  }

  get label(): FormControl {
    return this.emailForm.get('label') as FormControl;
  }

  onChange = (value: TEmail) => {};
  onTouched = () => {};

  validate(control: AbstractControl): ValidationErrors {
    return this.emailForm.valid ? null : this.emailForm.errors;
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: [
        '',
        [Validators.maxLength(320), Validators.pattern(Patterns.emailPattern)],
      ],
      label: [''],
    });

    this.emailForm.valueChanges.subscribe(() => {
      this.onValuesChange();
    });
  }

  writeValue(obj: any): void {
    if (obj.email) {
      this.email.setValue(obj.email);
    }
    if (obj.label) {
      this.label.setValue(obj.label);
    }
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  private onValuesChange(): void {
    this.onChange(this.emailForm.value);

    if (!this.isTouched) {
      return;
    }

    this.onTouched();
  }
}
