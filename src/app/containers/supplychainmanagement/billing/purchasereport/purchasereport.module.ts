import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {PurchasereportRoutingModule} from './purchasereport-routing.module';
import { PurchasereportComponent } from './purchasereport.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [PurchasereportComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchasereportRoutingModule
  ]
})
export class PurchasereportModule { }
