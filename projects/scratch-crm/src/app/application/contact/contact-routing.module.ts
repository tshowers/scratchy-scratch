import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { AddressModule } from '../address/address.module';
import { EmailAddressModule } from '../email-address/email-address.module';
import { FopModule } from '../fop/fop.module';
import { NoteModule } from '../note/note.module';
import { PhoneNumberModule } from '../phone-number/phone-number.module';
import { ContactDashboardComponent} from './contact-dashboard/contact-dashboard.component';
import { ContactListComponent} from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { ContactViewResolverService } from './services/contact-view-resolver.service';

const routes : Routes = [
  { path: '', canActivate: [AuthGuard], component: ContactListComponent, data : { title: 'Contact List'}},
  { path: 'dashboard', canActivate: [AuthGuard], component : ContactDashboardComponent, data : { title: 'Contact Dashboard'}},
  { path: 'new', canActivate: [AuthGuard], component: ContactEditComponent, resolve: { contact: ContactResolverService }, data: { title: 'New Contact', state: 'new contact' } },
  { path: ':id', canActivate: [AuthGuard], component: ContactViewComponent, resolve:{contact: ContactViewResolverService}, data: { title: 'Contact Detail', state: 'contact detail' } },
  { path: ':id/edit', canActivate: [AuthGuard], component: ContactEditComponent, resolve: { contact: ContactResolverService }, data: { title: 'Edit Contact', state: 'edit contact' } },
  { path: ':id/addresses', canLoad: [AuthGuard], children: [ {path: '', loadChildren: () => import('../address/address.module').then(m => m.AddressModule)} ]},
  { path: ':id/email-addresses', canLoad: [AuthGuard], children: [ {path: '', loadChildren: () => import('../email-address/email-address.module').then(m => m.EmailAddressModule)} ]},
  { path: ':id/form-of-payments', canLoad: [AuthGuard], children: [ {path: '', loadChildren: () => import('../fop/fop.module').then(m => m.FopModule)} ]},
  { path: ':id/notes', canLoad: [AuthGuard], children: [ {path: '', loadChildren: () => import('../note/note.module').then(m => m.NoteModule)} ]},
  { path: ':id/phone-numbers', canLoad: [AuthGuard], children: [ {path: '', loadChildren: () => import('../phone-number/phone-number.module').then(m => m.PhoneNumberModule)} ]},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ContactResolverService,
    ContactViewResolverService,
  ]
})
export class ContactRoutingModule { }
