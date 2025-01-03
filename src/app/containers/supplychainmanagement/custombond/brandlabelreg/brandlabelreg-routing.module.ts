import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandlabelregComponent } from './brandlabelreg.component';
import { AddbrandlabelregComponent } from './addbrandlabelreg/addbrandlabelreg.component';
import { EditbrandlabelregComponent } from './editbrandlabelreg/editbrandlabelreg.component';
import { ViewbrandlabelregComponent } from './viewbrandlabelreg/viewbrandlabelreg.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { PaymentComponent } from './payment/payment.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [{ path: 'list', component: BrandlabelregComponent },
{ path: 'add', component: AddbrandlabelregComponent },
{ path: 'edit/:id', component: AddbrandlabelregComponent },
{ path: 'edit', component: EditbrandlabelregComponent },
{ path: 'view/:Id', component: ViewbrandlabelregComponent },
{ path: 'payment/:id', component: PaymentComponent },
{ path: 'acknowledgement/:Id', component: AcknowledgementComponent },
{ path: 'preview', component: PreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandlabelregRoutingModule { }
