import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd20Fl1Fl1aComponent } from './pd20-fl1-fl1a.component';
import { Addpd20Fl1Fl1aComponent } from './addpd20-fl1-fl1a/addpd20-fl1-fl1a.component';
import { Viewpd20Fl1Fl1aComponent } from './viewpd20-fl1-fl1a/viewpd20-fl1-fl1a.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: Pd20Fl1Fl1aComponent },
{
  path : 'view',
  component : Viewpd20Fl1Fl1aComponent
},
{
  path : 'edit/:id',
  component : Addpd20Fl1Fl1aComponent
},
{
  path : 'add',
  component : Addpd20Fl1Fl1aComponent
},
{
  path : 'payment',
  component : PaymentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd20Fl1Fl1aRoutingModule { }
