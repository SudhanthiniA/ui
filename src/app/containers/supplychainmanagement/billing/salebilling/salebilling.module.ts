import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {SalebillingRoutingModule} from './salebilling-routing.module';
import { SalebillingComponent } from './salebilling.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SalebillingComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SalebillingRoutingModule,
    SharedModule
  ]
})
export class SalebillingModule { }
