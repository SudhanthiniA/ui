import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingwastagereportComponent } from './bottlingwastagereport.component';
import { AddbottlingwastagereportComponent } from './addbottlingwastagereport/addbottlingwastagereport.component';
import { ViewbottlingwastagereportComponent } from './viewbottlingwastagereport/viewbottlingwastagereport.component';
import { PaymentmappedComponent } from './paymentmapped/paymentmapped.component';

const routes: Routes = [
  { path: 'list', component: BottlingwastagereportComponent},
  {path: 'add', component: AddbottlingwastagereportComponent},
  {path: 'view', component: ViewbottlingwastagereportComponent},
  {path: 'payment', component: PaymentmappedComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingwastagereportRoutingModule { }
