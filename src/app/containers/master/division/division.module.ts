import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionRoutingModule } from './division-routing.module';
import { DivisionComponent } from './division.component';
import { AddDivisionComponent } from './add-division/add-division.component';
import { ViewDivisionComponent } from './view-division/view-division.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [DivisionComponent, AddDivisionComponent, ViewDivisionComponent],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    SharedModule
  ]
})
export class DivisionModule { }
