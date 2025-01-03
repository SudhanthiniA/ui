import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inspectionpart3RoutingModule } from './inspectionpart3-routing.module';
import { Inspectionpart3Component } from './inspectionpart3.component';
import { Viewinspectionpart3Component } from './viewinspectionpart3/viewinspectionpart3.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Inspectionpart3Component, Viewinspectionpart3Component],
  imports: [
    CommonModule,
    Inspectionpart3RoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Inspectionpart3Module { }
