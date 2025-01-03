import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrderallocationRoutingModule } from './orderallocation-routing.module';
import { OrderallocationComponent } from './orderallocation.component';
import { VieworderallocationComponent } from './vieworderallocation/vieworderallocation.component';
import { AddeditorderallocationComponent } from './addeditorderallocation/addeditorderallocation.component';

@NgModule({
  declarations: [ OrderallocationComponent, VieworderallocationComponent, AddeditorderallocationComponent ],
  imports: [
    CommonModule,
    SharedModule,
    OrderallocationRoutingModule,
    NgbModule
  ]
})
export class OrderallocationModule { }
