import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { AddeditrevenueComponent } from './addeditrevenue/addeditrevenue.component';
import { ViewrevenueComponent } from './viewrevenue/viewrevenue.component';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [
    RevenueComponent, 
    AddeditrevenueComponent, 
    ViewrevenueComponent
  ],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    SharedModule
  ]
})
export class RevenueModule { }
