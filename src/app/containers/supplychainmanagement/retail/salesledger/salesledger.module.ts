import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { SalesledgerRoutingModule } from './salesledger-routing.module';
import { SalesledgerComponent } from './salesledger.component';
import { ViewsalesledgerComponent } from './viewsalesledger/viewsalesledger.component';
import { AddsalesledgerComponent } from './addsalesledger/addsalesledger.component';


@NgModule({
  declarations: [SalesledgerComponent, ViewsalesledgerComponent, AddsalesledgerComponent],
  imports: [
    CommonModule,
    SharedModule,
    SalesledgerRoutingModule
  ]
})
export class SalesledgerModule { }
