import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { OrderrequestfromwholesaleRoutingModule } from './orderrequestfromwholesale-routing.module';
import { OrderrequestfromwholesaleComponent } from './orderrequestfromwholesale.component';
import { VieworderrequestfromwholesaleComponent } from './vieworderrequestfromwholesale/vieworderrequestfromwholesale.component';

@NgModule({
  declarations: [
    OrderrequestfromwholesaleComponent, 
    VieworderrequestfromwholesaleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderrequestfromwholesaleRoutingModule
  ]
})

export class OrderrequestfromwholesaleModule { }
