import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {OrderpickupRoutingModule} from './orderpickup-routing.module';
import { OrderpickupComponent } from './orderpickup.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [OrderpickupComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderpickupRoutingModule
  ]
})
export class OrderpickupModule { }
