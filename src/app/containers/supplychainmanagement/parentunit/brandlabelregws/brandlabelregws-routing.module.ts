import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandlabelregwsComponent } from './brandlabelregws.component';
import { AddbrandlabelregwsComponent } from './addbrandlabelregws/addbrandlabelregws.component';
import { ViewbrandlabelregwsComponent } from './viewbrandlabelregws/viewbrandlabelregws.component';
import { PaymentComponent } from './payment/payment.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : BrandlabelregwsComponent
  },
  {
    path : 'add',
    component : AddbrandlabelregwsComponent
  },
  {
    path : 'view',
    component : ViewbrandlabelregwsComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  },
  {
    path : 'acknowledgement',
    component : AcknowledgementComponent
  }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandlabelregwsRoutingModule { }
