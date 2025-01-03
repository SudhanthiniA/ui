import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DistilleryregreqwithinupRoutingModule } from './distilleryregreqwithinup-routing.module';
import { DistilleryregreqwithinupComponent } from './distilleryregreqwithinup.component';
import { AdddistilleryregreqwithinupComponent } from './adddistilleryregreqwithinup/adddistilleryregreqwithinup.component';
import { ViewdistilleryregreqwithinupComponent } from './viewdistilleryregreqwithinup/viewdistilleryregreqwithinup.component';

@NgModule({
  declarations: [DistilleryregreqwithinupComponent, AdddistilleryregreqwithinupComponent, ViewdistilleryregreqwithinupComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistilleryregreqwithinupRoutingModule,
    NgbModule
  ]
})
export class DistilleryregreqwithinupModule { }
