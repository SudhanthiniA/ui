import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddorderpickComponent } from './addorderpick/addorderpick.component';
import { VieworderpickComponent } from './vieworderpick/vieworderpick.component'; 
import { OrderpickComponent } from './orderpick.component';  
import { OrderpickRoutingModule } from './orderpick-routing.module';

@NgModule({
  declarations: [OrderpickComponent, AddorderpickComponent, VieworderpickComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderpickRoutingModule
  ]
})
export class OrderpickModule { }
