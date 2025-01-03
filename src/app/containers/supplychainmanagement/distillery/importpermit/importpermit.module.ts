import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportpermitRoutingModule } from './importpermit-routing.module';
import { ImportpermitComponent } from './importpermit.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [ImportpermitComponent, AddComponent, ViewComponent, PaymentComponent],
  imports: [
    CommonModule,
    ImportpermitRoutingModule,
    SharedModule
  ]
})
export class ImportpermitModule { }
