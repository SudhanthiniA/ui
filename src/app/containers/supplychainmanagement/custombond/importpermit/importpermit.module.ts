import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ImportpermitComponent } from './importpermit.component';
import { AddimportpermitComponent } from './addimportpermit/addimportpermit.component';
import { ImportpermitRoutingModule } from './importpermit-routing.module';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [ImportpermitComponent, AddimportpermitComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule ,
    ImportpermitRoutingModule
  ]
})
export class ImportpermitModule { }
