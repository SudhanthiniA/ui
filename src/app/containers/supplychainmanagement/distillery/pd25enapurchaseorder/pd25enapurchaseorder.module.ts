import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd25enapurchaseorderRoutingModule } from './pd25enapurchaseorder-routing.module';
import { Pd25enapurchaseorderComponent } from './pd25enapurchaseorder.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [Pd25enapurchaseorderComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd25enapurchaseorderRoutingModule
  ]
})
export class Pd25enapurchaseorderModule { }
