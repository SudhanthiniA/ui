import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentrequestComponent } from './indentrequest.component';
import { IndentrequestwholesaleComponent } from './indentrequestwholesale/indentrequestwholesale.component';
import { ProductindentComponent } from './productindent/productindent.component';
import { PaymentindentComponent } from './paymentindent/paymentindent.component';
import { IndentconfirmationComponent } from './indentconfirmation/indentconfirmation.component';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';

const routes: Routes = [
  { path: '', component: IndentrequestComponent },
  { path: 'wholesale', component: IndentrequestwholesaleComponent },
  { path: 'product/:id', component: ProductindentComponent },
  { path: 'payment', component: PaymentindentComponent },
  { path: 'confirmation', component: IndentconfirmationComponent },
  { path: 'view/:id', component: ViewindentrequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentrequestRoutingModule { }
