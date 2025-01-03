import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {SalebillingSecondinputRoutingModule} from './salebilling-secondinput-routing.module';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SalebillingSecondinputComponent } from './salebilling-secondinput.component';



@NgModule({
  declarations: [AddComponent, ViewComponent, SalebillingSecondinputComponent],
  imports: [
    CommonModule,
    SharedModule,
    SalebillingSecondinputRoutingModule
  ]
})
export class SalebillingSecondinputModule { }
