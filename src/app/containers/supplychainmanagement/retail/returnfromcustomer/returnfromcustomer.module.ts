import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReturnfromcustomerRoutingModule } from './returnfromcustomer-routing.module';
import { ReturnfromcustomerComponent } from './returnfromcustomer.component';
import { AddreturnfromcustomerComponent } from './addreturnfromcustomer/addreturnfromcustomer.component';
import { ViewreturnfromcustomerComponent } from './viewreturnfromcustomer/viewreturnfromcustomer.component';
import { ReturnconfirmationComponent } from './returnconfirmation/returnconfirmation.component';


@NgModule({
  declarations: [ReturnfromcustomerComponent, AddreturnfromcustomerComponent, ViewreturnfromcustomerComponent, ReturnconfirmationComponent],
  imports: [
    CommonModule,
    ReturnfromcustomerRoutingModule,
    SharedModule
  ]
})
export class ReturnfromcustomerModule { }
