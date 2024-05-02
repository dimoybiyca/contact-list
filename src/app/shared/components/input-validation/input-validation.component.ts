import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-input-validation',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.scss',
})
export class InputValidationComponent {
  @Input() control: FormControl;

  getMessage(): string {
    if (this.control.hasError('required')) {
      return 'This field is required';
    }
    if (this.control.hasError('email')) {
      return 'Invalid email';
    }
    if (this.control.hasError('maxlength')) {
      return `Max length is ${this.control.errors?.['maxlength']?.requiredLength}`;
    }
    if (this.control.hasError('pattern')) {
      return 'Please enter valid data';
    }
    return '';
  }
}
