import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LabelprintingRoutingModule } from './labelprinting-routing.module';
import { LabelprintingComponent } from './labelprinting.component';
import { AddlabelprintingComponent } from './addlabelprinting/addlabelprinting.component';
import { ViewlabelprintingComponent } from './viewlabelprinting/viewlabelprinting.component';



@NgModule({
  declarations: [LabelprintingComponent, AddlabelprintingComponent, ViewlabelprintingComponent],
  imports: [
    CommonModule,
    SharedModule,
    LabelprintingRoutingModule
  ]
})
export class LabelprintingModule { }
