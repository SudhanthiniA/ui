import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportorderRoutingModule } from './exportorder-routing.module';
import { ExportorderComponent } from './exportorder.component';
import { AddeditexportorderComponent } from './addeditexportorder/addeditexportorder.component';
import { ViewexportorderComponent } from './viewexportorder/viewexportorder.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ExportorderComponent, AddeditexportorderComponent, ViewexportorderComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ExportorderRoutingModule
  ]
})
export class ExportorderModule { }
