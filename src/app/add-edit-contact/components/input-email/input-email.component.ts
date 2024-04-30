import { Component, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailLabels } from '../../data/email-labels';
import { TInputEmailValue } from '../../types/input-email-value.type';
import { Patterns } from '../../../shared/data/patterns';

@Component({
  selector: 'app-input-email',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputEmailComponent,
    },
  ],
})
export class InputEmailComponent implements ControlValueAccessor {
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

  onChange = (value: TInputEmailValue) => {};
  onTouched = () => {};

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
