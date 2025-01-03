import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '@appThemeShared/shared.module';

import { OrderpickupRoutingModule } from './orderpickup-routing.module';
import { AddorderpickupComponent } from './addorderpickup/addorderpickup.component';
import { VieworderpickupComponent } from './vieworderpickup/vieworderpickup.component';
import { OrderpickupComponent } from './orderpickup.component';
@NgModule({
  declarations: [AddorderpickupComponent, VieworderpickupComponent, OrderpickupComponent],
  imports: [
    CommonModule,
    OrderpickupRoutingModule,
    SharedModule
  ]
})
export class OrderpickupModule { }
