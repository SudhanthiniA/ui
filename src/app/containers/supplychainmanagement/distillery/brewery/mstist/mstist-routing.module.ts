import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MstistComponent } from './mstist.component';
import { AddmstistComponent } from './addmstist/addmstist.component';
import { ViewmstistComponent } from './viewmstist/viewmstist.component';
import { VerificationmstistComponent } from './verificationmstist/verificationmstist.component';
import { ReportComponent } from './report/report.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [{ path:'list', component: MstistComponent },
                        { path:'add', component: AddmstistComponent},
                        { path:'view', component: ViewmstistComponent},
                        { path:'verify', component: VerificationmstistComponent},
                        { path:'report', component: ReportComponent},
                        { path:'payment', component: PaymentComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstistRoutingModule { }
