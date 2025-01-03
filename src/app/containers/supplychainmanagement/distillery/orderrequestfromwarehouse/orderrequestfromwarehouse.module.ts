import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { OrderrequestfromwarehouseRoutingModule } from './orderrequestfromwarehouse-routing.module';
import { OrderrequestfromwarehouseComponent } from './orderrequestfromwarehouse.component';
import { VieworderrequestfromwarehouseComponent } from './vieworderrequestfromwarehouse/vieworderrequestfromwarehouse.component';

@NgModule({
  declarations: [OrderrequestfromwarehouseComponent, VieworderrequestfromwarehouseComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderrequestfromwarehouseRoutingModule,
    NgbModule
  ]
})
export class OrderrequestfromwarehouseModule { }
