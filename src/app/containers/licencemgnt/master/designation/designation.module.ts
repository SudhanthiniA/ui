import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './designation.component';
import { ViewdesignationComponent } from './viewdesignation/viewdesignation.component';



@NgModule({
  declarations: [DesignationComponent, ViewdesignationComponent,],
  imports: [
    CommonModule,
    SharedModule,
    DesignationRoutingModule
  ]
})
export class DesignationModule { }
