import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailbillingComponent } from './retailbilling.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {RetailbillingRoutingModule} from './retailbilling-routing.module';



@NgModule({
  declarations: [RetailbillingComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    RetailbillingRoutingModule,
    SharedModule
  ]
})
export class RetailbillingModule { }
