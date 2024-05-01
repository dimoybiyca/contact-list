import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path: 'edit/:id',
    component: AddEditContactComponent,
  },
  {
    path: 'add',
    component: AddEditContactComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];
