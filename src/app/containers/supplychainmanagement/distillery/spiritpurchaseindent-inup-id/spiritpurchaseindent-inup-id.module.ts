import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SpiritpurchaseindentInupIdRoutingModule } from './spiritpurchaseindent-inup-id-routing.module';

import { SpiritpurchaseindentInupIdComponent } from './spiritpurchaseindent-inup-id.component';
import { AddspiritpurchaseindentInupIdComponent } from './addspiritpurchaseindent-inup-id/addspiritpurchaseindent-inup-id.component';
import { ViewspiritpurchaseindentInupIdComponent } from './viewspiritpurchaseindent-inup-id/viewspiritpurchaseindent-inup-id.component';

@NgModule({
  declarations: [
    SpiritpurchaseindentInupIdComponent,
    AddspiritpurchaseindentInupIdComponent,
    ViewspiritpurchaseindentInupIdComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SpiritpurchaseindentInupIdRoutingModule
  ]
})

export class SpiritpurchaseindentInupIdModule { }
