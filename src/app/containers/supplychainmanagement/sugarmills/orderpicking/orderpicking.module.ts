import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { OrderpickingRoutingModule } from './orderpicking-routing.module';
import { OrderpickingComponent } from './orderpicking.component';
import { AddeditorderpickingComponent } from './addeditorderpicking/addeditorderpicking.component';

@NgModule({
  declarations: [
    OrderpickingComponent,
    AddeditorderpickingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderpickingRoutingModule
  ]
})
export class OrderpickingModule { }
