import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandlabelregbrewComponent } from './brandlabelregbrew.component';
import { AddbrandlabelregbrewComponent } from './addbrandlabelregbrew/addbrandlabelregbrew.component';
import { ViewbrandlabelregbrewComponent } from './viewbrandlabelregbrew/viewbrandlabelregbrew.component';
import { PaymentComponent } from './payment/payment.component';
import { PreviewComponent } from './preview/preview.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

const routes: Routes = [
  {
    path : 'list',
    component : BrandlabelregbrewComponent
  },
  {
    path : 'add',
    component : AddbrandlabelregbrewComponent
  },
  {
    path : 'view',
    component : ViewbrandlabelregbrewComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  },
  {
    path : 'preview',
    component : PreviewComponent
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
export class BrandlabelregbrewRoutingModule { }
