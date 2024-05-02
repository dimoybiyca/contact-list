import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactService } from '../shared/services/contact/contact.service';
import { TContact } from '../shared/types/contact.type';
import { ContactDetailsComponent } from '../shared/components/contact-details/contact-details.component';
import { IconComponent } from '../shared/components/icon/icon.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ContactDetailsComponent, IconComponent, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  contactService: ContactService = inject(ContactService);

  contact: TContact;
  private contactId: string;

  ngOnInit(): void {
    this.contactId = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactService.getContactById(this.contactId);
  }

  onBack(): void {
    window.history.back();
  }
}
