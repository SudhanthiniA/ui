import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingprodplanComponent } from './bottlingprodplan.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MappedComponent } from './mapped/mapped.component';
import { PaymentforcancelrequestComponent } from './paymentforcancelrequest/paymentforcancelrequest.component';
const routes: Routes = [{ path:'list', component: BottlingprodplanComponent },
                        { path:'add', component: AddComponent},
                        { path:'view', component: ViewComponent},
                        { path:'mapped', component: MappedComponent},
                        { path:'paymentforcancel', component: PaymentforcancelrequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingprodplanRoutingModule { }
