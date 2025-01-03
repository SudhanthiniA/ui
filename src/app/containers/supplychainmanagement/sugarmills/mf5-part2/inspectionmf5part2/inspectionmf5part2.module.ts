import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inspectionmf5part2RoutingModule } from './inspectionmf5part2-routing.module';
import { Inspectionmf5part2Component } from './inspectionmf5part2.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { Viewinspectionpart2Component } from './viewinspectionpart2/viewinspectionpart2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Inspectionmf5part2Component, Viewinspectionpart2Component],
  imports: [
    CommonModule,
    Inspectionmf5part2RoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Inspectionmf5part2Module { }
