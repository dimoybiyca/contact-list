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
import { TEmail } from '../../../shared/types/email.type';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputDateComponent,
    },
  ],
})
export class InputDateComponent implements ControlValueAccessor {
  fb: FormBuilder = inject(FormBuilder);
  dateForm: FormGroup;
  labels = EmailLabels;

  private isTouched = false;

  get date(): FormControl {
    return this.dateForm.get('date') as FormControl;
  }

  get label(): FormControl {
    return this.dateForm.get('label') as FormControl;
  }

  onChange = (value: TEmail) => {};
  onTouched = () => {};

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      date: ['', [Validators.maxLength(32)]],
      label: [''],
    });

    this.dateForm.valueChanges.subscribe(() => {
      this.onValuesChange();
    });
  }

  writeValue(obj: any): void {
    if (obj.date) {
      this.date.setValue(obj.date);
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
    this.onChange(this.dateForm.value);

    if (!this.isTouched) {
      return;
    }

    this.onTouched();
  }
}
