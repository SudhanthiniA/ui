import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritpurchaseindentComponent } from './spiritpurchaseindent.component';
import { AddspiritpurchaseindentComponent } from './addspiritpurchaseindent/addspiritpurchaseindent.component';
import { ViewspiritpurchaseindentComponent } from './viewspiritpurchaseindent/viewspiritpurchaseindent.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';

const routes: Routes = [
  { path: 'list', component: SpiritpurchaseindentComponent},
  {path: 'add', component: AddspiritpurchaseindentComponent},
  {path: 'view', component: ViewspiritpurchaseindentComponent},
  {path: 'payment', component: PaymentscreenComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritpurchaseindentRoutingModule { }
