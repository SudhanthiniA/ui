import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { OrderpickupnewRoutingModule } from './orderpickupnew-routing.module';
import { OrderpickupnewComponent } from './orderpickupnew.component';
import { AddorderpickupnewComponent } from './addorderpickupnew/addorderpickupnew.component';
import { VieworderpickupnewComponent } from './vieworderpickupnew/vieworderpickupnew.component';

@NgModule({
  declarations: [OrderpickupnewComponent, AddorderpickupnewComponent, VieworderpickupnewComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderpickupnewRoutingModule
  ]
})
export class OrderpickupnewModule { }
