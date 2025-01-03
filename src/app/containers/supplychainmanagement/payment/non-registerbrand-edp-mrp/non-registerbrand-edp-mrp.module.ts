import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NonRegisterbrandEDPMRPRoutingModule } from './non-registerbrand-edp-mrp-routing.module';
import { NonRegisterbrandEDPMRPComponent } from './non-registerbrand-edp-mrp.component';
import { AddnonRegisterbrandEDPMRPComponent } from './addnon-registerbrand-edp-mrp/addnon-registerbrand-edp-mrp.component';
@NgModule({
  declarations: [NonRegisterbrandEDPMRPComponent,AddnonRegisterbrandEDPMRPComponent],
  imports: [
    CommonModule,
    NonRegisterbrandEDPMRPRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class NonRegisterbrandEDPMRPModule { }
