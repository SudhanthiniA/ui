import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PaymenttypeRoutingModule } from './paymenttype-routing.module';
import { PaymenttypeComponent } from './paymenttype.component';
import { AddpaymenttypeComponent } from './addpaymenttype/addpaymenttype.component';
import { ViewpaymenttypeComponent } from './viewpaymenttype/viewpaymenttype.component';

@NgModule({
  declarations: [PaymenttypeComponent, AddpaymenttypeComponent, ViewpaymenttypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymenttypeRoutingModule
  ]
})
export class PaymenttypeModule { }
