import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ExportpermitIdRoutingModule } from './exportpermit-id-routing.module';
import { ExportpermitIdComponent } from './exportpermit-id.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';


@NgModule({
  declarations: [ExportpermitIdComponent, AddComponent, ViewComponent, PaymentscreenComponent],
  imports: [
    CommonModule,
    SharedModule, 
    ExportpermitIdRoutingModule
  ]
})
export class ExportpermitIdModule { }
