import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {OrderpickuptheftcaseRoutingModule} from './orderpickuptheftcase-routing.module';
import { OrderpickuptheftcaseComponent } from './orderpickuptheftcase.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [OrderpickuptheftcaseComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    OrderpickuptheftcaseRoutingModule,
    SharedModule
  ]
})
export class OrderpickuptheftcaseModule { }
