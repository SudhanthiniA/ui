import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { DevicelostRoutingModule } from './devicelost-routing.module';
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

@NgModule({
  declarations: [DevicelostComponent, ApplicantDevicelostAddComponent, ApplicantDevicelostViewComponent, DeoPosDeviceListComponent, DeoPosDeviceViewComponent, ApplicantPaymentComponent, ApplicantDevicelostViewPaymentComponent, ApplicantAfterpaymentComponent, DeoNewdeviceComponent, DivisionalHoListComponent, DivisionalHoViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DevicelostRoutingModule
  ]
})
export class DevicereturnModule { }
