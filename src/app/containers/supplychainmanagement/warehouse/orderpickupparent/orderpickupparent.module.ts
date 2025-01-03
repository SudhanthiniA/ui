import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { OrderpickupparentRoutingModule } from './orderpickupparent-routing.module';
import { OrderpickupparentComponent } from './orderpickupparent.component';
import { AddorderpickupparentComponent } from './addorderpickupparent/addorderpickupparent.component';
import { VieworderpickupparentComponent } from './vieworderpickupparent/vieworderpickupparent.component';

@NgModule({
  declarations: [OrderpickupparentComponent, AddorderpickupparentComponent, VieworderpickupparentComponent],
  imports: [
    CommonModule,
    OrderpickupparentRoutingModule,
    SharedModule
  ]
})
export class OrderpickupparentModule { }
