import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd24PartwiseissuanceRoutingModule } from './pd24-partwiseissuance-routing.module';
import { Pd24PartwiseissuanceComponent } from './pd24-partwiseissuance.component';
import { AddEditPd24Component } from './add-edit-pd24/add-edit-pd24.component';
import { ViewPd24Component } from './view-pd24/view-pd24.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Pd24PartwiseissuanceComponent, AddEditPd24Component, ViewPd24Component],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd24PartwiseissuanceRoutingModule
  ]
})
export class Pd24PartwiseissuanceModule { }
