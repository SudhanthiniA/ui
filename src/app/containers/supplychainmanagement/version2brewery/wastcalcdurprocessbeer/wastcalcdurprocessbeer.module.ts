import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WastcalcdurprocessbeerRoutingModule } from './wastcalcdurprocessbeer-routing.module';
import { WastcalcdurprocessbeerComponent } from './wastcalcdurprocessbeer.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [WastcalcdurprocessbeerComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    WastcalcdurprocessbeerRoutingModule
  ]
})
export class WastcalcdurprocessbeerModule { }
