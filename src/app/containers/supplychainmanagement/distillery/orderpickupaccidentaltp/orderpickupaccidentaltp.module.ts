import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {OrderpickupaccidentaltpRoutingModule} from './orderpickuptheftcase-routing.module';
import { OrderpickupaccidentaltpComponent } from './orderpickupaccidentaltp.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [OrderpickupaccidentaltpComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    OrderpickupaccidentaltpRoutingModule,
    SharedModule
  ]
})
export class OrderpickupaccidentaltpModule { }
