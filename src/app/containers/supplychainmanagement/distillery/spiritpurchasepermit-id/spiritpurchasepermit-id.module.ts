// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { SpiritpurchasepermitIdComponent } from './spiritpurchasepermit-id/spiritpurchasepermit-id.component';
// import { AddspiritpurchasepermitIdComponent } from './addspiritpurchasepermit-id/addspiritpurchasepermit-id.component';
// import { ViewspiritpurchasepermitIdComponent } from './viewspiritpurchasepermit-id/viewspiritpurchasepermit-id.component';



// @NgModule({
//   declarations: [SpiritpurchasepermitIdComponent, AddspiritpurchasepermitIdComponent, ViewspiritpurchasepermitIdComponent],
//   imports: [
//     CommonModule
//   ]
// })












import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SpiritpurchasepermitIdRoutingModule } from './spiritpurchasepermit-id-routing.module';

import { SpiritpurchasepermitIdComponent } from './spiritpurchasepermit-id.component';
import { AddspiritpurchasepermitIdComponent } from './addspiritpurchasepermit-id/addspiritpurchasepermit-id.component';
import { ViewspiritpurchasepermitIdComponent } from './viewspiritpurchasepermit-id/viewspiritpurchasepermit-id.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    SpiritpurchasepermitIdComponent,
    AddspiritpurchasepermitIdComponent,
    ViewspiritpurchasepermitIdComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SpiritpurchasepermitIdRoutingModule
  ]
})
export class SpiritpurchasepermitIdModule { }
