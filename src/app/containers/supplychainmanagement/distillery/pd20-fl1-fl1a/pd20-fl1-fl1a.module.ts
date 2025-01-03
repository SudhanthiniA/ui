import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd20Fl1Fl1aRoutingModule } from './pd20-fl1-fl1a-routing.module';
import { Pd20Fl1Fl1aComponent } from './pd20-fl1-fl1a.component';
import { Addpd20Fl1Fl1aComponent } from './addpd20-fl1-fl1a/addpd20-fl1-fl1a.component';
import { Viewpd20Fl1Fl1aComponent } from './viewpd20-fl1-fl1a/viewpd20-fl1-fl1a.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [Pd20Fl1Fl1aComponent, Addpd20Fl1Fl1aComponent, Viewpd20Fl1Fl1aComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd20Fl1Fl1aRoutingModule
  ]
})
export class Pd20Fl1Fl1aModule { }
