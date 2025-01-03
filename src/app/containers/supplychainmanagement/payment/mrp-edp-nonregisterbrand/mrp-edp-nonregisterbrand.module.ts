import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MRPEDPNonregisterbrandRoutingModule } from './mrp-edp-nonregisterbrand-routing.module';
import { MRPEDPNonregisterbrandComponent } from './mrp-edp-nonregisterbrand.component';
import { AddMRPEDPNonregisterbrandComponent } from './add-mrp-edp-nonregisterbrand/add-mrp-edp-nonregisterbrand.component';


@NgModule({
  declarations: [MRPEDPNonregisterbrandComponent,AddMRPEDPNonregisterbrandComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    MRPEDPNonregisterbrandRoutingModule
  ]
})
export class MRPEDPNonregisterbrandModule { }
