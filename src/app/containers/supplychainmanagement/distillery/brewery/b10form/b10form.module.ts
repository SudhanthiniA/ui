import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { B10formRoutingModule} from './b10form-routing.module';
import { B10formComponent } from './b10form.component';
import { Addb10formComponent } from './addb10form/addb10form.component';
import { Viewb10formComponent } from './viewb10form/viewb10form.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [B10formComponent, Addb10formComponent, Viewb10formComponent, PaymentComponent],
  imports: [
    CommonModule,
    B10formRoutingModule,
    SharedModule
  ]
})
export class B10formModule { }
