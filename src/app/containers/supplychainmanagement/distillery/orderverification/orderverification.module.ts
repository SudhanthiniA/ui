import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { OrderverificationRoutingModule } from './orderverification-routing.module';
import { OrderverificationComponent } from './orderverification.component';
import { AddeditorderverificationComponent } from './addeditorderverification/addeditorderverification.component';
import { VieworderverificationComponent } from './vieworderverification/vieworderverification.component';

@NgModule({
  declarations: [
    OrderverificationComponent, 
    AddeditorderverificationComponent, 
    VieworderverificationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderverificationRoutingModule
  ]
})
export class OrderverificationModule { }
