import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { OrderpickupRoutingModule } from './orderpickup-routing.module';
import { OrderpickupComponent } from './orderpickup.component';
import { AddorderpickupComponent } from './addorderpickup/addorderpickup.component';
import { VieworderpickupComponent } from './vieworderpickup/vieworderpickup.component';

@NgModule({
  declarations: [OrderpickupComponent, AddorderpickupComponent, VieworderpickupComponent],
  imports: [
    CommonModule,
    OrderpickupRoutingModule,
    SharedModule
  ]
})
export class OrderpickupModule { }
