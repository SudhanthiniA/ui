import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicelostComponent } from './devicelost.component';
import { ApplicantDevicelostViewComponent } from './applicant-devicelost-view/applicant-devicelost-view.component';
import { DeoPosDeviceListComponent } from './deo-pos-device-list/deo-pos-device-list.component';
import { DeoPosDeviceViewComponent } from './deo-pos-device-view/deo-pos-device-view.component';
import { ApplicantPaymentComponent } from './applicant-payment/applicant-payment.component';
import { ApplicantDevicelostViewPaymentComponent } from './applicant-devicelost-view-payment/applicant-devicelost-view-payment.component';
import { ApplicantAfterpaymentComponent } from './applicant-afterpayment/applicant-afterpayment.component';
import { DeoNewdeviceComponent } from './deo-newdevice/deo-newdevice.component';
import { DivisionalHoListComponent } from './divisional-ho-list/divisional-ho-list.component';
import { DivisionalHoViewComponent } from './divisional-ho-view/divisional-ho-view.component';
import { ApplicantDevicelostAddComponent } from './applicant-devicelost-add/applicant-devicelost-add.component';

const routes: Routes = [
  { path: 'list', component: DevicelostComponent },
  { path: 'add', component: ApplicantDevicelostAddComponent },
  { path: 'view', component: ApplicantDevicelostViewComponent },
  { path: 'deolist', component: DeoPosDeviceListComponent },
  { path: 'deoview', component: DeoPosDeviceViewComponent },
  { path: 'viewpayment', component: ApplicantDevicelostViewPaymentComponent },
  { path: 'payment', component: ApplicantPaymentComponent },
  { path: 'afterpayment', component: ApplicantAfterpaymentComponent },
  { path: 'deonewdevice', component: DeoNewdeviceComponent },
  { path: 'division-list', component: DivisionalHoListComponent },
  { path: 'division-view', component: DivisionalHoViewComponent },

  {
    path: 'ei',
    loadChildren: () => import('./ei/ei.module').then(m => m.EiModule)
  }
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicelostRoutingModule { }
