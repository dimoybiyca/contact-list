import { Component } from '@angular/core';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [IconComponent, RouterLink],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss',
})
export class AddContactComponent {}
