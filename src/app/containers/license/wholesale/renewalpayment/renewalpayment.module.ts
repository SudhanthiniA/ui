import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { RenewalpaymentRoutingModule } from './renewalpayment-routing.module';
import { AddComponent } from './add/add.component';
import {  RenewalpaymentComponent } from './renewalpayment.component';


@NgModule({
  declarations: [ViewComponent, AddComponent,RenewalpaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RenewalpaymentRoutingModule
  ]
})
export class RenewalpaymentModule { }
