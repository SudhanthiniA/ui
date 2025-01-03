import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './designation.component';
import { AdddesignationComponent } from './adddesignation/adddesignation.component';
import { ViewdesignationComponent } from './viewdesignation/viewdesignation.component';

import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    DesignationComponent,
    AdddesignationComponent,
    ViewdesignationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DesignationRoutingModule
  ]
})
export class DesignationModule { }
