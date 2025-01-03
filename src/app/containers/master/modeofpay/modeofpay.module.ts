import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeofpayRoutingModule } from './modeofpay-routing.module';
import { ModeofpayComponent } from './modeofpay.component';
import { AddeditmodeofpayComponent } from './addeditmodeofpay/addeditmodeofpay.component';
import { ViewmodeofpayComponent } from './viewmodeofpay/viewmodeofpay.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    ModeofpayComponent,
    AddeditmodeofpayComponent,
    ViewmodeofpayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModeofpayRoutingModule
  ]
})
export class ModeofpayModule { }
