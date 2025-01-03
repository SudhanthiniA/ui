import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ExportpermitRoutingModule } from './exportpermit-routing.module';
import { ExportpermitComponent } from './exportpermit.component';
import { AddexportpermitComponent } from './addexportpermit/addexportpermit.component';
import { ViewexportpermitComponent } from './viewexportpermit/viewexportpermit.component';
import { PaymentscreenComponent } from './paymentscreen/paymentscreen.component';



@NgModule({
  declarations: [PaymentscreenComponent, ExportpermitComponent, AddexportpermitComponent, ViewexportpermitComponent],
  imports: [
    CommonModule, SharedModule, ExportpermitRoutingModule
  ]
})
export class ExportpermitModule { }
