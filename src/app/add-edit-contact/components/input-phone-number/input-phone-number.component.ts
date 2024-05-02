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
import { PhoneLabels } from '../../data/phone-labels';
import { Patterns } from '../../../shared/data/patterns';
import { TPhone } from '../../../shared/types/phone.type';
import { InputValidationComponent } from '../../../shared/components/input-validation/input-validation.component';

@Component({
  selector: 'app-input-phone-number',
  standalone: true,
  imports: [ReactiveFormsModule, InputValidationComponent],
  templateUrl: './input-phone-number.component.html',
  styleUrl: './input-phone-number.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputPhoneNumberComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputPhoneNumberComponent,
    },
  ],
})
export class InputPhoneNumberComponent
  implements OnInit, ControlValueAccessor, Validator
{
  fb: FormBuilder = inject(FormBuilder);
  phoneForm: FormGroup;
  labels = PhoneLabels;

  private isTouched = false;
  private readonly phonePattern = Patterns.emptyOrNumbers;

  get number(): FormControl {
    return this.phoneForm.get('number') as FormControl;
  }

  get label(): FormControl {
    return this.phoneForm.get('label') as FormControl;
  }

  onChange = (value: TPhone) => {};
  onTouched = () => {};

  validate(control: AbstractControl): ValidationErrors {
    return this.phoneForm.valid ? null : this.number.errors;
  }

  ngOnInit(): void {
    this.phoneForm = this.fb.group({
      number: [
        '',
        [Validators.maxLength(15), Validators.pattern(this.phonePattern)],
      ],
      label: [''],
    });

    this.phoneForm.valueChanges.subscribe(() => {
      this.onValuesChange();
    });
  }

  writeValue(obj: any): void {
    if (obj.number) {
      this.number.setValue(obj.number);
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
    this.onChange(this.phoneForm.value);

    if (!this.isTouched) {
      return;
    }

    this.onTouched();
  }
}
