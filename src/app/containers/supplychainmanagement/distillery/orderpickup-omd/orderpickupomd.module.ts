import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { OrderpickupomdRoutingModule } from './orderpickupomd-routing.module';
import { OrderpickupomdComponent } from './orderpickupomd.component';
import { AddorderpickupomdComponent } from './addorderpickupomd/addorderpickupomd.component';
import { VieworderpickupomdComponent } from './vieworderpickupomd/vieworderpickupomd.component';

@NgModule({
  declarations: [OrderpickupomdComponent, AddorderpickupomdComponent, VieworderpickupomdComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderpickupomdRoutingModule
  ]
})
export class OrderpickupomdModule { }
