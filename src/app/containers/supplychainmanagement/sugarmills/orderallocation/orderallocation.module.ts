import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { OrderallocationRoutingModule } from './orderallocation-routing.module';
import { OrderallocationComponent } from './orderallocation.component';
import { AddeditorderallocationComponent } from './addeditorderallocation/addeditorderallocation.component';
import { VieworderallocationComponent } from './vieworderallocation/vieworderallocation.component';

@NgModule({
  declarations: [
    OrderallocationComponent, 
    AddeditorderallocationComponent, 
    VieworderallocationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderallocationRoutingModule
  ]
})
export class OrderallocationModule { }
